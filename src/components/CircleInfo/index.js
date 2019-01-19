import React from "react";
import "../../styles/circle_info.scss";

const CircleInfo = props => {
  return <div class="circle">{`${props.percent}%`}</div>;
};

CircleInfo.defaultProps = {
  percent: 80
};

export default CircleInfo;
