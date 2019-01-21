import React from "react";
import "../../styles/circle_info.scss";

const CircleInfo = props => {
  const { average } = props;

  const calculateAndReturnPercent = () => {
    const MAX = 10;
    const PERCENT = 100;
    const result = (average / MAX) * PERCENT;
    return Math.round(result);
  };

  const averageInPercent = calculateAndReturnPercent();

  return <div className={props.nameOfClass}>{`${averageInPercent}%`}</div>;
};

CircleInfo.defaultProps = {
  average: "0"
};

export default CircleInfo;
