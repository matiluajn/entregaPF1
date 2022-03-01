import React, {useState,useEffect} from 'react'
import productsJson from '../productos/products.json'
import { useParams} from 'react-router-dom'



export default function ItemSelected() {
    const {categoria} = useParams()
    console.log('parametro',categoria)    
    const [prodFilt,setProdFilt] = useState([]);

    const getProducts = (obProd)=>{
        return new Promise((resolve,reject)=>{
            const BD = productsJson;            
            const filtrar = BD.filter((e)=>{
                return e.categoria ===obProd;
            });
            
            
            setTimeout(()=>{
                resolve(filtrar)                
            },2000)

        })

    }

    useEffect(()=>{
        const obProduct = async(categoria)=>{
            const resp = await getProducts(categoria)           
            console.log('respuesta',resp)
            setProdFilt(resp);            
        }
        obProduct(categoria);
    },[categoria])

  console.log(prodFilt)

return(
    <div className='container-fluid '>
        <div className='row justify-content-evenly'>
        {
            prodFilt.length === 0 ?
            
            <p className='text-center fs-1'>Cargando</p>
            
            : 
           <>
            {
                prodFilt.map((ele)=>{
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
