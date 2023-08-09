import { useContext } from "react";
import { BsTriangle, BsFillShareFill, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs"
import { BiMessageSquare } from "react-icons/bi"
import { TbTriangleInverted } from "react-icons/tb"
import { ForumContext } from "../../context/ForumContext";
import "./Card.css"
import { NavLink } from "react-router-dom";


export const Card = ({ data }) => {
    const { state: { upVote }, formatDate, handleUpvote, handleBookMark, handleDownvote } = useContext(ForumContext)
    const { name, post, createdAt, tags, postDescription, upvotes, downvotes, postId, isBookmarked } = data;
    const date = formatDate(createdAt)
    return (
        <>
            <div className="parentCardContainer" >
                <div className="upvoteDownvote">
                    <BsTriangle onClick={() => handleUpvote(postId)} />
                    <p> {upvotes - downvotes} </p>
                    <TbTriangleInverted onClick={() => handleDownvote(postId)} />
                </div>


                <div >
                    <div className="cardDetails">
                        <img className="img2" />
                        <p>posted By @{name} </p>
                        {date}

                    </div>

                    <div className="cardSpecialMid" >
                        <h1>{post}</h1>
                        <div className="tags">
                            {
                                tags?.map((tag, i) => {
                                    return (
                                        <div key={i} className="tag" > {tag} </div>
                                    )
                                })
                            }
                        </div>
                        <p>
                            {postDescription}
                        </p>
                    </div>
                    <div className="cardShare" >
                        <NavLink to={`/comments/${postId}`} >
                            <BiMessageSquare />
                        </NavLink>

                        <BsFillShareFill />

                        {
                            !isBookmarked ?
                                <BsBookmarkCheck onClick={() => handleBookMark(postId)} /> :

                                <BsBookmarkCheckFill onClick={() => handleBookMark(postId)} />

                        }

                    </div>




                </div>



            </div>
        </>
    )
}