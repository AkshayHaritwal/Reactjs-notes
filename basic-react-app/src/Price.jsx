function Price({oldPrice , newPrice}) {
    let oldStyling = {
        textDecorationLine : "line-through",
    }
    let newStyling = {
        fontWeight :"bold",
    }
    return (// yaha humne span me style tag lagakar usme styling ki value store karwa di hai 
        <div>
            <span style={oldStyling}>{oldPrice}</span> &nbsp;
            <span style={newStyling}>Rs.{newPrice}</span>
        </div>
    )
}

export default Price;