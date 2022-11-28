
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
const listItem = ["Home", { "căn hộ & nhà ở": ["phòng khách", "phòng ngủ", "kệ tủ", "bàn trang điểm"]}, "Sản phẩm nội thất","Thiết bị phụ kiện bếp", {"báo giá": ["báo giá tủ bếp", "báo giá nội thất"]}, "Show room", "video", "Xưởng sản xuất", "liên hệ"]
console.log(listItem)
const Menu = () => {
    return (
        <div className="menu">
            <div className="container no-space">
                {listItem.map( (item) => {
                    if(typeof item === 'object'){
                        for(let key in item){
                            return (
                                <li key={key} className="parent-cate">
                                    <a href="">{key}</a>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                    <ul className='child-cate'>
                                {item[key].map((child) => {
                                    return (
                                        <li key={child}><a href="">{child}</a></li>
                                    )
                                })}
                                    </ul>
                                </li>

                            )
                        }
                    }
                    else{
                        return (
                            <li key={item}>
                                <a href="" >{item}</a>
                            </li>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default Menu;