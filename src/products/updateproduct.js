import { useState } from "react"
import productservice from "./productservice"

export default function Updateproduct(props){
    const [product_id , setproduct_id] = useState(props.product.product_id)
    const [product_name , setproduct_name] = useState(props.product.product_name)
    const [actual_price , setactual_price] = useState(props.product.actual_price)
    const [discount , setdiscount] = useState(props.product.discount)
    const [price , setprice] = useState(props.product.price)
    const [quantity , setquantity] = useState(props.product.quantity)
    const [category , setcategory] = useState(props.product.category.category_id)

    const productcategory = [{category_id:1 , category_name: "Electronics"},{category_id:2 , category_name: "Mobile"},
                            {category_id:3 , category_name: "Clothing"}, {category_id:4 , category_name: "Books"}]

    const handlechange = (e) =>{
        let value = e.target.value
        if(e.target.name === "product_id"){
            setproduct_id(value)
        }
        else if(e.target.name === "product_name"){
            setproduct_name(value)
        }
        else if(e.target.name === "actual_price"){
            setactual_price(value)
        }
        else if(e.target.name === "discount"){
            setdiscount(value)
        }
        else if(e.target.name === "quantity"){
            setquantity(value)
        }
        else if(e.target.name === "category"){
            setcategory(value)
        }
    }   

    const handlesubmit = (e) =>{
        setprice(actual_price * (100-discount)/100)
        e.preventDefault()
        let categoryObj = {}
        for (const cat of productcategory){
            if(cat.category_id == category){
                categoryObj = cat;
            }
        }
        let formvalue = {
            product_id,
            product_name ,
            actual_price,
            discount,
            price,
            quantity,
            category : categoryObj
        }
        
        console.log(formvalue)
        productservice.updateproduct(formvalue).then(response => {
            console.log("after update product :" + response)
            alert("Product updated successfully")
        }).catch((err) => {
            console.log(err)
            alert("Something went wrong")
        })
    }

    return (
        <form className="card-body" onSubmit={handlesubmit}>
            <div className='row mb-2'>
                <div className='col-6'>Product ID</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "product_id"
                    value = {product_id}
                    onChange ={handlechange}
                /></div>
            </div>
            <div className='row mb-2'>
                <div className='col-6'>Product name</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "text"
                    name = "product_name"
                    value = {product_name} 
                    onChange ={handlechange}
                /></div> 
            </div>
            <div className='row mb-2'>
                <div className='col-6'>Actual price (Rs.)</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "actual_price"
                    value = {actual_price}
                    onChange ={handlechange}
                /></div>
            </div>   
            <div className='row mb-2'>
                <div className='col-6'>Discount (%)</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "discount"
                    value = {discount}
                    onChange ={handlechange}
                /></div>
            </div>
            <div className='row mb-2'>
                <div className='col-6'>Price (Rs.)</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "price"
                    value = {actual_price * (100-discount)/100}
                /></div>
            </div>   
            <div className='row mb-2'>
                <div className='col-6'>Qty.</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "quantity"
                    value = {quantity}
                    onChange ={handlechange}
                /></div>
            </div>         
            <div className='row'>
                <div className='col-6'>Category</div>
                <div className='col-6'>
                <select className="form-control" 
                    name = "category"
                    value = {category}
                    onChange = {handlechange}>
                    <option>-- Select Department --</option>
                    {productcategory.map((prod) =>(
                        <option value ={prod.category_id} key = {prod.category_id}>{prod.category_name}</option>
                    ))}
                </select>
                </div>
            </div>
            <div>
                <button className="btn btn-success w-100 mt-3">Update</button>
            </div>
        </form>
    );
}