import React,{useEffect,useState} from 'react'

export default function ItemCount() {
      
  const [count, setCount] = useState(0)

  const stock = 10;

  const initial=()=>{
    setCount(0)
  };

  const sum=()=>{
    if(count>=stock){
        alert('acabas de llegar al total de stock disponible')
        setCount(stock)
    }else{
        setCount(count + 1)
    };
  }

    const restar=()=>{
      if(count<=0){
          alert('porfavor selecciona al menos 1 item')
          setCount(initial)
      }else{
          setCount(count - 1)
      };
   }
  return (
     <div >
        <div  class="btn-group" role="group" aria-label="Basic outlined example">
            <button onClick={restar} type="button" class="btn btn-outline-primary">-</button>
            <button onClick={initial} type="button" class="btn btn-outline-primary">{count}</button>
            <button onClick={sum} type="button" class="btn btn-outline-primary">+</button>
        </div>
    </div>
  )
}
