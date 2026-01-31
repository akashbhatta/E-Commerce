import React from 'react'

function PractiseState() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("John");

    function increment() {
        setCount(count + 1);
    }
        function decrement() {
        setCount(count - 1);
    }

  return (
    <div>
        {count},{name}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default PractiseState