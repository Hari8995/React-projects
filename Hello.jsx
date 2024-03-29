import React from 'react'
import '../Component/hello.css'

function Hello(props) {

  function add(p){
    alert(p)
  }

  // let cars=props.name
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];

  return (
    <>
      <div style={{backgroundColor:"red"}}>{props.name}</div>
      <button onClick={()=>add("hello world")} className='hello'>click me</button>
      {
        cars.length>0 &&
        <h2>
          their is{cars.length} cars
        </h2>
      }
      {
        cars.map((p)=>(
          <h1 key={p.id}>{p.brand}</h1>
        ))
      }
    </>

  )
}

export default Hello