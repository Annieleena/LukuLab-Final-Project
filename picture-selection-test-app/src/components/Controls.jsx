import "./Controls.css";

const ButtonDoneNext = ({ value, onClick }) => {
    return <div type="button" className="buttonDoneNext" onClick={onClick}>
        {value}
    </div>;
};

const AudioPlayer = ({ playSrc }) => {
    return <audio src={playSrc} className="audioPlayer" controls={true}/>;
};

export { AudioPlayer }
export { ButtonDoneNext };