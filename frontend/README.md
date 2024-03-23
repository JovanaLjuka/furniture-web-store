# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Get in Touch
Have questions or need assistance? Our team of design experts is here to help! Contact us via email, phone, or visit our showroom to experience our collection firsthand. Join us on our journey to redefine urban living through exceptional design.

const Product = require('../models/product')

// for routing

const getAllProducts = async (req, res) => {
const { sort, sort_dir, price, query, material, color } = req.query
const queryObject = {}

if (query) {
queryObject.$or = [
{ title: { $regex: new RegExp(query, 'i') } },
{ company: { $regex: new RegExp(query, 'i') } },
{ type: { $regex: new RegExp(query, 'i') } },
]
}
if (color) {
queryObject.color = color
}

if (material) {
queryObject.material = material
}

const sortOptions = {}
if (sort) {
sortOptions[sort] = parseInt(sort_dir) || 1
}
let result = await Product.find(queryObject).sort(sortOptions)
if (price) {
if (price === '0,500') {
result = result.filter(
(product) => product.price >= 0 && product.price <= 500
)
}
if (price === '500,1000') {
result = result.filter(
(product) => product.price >= 500 && product.price <= 1000
)
}
}

const products = await result

const materialsSet = new Set()
products.forEach((product) => {
product.material.forEach((material) => {
materialsSet.add(material)
})
})
const materials = Array.from(materialsSet)

res.status(200).json({
products,
totalProducts: products.length,
materials,
})
}
