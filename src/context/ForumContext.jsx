import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

export const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const handleUpvote = (postId) => {
        const updatedPosts = state.posts.map(post => {
            if (post.postId === postId) {
                return { ...post, upvotes: post.upvotes += 1 };
            }
            return post;
        });
        dispatch({
            type: "VOTE",
            payload: {
                updatedPosts: updatedPosts
            }
        })
    }


    const handleDownvote = (postId) => {
        const updatedPosts = state.posts.map(post => {
            if (post.postId === postId) {
                return { ...post, downvotes: post.downvotes += 1 };
            }
            return post;
        });
        dispatch({
            type: "VOTE",
            payload: {
                updatedPosts: updatedPosts
            }
        })
    }





    const handleBookMark = (postId) => {
        const addToBookMark = state.posts.map((post) => {
            if (post.postId === postId) {
                return { ...post, isBookmarked: !post.isBookmarked }
            }
            return post;
        })

        dispatch({
            type: "ADD_BOOKMARK",
            payload: {
                addToBookMark: addToBookMark
            }
        })
    }

    const sortBy = (dropValue) => {
        const sortedPosts = state.posts.sort((a, b) => {
            if (dropValue === "date") {
                return formatDate(b.createdAt) - formatDate(a.createdAt)
            }
            else if (dropValue === "vote") {
                return b.upvotes - a.upvotes
            } else {
                return;
            }
        })
        dispatch({
            type: "SORT_POSTS",
            payload: {
                sortyBy: sortedPosts
            }
        })
    }



    const handleDropdownValue = (e) => {
        const dropValue = e.target.value
        sortBy(dropValue)
    }


    const value = {
        state,
        formatDate,
        handleUpvote,
        handleBookMark,
        handleDownvote,
        handleDropdownValue
    }


    return (
        <>
            <ForumContext.Provider value={value} >
                {children}
            </ForumContext.Provider>
        </>
    )
}