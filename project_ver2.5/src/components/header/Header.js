import React from "react";
import "./header.css";
import "./ButoonH";
import ButoonH from "./ButoonH";
import MESSI1 from "../../img/chart.png";
import MESSI2 from "../../img/cam.png";
import MESSI3 from "../../img/com.png";
import MESSI4 from "../../img/chat.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="header__h">단톡 커뮤니티입니다!</h5>
        <h1 className="header__h1">Asshole Talk</h1>
        <h5 className="text-light">다양한 주제</h5>
        <ButoonH></ButoonH>

        <div className="messi">
          <div className="messi__container">
            <img src={MESSI1} alt="messi"></img>
            <div className="messi__title">
              <div class="messi__name">단톡 만남 기록</div>
                <div class="messi__message">단톡 모임을 년도별, 월별로 정리하여 통계를 볼 수 있는 공간</div>
            </div>
          </div>
          <div className="messi__container">
            <img src={MESSI2} alt="messi"></img>
            <div className="messi__title">
              <div class="messi__name">단톡 사진 모음</div>
                <div class="messi__message">단톡 사진을 업로드하고, 공유 해주세요</div>
            </div>
          </div>
          <div className="messi__container">
            <img src={MESSI3} alt="messi"></img>
            <div className="messi__title">
              <div class="messi__name">단톡 커뮤니티</div>
                <div class="messi__message">소통하고, 대화해요</div>
            </div>
          </div>
        </div>
        <div className="m_messi_container">
            <div className="messi__container">
              <img src={MESSI4} alt="messi"></img>
              <div className="messi__title">
                <div class="messi__name">단톡 커뮤니티</div>
                  <div class="messi__message">소통하고, 대화해요</div>
              </div>
            </div>
          </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
