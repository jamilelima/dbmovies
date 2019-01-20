import React from "react";
import "../../styles/circle_info.scss";

const CircleInfo = props => {
  const { avarage } = props;

  const calculateAndReturnPercent = () => {
    const MAX = 10;
    const PERCENT = 100;
    const result = (avarage / MAX) * PERCENT;
    return Math.round(result);
  };

  const avarageInPercent = calculateAndReturnPercent();

  return <div className={props.nameOfClass}>{`${avarageInPercent}%`}</div>;
};

CircleInfo.defaultProps = {
  avarage: "0"
};

export default CircleInfo;
