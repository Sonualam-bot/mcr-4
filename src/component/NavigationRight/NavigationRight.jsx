import { useContext } from "react"
import { ForumContext } from "../../context/ForumContext"

export const NavigationRight = () => {
    const { handleDropdownValue } = useContext(ForumContext)
    return (
        <>
            <div>
                <h3>Sort By</h3>
                <select onClick={handleDropdownValue} >
                    <option>Sort By</option>
                    <option value="vote" >Most Voted</option>
                    <option value="date" >Date</option>
                </select>
            </div>
        </>
    )
}