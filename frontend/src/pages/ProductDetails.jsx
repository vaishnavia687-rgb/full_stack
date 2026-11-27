
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                )

                setProduct(response.data)

                // Display product details in console
                console.log("Selected Product Details:", response.data)

            } catch (error) {
                console.log("Error fetching product:", error)
            }
        }

        getProduct()
    }, [id])

    if (!product) {
        return <h2 className="p-6">Loading...</h2>
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-5">
                Product Details
            </h1>

            <img
                src={product.image}
                alt={product.title}
                className="h-64 object-contain mb-5"
            />

            <h2 className="text-xl font-bold">
                {product.title}
            </h2>

            <p className="my-3">{product.description}</p>

            <p>Price: ${product.price}</p>

            <p>Category: {product.category}</p>

            <p>Rating: {product.rating?.rate}</p>

            <Link
                to="/"
                className="text-blue-600 underline"
            >
                Back to Home
            </Link>
        </div>
    )
}

export default ProductDetails
