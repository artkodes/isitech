import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./footer.scss";

import { Power3, TimelineMax } from "gsap";

function Index() {
  const loading = useSelector(state => state.ui);

  let t1 = new TimelineMax();
  useEffect(() => {
    t1.from("#made", 2, {
      opacity: 0,
      delay: 1,
      y: "20%",
      ease: Power3.easeInOut
    }).from("#copyright", 2, {
      opacity: 0,
      y: "20%",
      ease: Power3.easeInOut
    });
  });

  return (
    <div className='footer'>
      {loading.isLoading ? null : (
        <footer>
          <span id='made'>made by artkodes.</span>
          <span id='copyright'>copyright, {new Date().getFullYear()} </span>
        </footer>
      )}
    </div>
  );
}

export default Index;
