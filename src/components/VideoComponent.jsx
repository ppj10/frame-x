import PropTypes from "prop-types";

const VideoComponent = ({ id, small }) => {
    return (
        <iframe
            width="100%"
            height={small ? "100" : "300"}
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            allowFullScreen
        ></iframe>
    );
};

VideoComponent.propTypes = {
    id: PropTypes.string.isRequired,
    small: PropTypes.bool,
};

export default VideoComponent;