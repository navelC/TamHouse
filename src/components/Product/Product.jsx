const Product = (props) => {
    const {product} = props
 return (
    <div>
        <a href={"/product/"+product.name}>
            <div className="zoom-image">
                <img width={2207} height={1300} src={"/img/"+product.image} alt="" />
                <div className="tag">
                    05 Th11
                </div>
            </div>
            <div className="box-text">
                {product.name}
            </div>
        </a>
    </div>
 )
}
export default Product