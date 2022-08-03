import { useState } from "react"
import StudentService from "./productservice"

export default function Addproduct(){

    const [product_id , setproduct_id] = useState("")
    const [product_name , setproduct_name] = useState("")
    const [actual_price , setactual_price] = useState("")
    const [discount , setdiscount] = useState("")
    const [price , setprice] = useState("")
    const [quantity , setquantity] = useState("")
    const [category , setcategory] = useState("")

    const productcategory = [{category_id:1, category_name: "Electronics"},{category_id:2 , category_name: "Mobile"},
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
            price : actual_price * (100-discount)/100,
            quantity,
            category : categoryObj
        }
        
        console.log(formvalue)
        StudentService.addproduct(formvalue).then(response => {
            console.log("product added :" + response)
            alert("Product added successfully")
            setprice("")
        }).catch((err) => {
            console.log(err)
            alert("Something went wrong")
        })
    }

    return(
        <div className="row justify-content-center">
        <div className="col-8 col-lg-4 col-xl-4">
        <div className="card">
        <div className="card-header">Product Details</div>
        <form className="card-body" onSubmit={handlesubmit} style={{padding :'10px 40px 15px 40px'}}>
            <h2>Add new product</h2>
            <div className="mb-3">
                <label>Product ID</label>
                <input className="form-control" min = "1" type="number" name = "product_id"
                    value={product_id} 
                    onChange={handlechange}
                />
            </div>
            <div className="mb-3">
                <label>Product name</label>
                <input className="form-control" type="text" name = "product_name"
                    value={product_name} 
                    onChange={handlechange}
                />
            </div>
            <div className="mb-3">
                <label>Actual price (Rs.)</label>
                <input className="form-control" type="number" name = "actual_price"
                    value={actual_price} 
                    onChange={handlechange}
                />
            </div>
            <div className="mb-3">
                <label>Discount (%)</label>
                <input className="form-control" type="number" name = "discount"
                    value={discount} 
                    onChange={handlechange}
                />
            </div>
            <div className="mb-3">
                <label>Price (Rs.)</label>
                <input className="form-control" type="number" name = "price"
                    value={actual_price * (100-discount)/100} 
                />
            </div>
            <div className="mb-3">
                <label>Qty.</label>
                <input className="form-control" type="number" name = "quantity"
                    value={quantity} 
                    onChange={handlechange}
                />
            </div>
            <div className="mb-3">
                <label>Category</label>
                <select className="form-control" name="category"
                        value={category} onChange={handlechange}>
                            <option>Select</option>
                    {productcategory.map((cat) => {
                        return <option key={cat.category_id} value={cat.category_id}>{cat.category_name}</option>
                    })}
                </select>
            </div>
            <button className="btn btn-success w-100" type="submit">
                Add
            </button>
        </form>
        </div>
        </div>
        <div className="col-2 col-lg-3 col-xl-3 fs-5 fw-bold">
            <p>1. To add product : localhost:3000/</p>
            <p>2. To see product details : localhost:3000/productdetails</p>
            <p>3. To update product : localhost:3000/updateproduct</p>
        </div>
        </div>
    );
}