import React,{useEffect,useState} from 'react'
import productsJson from '../productos/products.json'
import ItemDetailConteiner from '../ItemDetailConteiner/ItemDetailConteiner'
import Item from '../Item/Item'


const ItemListContainer = () => {
const [products,setProducts]=useState([])

useEffect(()=>{
  const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(productsJson);      
      reject('UPPS!! no se encontro ningun producto!!!')
    },2000)
  })
  promise.then((resp)=>{  
      setProducts(resp)    
      //console.table(resp)   
    })
  promise.catch(err=>console.log('error',err))  
},[])

  return (
    <div>
      { products.length === 0 ?
          <>
          <p className='text-center fs-1'>Cargando</p>
          </>
          : 
          <>
          <ItemDetailConteiner params={products} />  
          {/* <Item params={products}/> */}
          </>           
      }
      
      
      
    </div>
  )
}

export default ItemListContainer

