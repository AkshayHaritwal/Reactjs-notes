import { useState, useEffect } from "react";

export default function Joker() {
    let [joke , setJoke] = useState({});
  
    


    const getNewJoke = async()=>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup:jsonResponse.setup , punchline : jsonResponse.punchline});
        
    }

    useEffect(()=>{
        async function getFirstJoke() {
            let response = await fetch (URL);
            let jsonResponse = await response.json();
            setJoke({setup:jsonResponse.setup , punchline : jsonResponse.punchline});
    
            
        }
        getFirstJoke();
    },[]);

    return(
        <div>
            <h3>
                Joker
            </h3>
            <h2>{joke.setup}</h2>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
    
}