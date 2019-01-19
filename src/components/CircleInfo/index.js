import React from "react";
import "../../styles/circle_info.scss";

const CircleInfo = props => {
  const { avarage } = props;

  const calculateAndReturnPercent = () => {
    const MAX = 10;
    const PERCENT = 100;
    const result = (avarage / MAX) * PERCENT;
    return result;
  };

  const avarageInPercent = calculateAndReturnPercent();

  return <div class="circle">{`${avarageInPercent}%`}</div>;
};

CircleInfo.defaultProps = {
  avarage: "?"
};

export default CircleInfo;
