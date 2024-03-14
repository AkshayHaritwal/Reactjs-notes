import "./Card.css"; // yaha humne styling ke liye card.css file ko include kar liya hai 

import Price from "./Price.jsx"; // yaha humne price.jsx file ko include kar liya hai 

function Goods({title, idx  }) {
    // yaha humne inko array ki form me store karwa liya hai ye index ki help se single card me add ho jaayegi 
    let oldPrices = ["1212" , "3245" ,"6789","6969"];
    let newPrices = ["1323" ,"4534" ,"9876" ,"7943"];
    let description = [["Telscopic zoom","Oled display"], ["DSLR camera","inbuilt security features"], ["Battery quality","unbreakable"], ["Durable","Affordable"]]
    return (
        <div className="Goods">
            <h4 className="Title">{title}</h4>
            <p>{description [idx][0]}</p>
            <p>{description [idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice ={newPrices [idx]}/>
        </div>
    )
    
}
export default Goods;