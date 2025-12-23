import React from 'react'
import {Card} from './Card'

const Section2 = () => {


const cards = [
  {
    h3: "Step1",
    h4 :"Record or Upload Your Match",
    desc: "Use your phone or camera to capture your or match",
  },
  {
    
   h3: "Step2",
    h4: "AI Analyzes Your Footage",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
   h3: "Step3",
    h4: "Get Feedback or Video Review",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
   h3:"Step4",
    h4: "Plan Your Next Session",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
   h3: "Step5",
    h4: "Track Your Progress",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },{
   h3: "Step6",
    h4: "Get Istant Support",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  }
];




  return (
    <div className="section2">
        <div className="top">
            <div className="how">
                <i className="ri-circle-fill"></i>
                <h3>How It Works</h3>
            </div>  
            <div className="what">
                <h3>What Is Spintip </h3>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="up">
                    <p><strong>Spintip</strong> is an innovatiove app for tennis player and coaches that combines video analysis, artificial intelligence and professional feedback to make training more efficient and progress measurable</p>
                </div>
                <div className="down">
                    <h4>
                        How It Works - <br />
                        Step by Step
                    </h4>
                    <i className="ri-arrow-right-long-line"></i>
                </div>
            </div>
            <div className="right">
                <div className="cards">
                    {
                        cards.map(function(elem,idx){
                            return <div key={idx}>
                                <Card h3={elem.h3} h4={elem.h4} desc={elem.desc} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2