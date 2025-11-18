// import React, { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// const ScrollToTop = () => {

//   const pathName = useLocation()

//   useEffect(()=>{
//     window.scrollTo({top:0 , behavior:'smooth'})
//   },[pathName])
// }

// export default ScrollToTop







import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;   // ❌ required
};

export default ScrollToTop;
