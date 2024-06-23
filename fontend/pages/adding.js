import {useState} from "react"

const Adding = ()=>{
    const [Title, setTitle]=useState("");
    

return (
    <div className="Adding">
        <form className="From">
            <label >Title</label>
            <br/>
            <input type="text" onChange={(e)=>{setTitle(e.tagret.value)}} value={Title}></input>

        </form>


    </div>
)

}
export default Adding
