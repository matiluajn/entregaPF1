import React , {useState, useEffect}from 'react'
import {useParams} from 'react-router-dom'

export default function Item() {
    const cate = useParams()
    console.log(cate)  

  return (
               
                
                <div class="card" key={cate.id} style={{width: "18rem"}}>                   
                    <img src={require(`../assets/${cate.image}`)} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">{cate.name}</h5>
                    <p class="card-text">${cate.Precio}</p>
                    <p class="card-text">{cate.promo1}</p>
                    <p class="card-text">{cate.categoria}</p>
                    
                    </div>
                </div>                       
                           
            
               )    
  
}

