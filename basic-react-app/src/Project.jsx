import Goods from "./Card.jsx";

function Project (){
    let styling = {
        display :"flex",
        flexWrap :"wrap",
        justifyContent :"center",
        alignItem :"center"
    }
    return(
        <div style={styling}>

        <Goods title={"Samsung"} idx={0}/>
        <Goods title={"Apple"}idx={1}/>
        <Goods title={"Black berry"} idx={2}/>
        <Goods title={"Vivo"} idx={3}/>
        </div>
        
    ) // yaha humne card.jsx ko import kar liya hai and ispe argument ki value store kawa di hai 
}

export default Project ;