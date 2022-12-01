
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
const listItem = [{ "căn hộ & nhà ở": ["phòng khách", "phòng ngủ", "kệ tủ", "bàn trang điểm"]}, "Sản phẩm nội thất","Thiết bị phụ kiện bếp", {"báo giá": ["báo giá tủ bếp", "báo giá nội thất"]}, "Show room", "video", "Xưởng sản xuất", "liên hệ"]

const Menu = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showUp, setShowUp] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    useEffect(() => {
        if(scrollPosition > 700)
            setShowUp(true)
        else setShowUp(false)
    }, [scrollPosition]);
    return (
        <div className="menu">
            <div className="container no-space">
                <li>
                    <a href={"/"} >Home</a>
                </li>
                {listItem.map( (item) => {
                    if(typeof item === 'object'){
                        for(let key in item){
                            return (
                                <li key={key} className="parent-cate">
                                    <a href={"/category/"+key}>{key}</a>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                    <ul className='child-cate'>
                                {item[key].map((child) => {
                                    return (
                                        <li key={child}><a href={"/category/"+child}>{child}</a></li>
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
                                <a href={"/category/"+item} >{item}</a>
                            </li>
                        )
                    }
                })}
            </div>
            { showUp && (
                <a href="#top" className="top">
                    <FontAwesomeIcon icon={faAngleUp} />
                </a>
            )}
            
        </div>
    )
}
export default Menu;