import React from 'react'

function FilterByRating({ setMinRating, setMaxRating }) {

    function setMin(event){
     setMinRating(event.target.value);
    }
    
    function setMax(event){
        setMaxRating(event.target.value);
    }

  return (
    <div>
    Min Star:
    <input type = "number" onChange={setMin}/>
    Max Star:
    <input type = "number" onChange={setMax}/>

    </div>

  )
}

export default FilterByRating