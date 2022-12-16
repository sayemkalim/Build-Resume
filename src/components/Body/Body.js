import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import styles from "./Body.module.css";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import Resumes from "../Resume/Resumes";
import { Button } from "@mui/material";
import ImageButton from 'react-image-button';
import image from './t1.png'




const Body = () => {
  const colors = ["#239ce2"," #96006f","#48bb78", "#420420", "#0bc5ea", "#301934", "#ed8936", "#FF5733 ", "#ab2830"];

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
  console.log("resumeInformation", resumeInformation.Summary.detail)

  const [showResults, setShowResults] = React.useState(0)


  const [showResultsTwo, setShowResultsTwo] = React.useState(0)
  const [showResultsThree, setShowResultsThree] = React.useState(0)


  const onClick = () => {
    setShowResultsTwo(0)
    if (showResults === 0)
      setShowResults(1)
    else {
      setShowResults(0)
    }
  }

  const onClickTwo = () => {
    setShowResults(0)
    if (showResultsTwo === 0)
      setShowResultsTwo(1)
    else {
      setShowResultsTwo(0)
    }
  }

  const onClickThree = () => {

    if (showResultsThree === 0)
      setShowResultsThree(1)
    else {
      setShowResultsThree(0)
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
              className={`${styles.color} ${activeColor === item ? styles.active : ""
                }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>

        <ReactToPrint
          onBeforePrint={() => resumeInformation.Summary.detail ? "" : alert("please enter")}
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

        <Button 
        style={{marginLeft:-535}}onClick={onClick}><img src={image} width='250' height='250' /> </Button>
        <Button 
        style={{marginTop:-290,marginLeft:750}}onClick={onClickTwo}><img src={image} width='250' height='250' /> </Button>
        {/* <Button onClick={onClickThree}><img src={image} width='250' height='250' /> </Button> */}

        {showResults === 1 ? <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        /> : null}
        {showResults === 1 ? <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        /> : null}


        {showResultsTwo === 1 ? <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        /> : null}
        {showResultsTwo === 1 ? <Resumes
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        /> : null}

        {/* {showResultsThree === 1 ? <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        /> : null}
        {showResultsThree === 1 ? <Resumes
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        /> : null} */}





      </div>
    </div>
  );
}

export default Body;