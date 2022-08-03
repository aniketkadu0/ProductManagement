export default function Productdetailshtml(props){

    return (
        <div>
        <form className="card-body">
            <div className='row mb-2'>
                <div className='col-6'>Product ID</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "product_id"
                    defaultValue = {props.product.product_id}
                /></div>
            </div>
            <div className='row mb-2'>
                <div className='col-6'>Product name</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "text"
                    name = "product_name"
                    defaultValue = {props.product.product_name} 
                /></div> 
            </div>
            <div className='row mb-2'>
                <div className='col-6'>Actual price (Rs.)</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "actual_price"
                    defaultValue = {props.product.actual_price}
                /></div>
            </div>   
            <div className='row mb-2'>
                <div className='col-6'>Discount (%)</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "discount"
                    defaultValue = {props.product.discount}
                /></div>
            </div>
            <div className='row mb-2'>
                <div className='col-6'>Price (Rs.)</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "price"
                    defaultValue = {props.product.price}
                /></div>
            </div>   
            <div className='row mb-2'>
                <div className='col-6'>Qty.</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "number"
                    name = "quantity"
                    defaultValue = {props.product.quantity}
                /></div>
            </div>         
            <div className='row'>
                <div className='col-6'>Category</div>
                <div className='col-6'>
                <input className="form-control"
                    type = "text"
                    name = "category"
                    defaultValue = {props.product.category.category_name}/>
                </div>
            </div>
        </form>
        -----------------------------------------------------------------------------------------------
        </div>
    );
}