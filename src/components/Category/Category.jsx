import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { GetByCategory } from "../../api/productService"
import { useLoading } from "../../hooks"
import NotFound from "../NotFound"
import Product from "../Product"
const Category = (props) => {
  const [ products, setProducts ] = useState({products: []});
  const {name, limit} = props.category
  const [ showLoading, hideLoading ] = useLoading()

  useEffect( () => {
    async function Load(){
      showLoading()
      const res = await GetByCategory(name, limit);
      setProducts({products: res.data.products.concat(res.data.products).concat(res.data.products).slice(0, limit), count: 12});
      hideLoading()
    }
    Load()
  }, [name])
    return (
        <div className="wrap">
          <div className="section-title">
            <b></b>
            <div className="title">{name}</div>
            <b></b>
          </div>
          <div className="row">
            {(!products || (products.length === 0)) && (
              <NotFound />
            )}
            {products.products.map((product) => {
              return <Product product={product}/>
            })}
          </div>
          { products.count > limit && ( <div className="center">
            <b></b>
            <Link to={"/category/"+name}><div className="see-more">Xem Thêm sản phẩm mới</div></Link>
            <b></b>
          </div>)}
         
        </div>
    )
}
export default Category