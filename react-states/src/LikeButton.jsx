import { useState } from "react";

function LikeButton() {
  let [isLiked, setisLiked] = useState(false); //yaha humne updated value ko rerender karwane ke liye useState ko use kiya hai isme intialvalue define kar di hai false

  let toggleLike = () => {
    setisLiked(!isLiked); // yaha humne toggleLike function me updated value ko set kar diya not isLiked yani true 
  };

  let styling = {color :"red"};
  return (
    <p onClick={toggleLike}>
        {
            isLiked ?(<i className="fa-regular fa-heart" ></i>):(<i className="fa-solid fa-heart"style={styling}></i>)
        }
        
    </p>// yaha condition laga di hai iski help se click karne pe agar value false hai to 1st incon display hoga and agar true hai to 2nd like this ye toggle hota rahenga 
  );
}

export default LikeButton;
