import mainImg from '../assets/heroo.png'
import store from '../assets/store.png'

const Section1 = () => {
  
  return (
    <div className="section1">
      <img src={mainImg} alt="" />
      <div className="up">
        <h3>Follow Us</h3>
        <div className="icons">
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-fill"></i>
          <i className="ri-facebook-fill"></i>
          <i className="ri-tiktok-fill"></i>
        </div>
      </div>
      <div className="down">
        <div className="left">
          <h3>Play Smarter.</h3>
          <h3>Improve Faster.</h3>
          <p>Spintip is an AI-powered video analysis app for tenis that helps players and coaches see, understand, and improve every shot.</p>
        </div>
        <div className="right">
          <div className="coacher">
            <h4>I'm Coacher</h4>
            <img src={store} alt="" />
          </div>
          <div className="player">
            <h4>I'm Player</h4>
            <img src={store} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1