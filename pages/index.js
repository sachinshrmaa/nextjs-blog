

import axios from "axios"

function HomePage(props) {

    function getAPI(){
        axios.post("/api/").then((res) => {
            console.log(res)
        })
    }
    
  return (
    <div>Hello world!
        <button onClick={() => getAPI()}>Click Me!</button>
    </div> 
  )
}

export default HomePage