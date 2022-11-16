import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styles from "./Header.module.css";
import resumeSvg from "../image/resume.svg";
const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={styles.header} position="static">
       {/* {<img className={styles.headimg} src='header-logo.png' />} */}
          <Toolbar>
            <p className={styles.headp}>B A R</p>
          </Toolbar>
        </AppBar>
      </Box>

      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
    </>
  );
};

export default Header;
