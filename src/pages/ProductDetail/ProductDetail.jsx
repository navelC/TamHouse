import { useParams } from "react-router-dom";
import { TopProduct } from "../../components"

const ProductDetail = () => {
    const products = [{name:"( Nhà ở ) Chị Giang – Bùi Tá Hán – Đà Nẵng", image:"pic1.jpg"}, {name:"( Nhà ở ) Chị Giang – Bùi Tá Hán – Đà Nẵng", image:"pic3.jpg"}, {name:"căn hộ a", image:"pic4.jpg"}, {name:"a", image:"pic5.jpg"}, {name:"căn hộ b", image:"pic2.jpg"}]
    let { product } = useParams();
    return (
        <div className="center">
            <div className="product-detail">
                <div className="title">{product}</div>
            </div>
            <TopProduct products = {products}/>
        </div>
    )
}
export default ProductDetail