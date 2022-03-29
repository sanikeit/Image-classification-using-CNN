import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

	// This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: showButton ? 'inline' : 'none',
					right: '45%', position: 'absolute', fontSize: '50px'}}
      />
    </>
  )
}

export default ScrollButton
