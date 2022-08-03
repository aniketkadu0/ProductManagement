import React, { useEffect, useState } from 'react'
import productservice from './productservice'
import Productdetailshtml from './productdetailshtml'

export default function Productdetails(){
    const [Productlist, setProductlist] = useState([])

    useEffect(() => {
        productservice.getproductList()
        .then((response) =>{
            console.log(response)
            if (response) {
                setProductlist(response.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    
    return(
        <div className="row justify-content-center">
        <div className="col-1 col-lg-5 col-md-8">
        <div className="card">
        <div className="card-header">Product Details</div>
        <div>
            {Productlist.map((product) => {
                return <Productdetailshtml key={product.product_id} product = {product} />    
            })}
        </div>
        </div>
        </div>
        </div>
    );
}