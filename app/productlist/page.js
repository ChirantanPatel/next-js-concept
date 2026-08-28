import Product from "./product";

const fetchData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}

const Page = async () => {
    const product = await fetchData();
    return (
        <div>
            <h1>Product List</h1>
            {
                product.map((item, key) => (
                    <div key={key}>
                        <h3 > Name : {item.title} </h3> 
                        <Product price={item.price} />
                    </div>
                ))
            }
        </div>
    );
};

export default Page;