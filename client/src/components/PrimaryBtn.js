import React from "react";

const PrimaryBtn = ({ content, onBtnClick }) => {
  return (
    <div className="primary-btn" onClick={onBtnClick}>
      <button>{content}</button>
    </div>
  );
};

export default PrimaryBtn;
