import { Link } from "react-router-dom"

const Product = (props) => {
    const {product} = props
 return (
    <div>
        <Link to={"/product/"+product.name}>
            <div className="zoom-image">
                <img width={2207} height={1300} src={process.env.REACT_APP_BASE_URL+"img/"+product.img} alt="" />
                <div className="tag">
                    05 Th11
                </div>
            </div>
            <div className="box-text">
                {product.name}
            </div>
        </Link>
    </div>
 )
}
export default Product