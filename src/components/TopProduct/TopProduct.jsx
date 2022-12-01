const TopProduct = (props) => {
    const {products} = props
    return (
        <div className="top-view">
            <div className="title">Bài viết được xem nhiều</div>
            {products.map((product) => {
                return (
                    <div className="wrap">
                        <img src={"/img/"+product.image} alt={product.name} />
                        <a href={"/product/"+product.name} className="product-name">{product.name}</a>
                    </div>
                )
            })}
        </div>
        
    )
}
export default TopProduct