// import  { useState, useEffect } from 'react';

//     const ScrollToTop = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const toggleVisibility = () => {
//         if (window.scrollY > 300) {
//             setIsVisible(true);
//         } else {
//             setIsVisible(false);
//         }
//         };

//         window.addEventListener('scroll', toggleVisibility);

//         return () => {
//         window.removeEventListener('scroll', toggleVisibility);
//         };
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//         });
//     };

//     return (
//         <div className="scroll-to-top">
//         {isVisible && 
//             <button onClick={scrollToTop}>Scroll To Top</button>
//         }
//         </div>
//     );
//     };

// export default ScrollToTop;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import './scrollToTop.css'

import { useState, useEffect } from 'react';

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={showButton ? 'show' : 'hide'} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default ScrollButton;
