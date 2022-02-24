import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'




export default function ItemDetailConteiner({params}) {
    const [prodParams, setProdParams] = useState([])
    useEffect(()=>{
        setProdParams(params)
        
    },[params])
    
   
   

  return (

    <div className='container-fluid'>
    <div className='row justify-content-evenly'>
        
        {           
            
            prodParams.map((e)=>{
                return(
                  <div className='col-4' key={e.id}>
                    
                      <div class="card  text-white bg-dark mb-3"  style={{maxWidth: "950px"}}>
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img src={require(`../assets/${e.image}`)} style={{height: "100%"}} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">{e.name}</h5>
                                <p class="card-text">{e.promo1}</p>
                                <p class="card-text">${e.Precio}</p> 
                                <p class="card-text">{e.categoria}</p> 
                                <Link to={`/category/${e.id}/${e.name}/${e.image}/${e.Precio}/${e.promo1}/${e.categoria}`}>
                                <button type="button" class="btn btn-warning">Ver Detalles</button>      
                                </Link>                     
                              </div>
                            </div>
                          </div>
                        </div>
                        
                   
                    
                  </div>
                 
                )
                
            })
               
            
        }
       
        
    </div>

    </div>
  )
}

