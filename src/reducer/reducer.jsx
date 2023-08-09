import { forumData } from "../Utils/ForumData";

export const initialState = {
    forumData: forumData,
    posts: forumData.posts,
    dropDownSelection: ""

}


export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "VOTE":
            return { ...state, posts: payload.updatedPosts }

        case "ADD_BOOKMARK":
            return { ...state, posts: payload.addToBookMark }

        case "SORT_POSTS":
            return { ...state, posts: payload.sortyBy }

        default:
            throw new Error(`Unknown action type ${action.type}`)
    }
}