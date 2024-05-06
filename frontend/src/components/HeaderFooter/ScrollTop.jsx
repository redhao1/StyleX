import React, { useEffect } from "react";

function ScrollTop() {
    useEffect(() => {
        function handleScrollToTop() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
    
        const scrollButton = document.getElementById('site-scroll');
        if (scrollButton) {
          scrollButton.addEventListener('click', handleScrollToTop);
        }
    
        return (() => {
          if (scrollButton) {
            scrollButton.removeEventListener('click', handleScrollToTop);
          }
        });
      }, []);
      
    return(
        <span id="site-scroll"><i className="icon anm anm-angle-up-r"></i></span>
    );
}

export default ScrollTop;