
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products'
            )
            setProducts(response.data)
        } catch (error) {
            console.log('Error fetching products:', error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-6">
                Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4"
                    >
                        <h3 className="font-bold mb-3">
                            {product.title}
                        </h3>

                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-contain mb-4"
                        />

                        <p className="font-semibold mb-3">
                            Price: ${product.price}
                        </p>

                        <Link
                            to={`/productDetails/${product.id}`}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
