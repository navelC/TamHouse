import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetById } from "../../api/productService";
import { TopProduct } from "../../components"

const ProductDetail = () => {
    const products = [{name:"( Nhà ở ) Chị Giang – Bùi Tá Hán – Đà Nẵng", image:"pic1.jpg"}, {name:"( Nhà ở ) Chị Giang – Bùi Tá Hán – Đà Nẵng", image:"pic3.jpg"}, {name:"căn hộ a", image:"pic4.jpg"}, {name:"a", image:"pic5.jpg"}, {name:"căn hộ b", image:"pic2.jpg"}]
    let { id } = useParams();
    const [ product, setProduct ] = useState({})
    useEffect(() => {
        async function load(){
            const res = await GetById(id)
            setProduct(res.data)
        }
        load();
    }, []);
    return (
        <div className="center">
            <div className="product-detail">
                <div className="title">{product.name}</div>
                <div className="descript"  dangerouslySetInnerHTML={{__html: product.descript}}></div>
            </div>
            <TopProduct products = {products}/>
        </div>
    )
}
export default ProductDetail