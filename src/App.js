import React from "react";
import  Card  from "./components/Card";
import reviews from "./data";
import { useState } from "react";
import { Header } from "./components/Header";

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
      <Header></Header>
      <Card data={reviews[index]} rightHandler={rightHandler} leftHandler={leftHandler} surpriseHandler={surpriseHandler}></Card>
    </div>
  );
};

export default App;
