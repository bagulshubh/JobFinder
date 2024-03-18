import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { HiArrowNarrowRight } from "react-icons/hi";


function Goals() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="goals-con" ref={ref}>
      <div className={`goal ${isVisible ? "animate" : ""}`}><HiArrowNarrowRight />
Find jobs</div>
      <div className={`goal ${isVisible ? "animate" : ""}`}><HiArrowNarrowRight />
Apply easily</div>
      <div className={`goal ${isVisible ? "animate" : ""}`}><HiArrowNarrowRight />
Connect with employers</div>
      <div className={`goal ${isVisible ? "animate" : ""}`}><HiArrowNarrowRight />
Get career advice</div>
      <div className={`goal ${isVisible ? "animate" : ""}`}><HiArrowNarrowRight />
Build your network</div>
    </div>
  );
}

export default Goals;
