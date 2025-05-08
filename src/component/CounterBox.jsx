
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterBox = ({ count, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="col-lg-6 col-md-6 col-6" ref={ref}>
      <div className="number_section_box">
        <h3 className="heading text-center">
          {inView ? <CountUp end={count} duration={2} suffix="+" /> : "0+"}
        </h3>
        <p className="heading_content text-center">{label}</p>
      </div>
    </div>
  );
};

export default CounterBox;
