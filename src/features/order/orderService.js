
import axios from "axios"
const URL = process.env.REACT_APP_API_URL+'/api/orders/'

const orderProduct = async (orderDetails, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.post(URL, orderDetails, config)
    if (res) {
        localStorage.removeItem('carts')
    }

    return res.data
}

const getOrderById = async (orderId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get(URL + orderId, config)
    return res.data
}

const getOrderHistory = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get(URL + 'me', config)
    return res.data
}

const getAllOrders = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get(URL+'/admin', config)
    return res.data
}

const deleteOrderByAdmin = async (orderId, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.delete(URL+`admin/${orderId}`, config)
    return res.data
}

const getOrderSummery = async (token)=>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get(URL+`summery`, config)
    return res.data
}



export const orderService = {
    orderProduct,
    getOrderById,
    getOrderHistory,
    getAllOrders,
    deleteOrderByAdmin,
    getOrderSummery,
}