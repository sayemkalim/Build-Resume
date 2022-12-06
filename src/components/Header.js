import React from "react";
import { Button,Toolbar, Box, AppBar } from '@mui/material'
import resumeSvg from "../image/resume.svg";
import styles from "./Header.module.css";
import { auth } from '../Login-Auth/firebase'


const Header = ({user}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={styles.header} position="static">
          <Toolbar>
            <p className={styles.headp}>B A R</p>
              <Button  style={{ padding: '20px', fontSize: '17px', borderRadius: '10px', fontWeight: '550', height: "30px",display: 'flex',   }}  color="inherit" onClick={()=> auth.signOut()}>Log Out</Button>
              <img src={user.photoURL} alt="dp" style={{"width": "40px", "borderRadius": "50%"}} referrerpolicy="no-referrer"/>
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
          <img src={resumeSvg} alt="Resume"/>
        </div>
      </div>
    </>
  );
};

export default Header;
