import {Category, TopProduct} from "../../components"
import { useParams } from "react-router-dom";
const Classify = () => {
    let { category } = useParams();
    const products = [{name:"( Nhà ở ) Chị Giang – Bùi Tá Hán – Đà Nẵng", image:"pic1.jpg"}, {name:"( Nhà ở ) Chị Giang – Bùi Tá Hán – Đà Nẵng", image:"pic3.jpg"}, {name:"căn hộ a", image:"pic4.jpg"}, {name:"a", image:"pic5.jpg"}, {name:"căn hộ b", image:"pic2.jpg"}]
    return (
        <div className="center">
            <Category name={category}></Category>
            <TopProduct products = {products}/>
        </div>
    )
}
export default Classify