import React from 'react'
import "./about.css"
import TALKPHOTO from "../../img/messi_01.png";

const About = () => {
  return (
    <section id='about'>
      <h5>단톡에 대해서..</h5>
      <h2>About AssholeTalk</h2>

      <div className='container about__container'>
        <div className='about__talk'>
          <div className='about__talk-img'>
            <img src={TALKPHOTO} alt="messi"></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <h5>Career</h5>
              <small>2012.05 ~ ing..</small>
            </article>
            <article className='about__card'>
              <h5>Member</h5>
              <small>9명</small>
            </article>
            <article className='about__card'>
              <h5>Feature</h5>
              <small>파일썬 아이디 보유</small>
            </article>
          </div>
          <p>
          바이며, 것은 수 이상의 그러므로 천고에 뜨고, 얼음 주며, 있다. 위하여서, 속잎나고, 거친 찾아다녀도, 있는 같은 미인을 내려온 용기가 부패뿐이다. 많이 인간에 얼음이 위하여서. 그림자는 생생하며, 예가 몸이 이상이 과실이 갑 주는 피부가 쓸쓸하랴? 튼튼하며, 고동을 속에서 내는 있다. 같지 위하여 동산에는 불어 대고, 속잎나고, 군영과 피가 것이다. 그들의 영원히 때에, 그리하였는가? 바로 구할 풀밭에 사는가 힘있다. 이상이 같이 싶이 있는 곳으로 눈에 것이다.보라, 천자만홍이 부패뿐이다. 청춘 구하지 가치를 피에 것이다. 인간이 밝은 수 불어 반짝이는 것이다.
          </p>

          <a href="#contact" className='btn btn-primary'>자세히 알아보기</a>
        </div>
      </div>
    </section>
  )
}

export default About