import React from "react";
import  Card  from "./components/Card";
import reviews from "./data";
import { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);

  function rightHandler(){
    if(index<reviews.length-1){
      setIndex(index+1);
    }
    else{
      setIndex(0);
    }
  }

  function leftHandler(){
    if(index===0){
      setIndex(reviews.length-1);
    }
    else{
      setIndex(index-1);
    }
  }

  function surpriseHandler(){
    setIndex( Math.floor(Math.random()*(reviews.length)));
  }

  return(
    <div className="flex flex-col gap-6 justify-center items-center w-[100vw] h-[100vh] bg-slate-300">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-bold mb-[0.4rem]">Our Testimonials</h1>
        <div className=" w-[150px] h-1 bg-purple-400"></div>
      </div>

      <Card data={reviews[index]} rightHandler={rightHandler} leftHandler={leftHandler} surpriseHandler={surpriseHandler}></Card>
    </div>
  );
};

export default App;
