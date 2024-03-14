import Product from "./Product.jsx"; // yaha humne Product.jsx file ko import kar liya hai 

function ProductTab() {
    let options = ["high-tec" , "Durable" ,"fast"]; // is tarah se hum array me multiple value pass karwa sakte hai 
    let option2 = {companyName :"Apple" , Headquarter :"carlifornia"}; // iss tarah se hum object ki form me value pass kar sakte hai
    return(
        <>
        
        <Product title={"Phone"} price={2000}  features={options} company={option2}/>
        <Product title={"Laptop"} price={40000} features={["GamingPass" ,"LongLasting Battry" ,"Touchpad"]} company={{companyName:"Samsung" , Headquarter :"Dubai"}}/>
        
        
        </>
    )// yaha humne title and price argument ki value define kar di hai so 
    // yaha humne multiple element ko combine kar liya hai 

    
}

export default ProductTab; // yaha productTab file ko export karwa diya hai iss app.jsx me import karwake return karwa denge 