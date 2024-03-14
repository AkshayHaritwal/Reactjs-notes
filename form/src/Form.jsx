import { useState } from "react"

export default function Form() {
    let [formData , setFormData] = useState({
        fullName:"",
        username :"",
        password:"",
    }); // yaha humne ek object ki form me initial value ko store karwa liya hai jisme sabhi ko "" define kiya hai 

   let handleInputChange = (event) =>{
        let fieldName = event.target.name;
        let newValue = event.target.value; // yaha sabse pahle event ki help se name and value ko access kar lenge 

        setFormData ((currData)=>{
            currData[fieldName]= newValue;// then yaha pe newvalue assign karke usse spread karke return karwa denge 
            return {...currData};
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        setFormData({
            fullName:"",
            username :"",
            password:"",
        }) // iski help se jese hii form submit hoga to sabhi fields wapas empty ho jaayegi 
    }


    return(// yaha value me fullName me formdata.fullname wali value aa jaayegi  and onchange me handleInputchange ki help se jo change detact hoga uski value aa jaayegi
        <form onSubmit={handleSubmit}>
            <label htmlFor="Fullname"> Full name </label>
            <input placeholder="enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="Fullname" name="fullName"></input>
    
            
<br />
<br />
            <label htmlFor="username"> Username </label>
            <input placeholder="enter user name" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"></input>
            
<br /><br />
            
            <label htmlFor="password"> Password </label>
            <input placeholder="enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"></input>
           
            <button>Submit</button>
        </form>
    )
    
}