import "./Regions.css";

const PicRegionLT = ({ children }) => {
    return <div title="LT" className="picregionLT">{children}</div>;
};

const PicRegionRT = ({ children }) => {
    return <div className="picregionRT">{children}</div>;
};

const PicRegionLD = ({ children }) => {
    return <div className="picregionLD">{children}</div>;
};

const PicRegionRD = ({ children }) => {
    return <div className="picregionRD">{children}</div>;
};

const AudioControlRegion = ({ children }) => {
    return <div className="audioControlRegion">{children}</div>;
};

export { PicRegionLD };
export { PicRegionLT };
export { PicRegionRD };
export { PicRegionRT };
export { AudioControlRegion };