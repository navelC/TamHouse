import {Category, TopProduct} from "../../components"
import { useParams } from "react-router-dom";
const Classify = () => {
    let { category } = useParams();
    return (
        <div className="center">
            <Category category={{name: category, limit: 16}}></Category>
            <TopProduct />
        </div>
    )
}
export default Classify