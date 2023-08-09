import { useContext } from "react"
import "./Home.css"
import { ForumContext } from "../context/ForumContext"


import { Card } from "./card/Card"



export const Homepage = () => {
    const { state: { posts } } = useContext(ForumContext)
    return (
        <>
            <div className="homeContainer">
                <h2>Latest Posts</h2>
                {
                    posts?.map((data, i) => {
                        return (
                            <Card data={data} key={i} />
                        )
                    })
                }
            </div>

        </>
    )
}