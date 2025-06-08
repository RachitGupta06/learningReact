import React from 'react'

const Greetingsss = (props) => {
  return props.timeOfDay === 'Morning'?(<h1>Good Morning</h1>):(<h1>Good Afternoon</h1>)
}

export default Greetingsss