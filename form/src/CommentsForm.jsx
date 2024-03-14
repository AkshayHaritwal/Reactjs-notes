import { useState } from "react"

export default function CommentsForm (){

    let [formData , setFormData] = useState({
        username:"",
        remarks:"",
        rating:5
    });

    let handleInputChange = (event) =>{
        setFormData((currData)=>{
            return {...currData ,[event.target.name]:event.target.value};
        });
    }

    let handleSubmit =(event) =>{
        console.log(formData);
        event.preventDefault();

        setFormData({
            username:"",
            remarks:"",
            rating:5,

        })
    }


    return (
        <div>
            <h4>
                Give a comment
            </h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input type="text" name="username" id="username" placeholder="Username" value={FormData.username} onChange={handleInputChange}/>
                <br /> <br />


                <label htmlFor="remarks">Remarks : </label>
                <textarea name="remarks" id="remarks" cols="30" rows="10" value={FormData.remarks} onChange={handleInputChange}></textarea>
                <br /><br />

                <label htmlFor="rating">Rating : </label>
                <input type="number" name="rating" id="rating" min={1} max={5} value={FormData.rating} onChange={handleInputChange} />
                <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}