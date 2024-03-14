function handleFormSubmit(event) {
    event.preventDefault(); // prevent default ki help se jese hii hum form submit karenge to information ekdum se gayab nahi hogi 
    console.log("form was submitted");
    
}

function Form (){
    return(
        <form >
            <input type="text" name="name" id="name" placeholder="enter name" />
            <button type="submit" onClick={handleFormSubmit}> Submit</button>
        </form>
    )
    
}

export default Form;