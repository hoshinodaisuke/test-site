import React from 'react';
import PropTypes from "prop-types";

const Ad = ({ src }) => {
    const iFrame = '<script src={src}></script>';

    return (
        <div className="ad-space">
            <iframe title={"ad"} srcDoc={iFrame}></iframe>
        </div>
    );
};

Ad.propTypes = {
    src: PropTypes.string,
};

export default Ad;