import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import styles from "./Body.module.css";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import Resumes from "../Resume/Resumes";
import { Button } from "@mui/material";
import ImageButton from 'react-image-button';
import image  from './t1.png'




const Body = () => {
  const colors = ["#239ce2", "#48bb78","#420420","#0bc5ea", "#301934", "#ed8936","#FF5733 ","#ab2830"];
 
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
console.log("resumeInformation",resumeInformation.Summary.detail)

const [showResults, setShowResults] = React.useState(0)
console.log('showResults',showResults);

const onClick = () => {

  if(showResults===0)
  setShowResults(1)
  else{
    setShowResults(0)
  }
}
  
   
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
         
        <ReactToPrint
         onBeforePrint={()=>resumeInformation.Summary.detail? "" :alert("please enter")}
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
      {/* <button><img src={image} /></button> */}
      <Button onClick={onClick}><img src={image} /> </Button>
    
        {showResults ===1 ?  <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        /> : null}
      { showResults ===1 ? <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        /> : null}
      

   {/* <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resumes
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        /> */}

        
       
        {/* <Template
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        /> */}
       
      </div>
    </div>
  );
}

export default Body;