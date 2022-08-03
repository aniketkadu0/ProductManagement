import axios from "axios"

const BASE_URL = "http://localhost:8080"
const PRODUCTS = "/product"

const getHeader = () => {
    return {
        headers : {
            auth : "cdac-student"
        }
    }
}

const getproductList = () => {
    return axios.get(BASE_URL + PRODUCTS + "/details", getHeader())
}

const addproduct = (newProduct) => {
    return axios.post(BASE_URL + PRODUCTS,newProduct, getHeader())}

const updateproduct = (newProduct) => {
    return axios.put(BASE_URL + PRODUCTS + "/update",newProduct, getHeader())
}

const updateproductbyid = (newProduct) => {
    return axios.put(BASE_URL + PRODUCTS + "/id",newProduct, getHeader())
}

const productservice = {getproductList , addproduct, updateproduct ,updateproductbyid}
export default productservice