import React, { useEffect } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useLoading } from "../../hooks";
import {Category} from "../../components"
const Home = () => {
  const [showLoading, hideLoading] = useLoading();
  useEffect(() => {
    showLoading()
    //do sth here
    hideLoading()
  })
    return (
      <div>
        <Slide autoplay={true}>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(img/banner1.jpg)'
              }}
            >
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(img/banner2.jpg)'
              }}
            >
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(img/banner3.jpg)'
              }}
            >
            </div>
          </div>
        </Slide>
        <Category category={{name: "căn hộ và nhà ở", limit: 8}}/>
      </div>
    );
  };
export default Home