import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "./firebase";

function SignIn() {
  function signInWithGoogle() {
    // console.log('clicked');
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "95vh",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "10px 15px",
            fontSize: "18px",
            borderRadius: "20px",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="contained"
          color="inherit"
          onClick={signInWithGoogle}
        >
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            style={{ width: "45px", marginRight: "5px" }}
          />
          Login With Google
        </button>
      </div>
      <div>
        <footer class="footer-distributed">
          <div class="footer-right">
            <a href="#">
              <i class="fa facebook"></i>
            </a>
            <a href="#">
              <i class="fa twitter"></i>
            </a>
            <a href="#">
              <i class="fa linkedin"></i>
            </a>
            <a href="#">
              <i class="fa github"></i>
            </a>
          </div>

          <div class="footer-left">
            <p> &copy; Build A Resume(BAR) | All Right Reserved 2022</p>
          </div>
          <div class="footer-center">
            <h4> Build A Resume</h4>
          </div>
        </footer>
      </div>
    </>
  );
}

export default SignIn;
