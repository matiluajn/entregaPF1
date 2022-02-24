import React, {useState,useEffect} from 'react'
import productsJson from '../productos/products.json'
import { useParams} from 'react-router-dom'


export default function ItemSelected() {
    const {categoria}= useParams();
    

    // const [products,setProducts]=useState([])
    const [filtro,setFiltro]=useState({})

    // useEffect(()=>{
    // const promise = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //     resolve(productsJson);      
    //     reject('UPPS!! no se encontro ningun producto!!!')
    //     },2000)
    // })
    // promise.then((resp)=>{  
    //     setProducts(resp)    
           
    //     })
    // promise.catch(err=>console.log('error',err))  
    // },[])
    // const productosFiltrados =  products.filter(unProducto =>unProducto.categoria === categoria)
    
   
           const promise= new Promise((resolve , reject)=>{
            const dataBase = productsJson;
            const productosFiltrados =  dataBase.filter(unProducto =>unProducto.categoria === categoria);
            setTimeout(()=>{
                resolve(productosFiltrados)
            },2000);

           })
    
    
    useEffect(()=>{
        try {
            promise.then((resp)=>{
                setFiltro(resp)
                console.log('resp',resp)
            })
                
                
            }          

         catch (error) {
            console.log('error',error)
        }
      
    },[categoria])
    
    console.log('filtro',filtro)

  return (
     <>  
        {
            
           

             filtro.map((e)=>{
                return(
                    <div class="card" style={{width: "18rem"}}>
                    <img src={require(`../assets/${e.image}`)} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{e.name}</h5>
                        <p class="card-text">{e.promo1}</p>
                        <p class="card-text">{e.Precio}</p>
                        <p class="card-text">{e.categoria}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                )
             })
          
            


     }
           
    </>        
             
    
  )
}
