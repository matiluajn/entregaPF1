import React, {useState,useEffect} from 'react'
import productsJson from '../productos/products.json'
import { useParams} from 'react-router-dom'


export default function ItemSelected() {
    const {categoria} = useParams();
    console.log('param',categoria)
    const [prod, setProd] = useState({});
    const filtro = productsJson.filter((e)=>e.categoria===categoria);
    useEffect(()=>{
      const resp =  new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(filtro)
            })
        },2000)
        resp.then((elem)=>{
            setProd(elem)
        })
    },[categoria])   
           

        

    

  

return(
    <div className='container-fluid '>
        <div className='row justify-content-evenly'>
        {
            prod.length === 0 ?
            
            <p className='text-center fs-1'>Cargando</p>
            
            : 
           <>
            {
                prod.map((ele)=>{
                    return(
                         
                      <div class="card mb-3 text-dark bg-warning" style={{maxWidth:" 18rem"}}>
                        <img src={require(`../assets/${ele.image}`)} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">{ele.name}</h5>
                          <p class="card-text">{ele.promo1}</p>
                          <p class="card-text">${ele.Precio}</p>
                          <p class="card-text"><small class="text-muted">{ele.categoria}</small></p>
                        </div>
                      </div>               
                       
                    )
                })
            }
           </>
        }
    </div>
    </div>
)
}
