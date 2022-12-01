import React from "react";
import { config } from "../../const"

const Header = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="foot-flex">
          <div className="about">
            <div className="title">Giới thiệu</div>
            <div className="content">
            Hãy để chúng tôi cho bạn sự khác biệt, chuyên nghiệp, 
            hiện đại, thẩm mỹ trong từng sản phẩm trong căn nhà của 
            bạn. TamHouse là đơn vị thi công nội thất nói chung và 
            nội thất bếp nói riêng được khách hàng quan tâm, yêu 
            thích nhất tại Đà Nẵng, với 5 năm kinh nghiệm trong nghề 
            cùng đội ngủ nhân viên tận tình hứa hẹn bạn sẽ có một 
            bản thiết kế tuyệt và độc đáo.
            </div>
          </div>
          <div>
            <div className="title">
              Thông tin liên hệ
            </div>
            <div className="content">
              <div className="box">
                <img src="/img/map.png" alt="" />
                <span>{config.address}</span>
              </div>
              <div className="box">
                <img src="/img/emai.png" alt="" />
                <span><a href={config.email}>{config.email}</a></span>
              </div>
              <div className="box">
                <img src="/img/phone.png" alt="" />
                <span><a href={config.phone}>{config.phone}</a></span>
              </div>
            </div>
          </div>
          <div>
            <div className="title">
              Mạng xã hội
            </div>
            <div className="content">
              <div className="box">
                <img src="/img/logo-face.png" alt="" />
                <span><a href={config.facebook}>{config.facebook}</a></span>
              </div>
              <div className="box">
                <img src="/img/logo-you.png" alt="" />
                <span>{config.youtube}</span>
              </div>
              <div className="box">
                <img src="/img/logo-zalo.png" alt="" />
                <span><a href={config.phone}>{config.phone}</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright {config.year} © <a href="">{config.name}</a>
        </div>
      </div>
    </div>
  );
};
export default Header