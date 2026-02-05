import React from 'react'

function ProductRange({ setMinValue, setMaxValue}) {
    
    function setMin(event){
 setMinValue(event.target.value);
    }
     function setMax(event){
       setMaxValue(event.target.value);
    }
  return (
    <div className="mb-6">
        Min Price:
        <input type="number" className="ml-2 p-1 border rounded" placeholder="Min" onChange={setMin}/>
        Max Price:
        <input type="number" className="ml-2 p-1 border rounded" placeholder="Max" onChange={setMax} />
    </div>
  )
}

export default ProductRange