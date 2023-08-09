import { AiFillHome } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { BsFillRocketTakeoffFill, BsBookmarkStar } from "react-icons/bs"
import "./Navigation.css"
import { useContext } from "react"
import { ForumContext } from "../../context/ForumContext"


export const NavigationLeft = () => {
    const { state: { forumData } } = useContext(ForumContext)
    return (
        <>
            <div className="navigationContainer">
                <div className="leftSpecialHeader" >
                    <div className="innerNavHeader">
                        <AiFillHome />
                        <span>Home</span>
                    </div>
                    <div className="innerNavHeader">
                        <BsFillRocketTakeoffFill />
                        <span>Explore</span>
                    </div>
                    <div className="innerNavHeader">
                        <BsBookmarkStar />
                        <span>Bookmarks</span>
                    </div>
                    <div className="innerNavHeader">
                        <CgProfile />
                        <span>Profile</span>
                    </div>
                </div>
                <div className="bottomProfileContainer">
                    <img className="img" />
                    <div>
                        <h3> {forumData?.name} </h3>
                        <p>@{forumData?.username}</p>
                    </div>
                </div>
            </div>
        </>
    )
}