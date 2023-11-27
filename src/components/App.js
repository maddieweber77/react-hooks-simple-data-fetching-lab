// create your App component here
import React, {useState, useEffect} from "react";

let API_URL = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setImage(data.message);
          });
      }, []);
    
    if(!image) {
        return <p>Loading...</p>
    }

    return(
        <div>
            <p>Here's a random dog for you...</p>
            <img src={image} alt="A Random Dog"/>

        </div>
    )
}

export default App;