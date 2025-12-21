import List from "./List.jsx"
import Right from "./Right.jsx"

const Section3 = () => {
    
const  sec =[{
    h3: "Smart Video Highlights",
    para: "Record your match or practice sessions. Spintip's AI automatically detects crucial moments—such as shots, rallies, mistakes, and pressure points—saving you hours of reviewing raw footage."
  },
  {
    h3: "Coach or AI Feedback",
    para: "Upload your video and receive expert insights to identify weaknesses in technique, footwork, or strategy. Choose between analysis from a human coach or AI assistance."
  },
  {
    h3: "Personalized Improvement",
    "para": "Focus on specific areas for growth—including serves, returns, movement, and consistency—with tailored drills and actionable recommendations designed just for you."
  },
  {
    h3: "Social & Motivational Aspect",
    para: "Create short clips, share them with your coach or friends, and get instant feedback. This keeps your motivation high and ensures your training remains consistent."
  },
  {
    h3: "Flexible & Accessible",
    para: "Get coaching feedback anytime, anywhere—even remotely. There is no need to schedule in-person lessons for every small adjustment."
  }
]
    

  return (
    <div className="section3">
        <div className="left">
            <div className="up">
                <i className="ri-checkbox-blank-circle-fill"></i><span>For Players</span>
            </div>
            <div className="down">
      {sec.map(function(elem,idx){
        return <div key={idx}>
          <List h3={elem.h3} para={elem.para} />
        </div>
      })}
            </div>
        </div>
        <Right/>
    </div>
  )
}

export default Section3