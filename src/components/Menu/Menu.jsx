
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import { Get } from '../../api/categoryService';
import { Link } from 'react-router-dom';
import { useLoading } from '../../hooks';
const listItem = [{name: "báo giá", child: [{name: "báo giá tủ bếp"}, {name: "báo giá nội thất"}]}, {name: "Show room"}, {name: "video"}, {name: "Xưởng sản xuất"}, {name: "liên hệ"}]

const Menu = () => {
    const [categories, setCategories] = useState([])
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
    useEffect( () => {
        async function Load(){
            const res = await Get();
            listItem.forEach(element => {
                (res.data).push(element)
            });
            setCategories(res.data)
        }
        Load()
    }, [])
    return (
        <div className="menu">
            <div className="container no-space">
                <li>
                    <Link to={"/"} >Home</Link>
                </li>
                {categories.map( (item) => {
                    if(item.child && item.child.length > 0){
                        return (<li key={item.name} className="parent-cate">
                            <Link to={"/category/"+item.name}>{item.name}</Link>
                            <FontAwesomeIcon icon={faAngleDown} />
                            <ul className='child-cate'>
                                {item.child.map((child) => {
                                    return (
                                        <li key={child.name}><Link to={"/category/"+child.name}>{child.name}</Link></li>
                                    )
                                })}
                            </ul>
                        </li>)
                    }
                    else{
                        return (
                            <li key={item.name}>
                                <Link to={"/category/"+item.name} >{item.name}</Link>
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