import React, {useState} from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import "./ScrollButton.css"
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1100){
      setVisible(true)
    } 
    else if (scrolled <= 2000){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
      
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    
     <KeyboardDoubleArrowUpIcon  className='butt' onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}  />
    
  );
}
  
export default ScrollButton;
