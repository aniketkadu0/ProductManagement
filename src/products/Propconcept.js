import React, { useEffect, useState } from 'react'
import productservice from './productservice';
import Updateproduct from './updateproduct';
 
export default function Propconcept(){
    const [productid , setproductid] = useState("")
    const [productlist, setproductlist] = useState([])
    const [product, setproduct] = useState([])

    useEffect(() => {
        productservice.getproductList()
        .then((response) => {
            setproductlist(response.data)
            if(productid) {
                for(const prod of productlist){
                    if(prod.product_id == Number(productid)){
                        setproduct([prod])
                    }
                }
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [productid])

    return(
        <div className="row justify-content-center">
        <div className="col-1 col-lg-5 col-md-8">
        <div className="card">
        <div className="card-header">Product Details</div>
        <div className="card-body">
        <h5>Product ID</h5>
        <input type="text" className="form-control w-50" min = "0" placeholder='Enter product id' onChange = {(e) => setproductid(e.target.value)} />
        </div>
        <div>
        {product.map((product) => {
                return <Updateproduct key={product.product_id} product = {product} />    
            })}
        </div>
        </div>
        </div>
        </div>
    );
}
