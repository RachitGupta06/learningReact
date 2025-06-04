import React from 'react'

const Expression = () => {
  const name = "Rachit Gupta";
  const multiply = (a,b)=>a*b;
  const specialClass = "Anything I want";
  return (
    <section>
        <p>2+2</p>
        <p>{2+2}</p>
        <h1>name</h1>
        <h2>{name}</h2>
        <p>My list: {["Alex","John","Jon Snow"]}</p>
        <p>2*2 = {multiply(2,2)}</p>
        <p className={specialClass}>ALL About</p>
    </section>
  )
}

export default Expression