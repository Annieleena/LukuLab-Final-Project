import "./Frames.css";

const PageFrame = ({ children }) => {
  return <div className="pageFrame">{children}</div>;
};

const PicGroupFrame = ({ children }) => {
  return <div className="picGroupFrame">{children}</div>;
};

const AudioControlFrame = ({ children }) => {
  return <div className="audioControlFrame">{children}</div>;
};

const BottomFrame = ({ children }) => {
  return <div className="bottomFrame">{children}</div>;
};

export { BottomFrame };
export { PicGroupFrame };
export { PageFrame };
export { AudioControlFrame };
