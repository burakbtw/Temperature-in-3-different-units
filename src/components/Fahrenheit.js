import React from 'react'

const fahrenheit = (props) => {
  return (
    <div>
        <h4> fahrenheit: {props.derece *9/5 + 32 } °F</h4>
    </div>
  )
}

export default fahrenheit