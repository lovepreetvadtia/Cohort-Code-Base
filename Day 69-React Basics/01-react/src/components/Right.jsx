import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'

const Right = () => {
  return (
    <div className="right">
        <div className="up">
            <h3>What will you get with Spintip as a Player</h3>
        </div>
        <div className="down">
            <img className='img1' src={img1} alt="" />
            <img className='img2' src={img2} alt="" />
        </div>
    </div>
  )
}

export default Right