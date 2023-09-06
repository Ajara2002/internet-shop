import axios from 'axios'

axios.defaults.baseURL='https://dummyjson.com'


//?Данные Категория
const getCategories=()=>{
    return axios.get('/products/categories')
}

//? Продукты
const allPorducts=()=>{
    return axios.get("/products")
}
const getCategoryProduct=(product)=>{
    return axios.get(`/products/category/${product}`)
}

const postOrderProducts=(product)=>{
    console.log("product>>>",product)
    const token='6427380350:AAGLabKYUyXcqOVjl6a4E05rPqWLHVUXRzE'
    const chat_id='5675729671'
    const api_url=`https://api.telegram.org/bot${token}/sendMessage`
    return axios.post(api_url,{
        parse_mode:"HTML",
        text:`<b>Новый Заказ</b>\n ФИО:
        ${product.data.name}\n телефон номер заказчика: 
        ${product.data.phone}\n Адрес:
        ${product.data.address}\n название товары:
        ${product.title}`,
        chat_id
    })
}

export const services={
    getCategories,
    allPorducts,
    getCategoryProduct,
    postOrderProducts
}