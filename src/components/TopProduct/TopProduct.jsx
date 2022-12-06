import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { GetTopProduct } from "../../api/productService";

const TopProduct = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        async function load(){
            const res = await GetTopProduct();
            setProducts(res.data);
        }
        load();
    }, [])
    return (
        <div className="top-view">
            <div className="title">Bài viết được xem nhiều</div>
            {products.map((product) => {
                return (
                    <div className="wrap">
                        <img src={process.env.REACT_APP_BASE_URL+"img/"+product.img} alt={product.name} />
                        <Link href={"/product/"+product.name} className="product-name">{product.name}</Link>
                    </div>
                )
            })}
        </div>
        
    )
}
export default TopProduct