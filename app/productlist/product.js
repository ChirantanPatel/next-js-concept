"use client"

const Product = ({ price }) => {
    return (
        <div>
            <button onClick={() => alert(price)}> Check Price </button>
        </div>
    )
}

export default Product;