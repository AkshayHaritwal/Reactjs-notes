import "./Product.css"; // yaha humne Product.css ko import karwa liya hai iski help se styling apply ho jaayegi

// yaha humne iss function me argument de diye hai iski help se jab hum inhe ProductTab.jsx me render karwayenge to haar ek ke liye alag title and price specify kar paayenge , inme hum iss tarah se default value bhi specify kar sakte hai 
function Product({title , price = 20 , features , company} ) {
    let styling = {backgroundColor : price >3000 ? "pink" :""}; // iss tarah se hum css pe condition laga sakte hai yaha jiski bhi price 3000> huyi uska bg pink ho jaayega
    return(
        <div className="Product">
            <h3 className="Title">{title}</h3>
            <h4>Price: {price}</h4>
            <h5>Features: {features.map((feature)=><li>{feature}</li>)}</h5>    
            {/* iss tarah se humne map function ko use karke sabhi array ke element ko li me convert kar diya hai  */}
           
            <h6>Company : {company.companyName} {company.Headquarter}</h6>

            {price >3000 && <p>discount of 5% </p>}
            {/* iss tarah se hum condition laga sakte hai yaha agar product ki price 3000 se jyada huyi to p tag wali statement print ho jaayegi else nahi */}
        </div>
    )
    
} // yaha humne sigle compoenents ko return karwa diya hai 

export default Product ; // yaha humne iss Pure Product function ko export karwa diya hai ab hum iss ProductTab.jsx file me import kar lenge 