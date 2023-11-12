import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: 'prashant',
    age: 20
  }

  let newArr = [1,2,3];

  return (
    <>
    <Card name="Prashant" surName = "Malviya" count={myObj}/>
    <Card name="Prince" count={myObj}/>

      <h1 className="bg-blue-400 text-black p-5 rounded-xl py-6">
        Tailwind And Props
      </h1>
      
      <section>
        <div className="mx-auto max-w-7xl py-8 px-2 lg:px-0">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              People who made it successful
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              reiciendis a vel error explicabo voluptatum nihil possimus
              veritatis eos culpa.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div className="flex justify-center items-center">
              <img
                className="h-[300px] w-full rounded-md object-cover items-center"
                src="https://avatars.githubusercontent.com/u/90743489?v=4"
                alt=""
              />
            </div>
          </div>
          <div className="mt-8 text-center md:mt-16">
            <button
              type="button"
              class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      

    </>
  );
}

export default App;
