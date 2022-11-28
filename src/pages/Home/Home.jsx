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
                backgroundImage: 'url(https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)'
              }}
            >
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)'
              }}
            >
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)'
              }}
            >
              <span>
                Slide 3
              </span>
            </div>
          </div>
        </Slide>
        <Category name={"nội thất Căn hộ nhà ở"}/>
      </div>
    );
  };
export default Home