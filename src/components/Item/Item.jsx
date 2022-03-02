import React , {useState, useEffect}from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import productsJson from '../productos/products.json'
import ItemCount from '../ItemCount/ItemCount'
import style from '../Item/Item.css'

export default function Item() {
    const [cart,setCart]=useState(0);
  
    const cont =(con)=>{
       setCart(con)
        
    }
   
    const buttonAdd=()=>{
        return(
            
                <div style={{padding: "10px", marginLeft:"3px"}}>
                    {   <Link to={`/cart/${cart}`}>
                        <button type="button" class="btn btn-success">Finalizar compra?</button>
                        </Link>
                    }

                </div>
            
        )
    }
   
    const {id} = useParams()
    console.log('parametro',id)    
    const [prodFilt,setProdFilt] = useState([]);

    const getProducts = (obProd)=>{
        return new Promise((resolve,reject)=>{
            const BD = productsJson;            
            const filtrar = BD.filter((e)=>{
                return e.id ===parseInt(obProd);
            });
            
            
            setTimeout(()=>{
                resolve(filtrar)                
            },2000)

        })

    }

    useEffect(()=>{
        const obProduct = async(id)=>{
            const resp = await getProducts(id)           
            console.log('respuesta',resp)
            setProdFilt(resp);            
        }
        obProduct(id);
    },[id])
 
    console.log('hook',prodFilt)
   
 
  return (

    <div className='conteiner-fluid '>
        
        {
            prodFilt.length === 0 ?
            
            <p className='text-center fs-1'>Cargando</p>
            
            : 
           <>
            {
                prodFilt.map((ele)=>{
                    return(
                     <div className='row' key={ele.id}>
                         
                        <div class="card mb-3 text-dark bg-warning col align-self-start" style={{maxWidth:"30rem"}}>
                            <img src={require(`../assets/${ele.image}`)} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{ele.name}</h5>
                            <p class="card-text">{ele.promo1}</p>
                            <p class="card-text">${ele.Precio}</p>
                            <p class="card-text"><small class="text-muted">{ele.categoria}</small></p>
                            </div>                          
                        </div>   
                            <div  className='col align-self-center item'>
                              
                               
                               <ItemCount onAdd={(con)=>cont(con)} />
                               {
                               cart===0 ? 
                               <br />
                               :
                               buttonAdd()
                               }
                               
                            </div>  
                      </div>   
                              
                       
                    )
                })
            }
           </>
        }
           
           </div>
     
             
             
            
               )    
  
}

