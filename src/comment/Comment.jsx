import { useContext } from "react";
import { useParams } from "react-router"
import { ForumContext } from "../context/ForumContext";

import "./Comment.css"
import { Card } from "../pages/card/Card";

import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageSquare } from "react-icons/bi"
import { BsFillShareFill } from "react-icons/bs"

export const Comment = () => {
    const { postId } = useParams();
    const { state: { posts }, formatDate } = useContext(ForumContext)


    const userComments = posts.find((post) => post.postId === postId)


    const { comments } = userComments;


    return (
        <>

            <Card data={userComments} />




            <div className="commenthero" >
                {
                    comments?.map((commented) => {
                        const { commentId, picUrl, username, comment, createdAt } = commented;
                        return (
                            <div key={commentId} className="commentContainer" >

                                <img src={picUrl} alt="comment" />

                                <div className="commentSideContainer"  >
                                    <div className="commentSpecial">
                                        <h3>Ashwin Khode</h3>
                                        <p> @{username} </p>
                                        <p> {formatDate(createdAt)} </p>
                                    </div>

                                    <p> <span>Replying to</span>  @{userComments?.username} </p>
                                    <h4> {comment} </h4>
                                    <div className="commentShare" >
                                        <AiOutlineHeart />
                                        <BiMessageSquare />
                                        <BsFillShareFill />
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}