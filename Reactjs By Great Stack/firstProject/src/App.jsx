import {useState} from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {

  // we can write js logic here
  // let x = "Code With Prashant";
  // let array = ["1","2","3","4","5"];

  // if - else condition ------------------

  // let data = "girl";

  // event handlin -----------------

  // let x = 0;

  const [x,setx] = useState(0);

  const btnClick = () =>{
    console.log("clicked");
    setx(x+1);
    // console.log(x)
  }


  return (
    <div>
    
    {/* {x} */}
    {/* {array.map((user)=>{return <h2>{user}</h2>})} */}

    {/* {data === "boy"?<h1>Boy</h1>:<h1>Girl</h1>} */}

    {/* {x} // it wont print since react only print when state change it is normal variable */}

    {/* {x} */}

    <button onClick={btnClick}>Click Me</button>
    {/* below data is a props name and x is the value of the prop same we can pass function to it */}
    {/* <FirstComponent data={x} /> */}
    <FirstComponent data={x} fn={setx} />

    </div>
  )
}
export default App