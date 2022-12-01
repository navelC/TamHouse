import Product from "../Product"
const Category = (props) => {
  const {name, limit} = props
  const products = [{name:"( Nhà ở ) Chị Giang – Bùi Tá Hán – Đà Nẵng", image:"pic1.jpg"}, {name:"( Nhà ở ) Chị Giang – Bùi Tá Hán – Đà Nẵng", image:"pic3.jpg"}, {name:"căn hộ a", image:"pic4.jpg"}, {name:"a", image:"pic5.jpg"}, {name:"căn hộ b", image:"pic2.jpg"}]
    return (
        <div className="wrap">
          <div className="section-title">
            <b></b>
            <div className="title">{name}</div>
            <b></b>
          </div>
          <div className="row">
            {products.map((product) => {
              return <Product product={product}/>
            })}
          </div>
          { limit && ( <div className="center">
            <b></b>
            <div className="see-more">Xem Thêm sản phẩm mới</div>
            <b></b>
          </div>)}
         
        </div>
    )
}
export default Category