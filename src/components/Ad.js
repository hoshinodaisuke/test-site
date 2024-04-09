import React from 'react';

const Ad = () => {
    const iFrame = '<script src="//ad.daoad.com/fr.js?unid=a9610ffd-e43d-4818-9037-97acaf4110f9"></script>';

    return (
        <div className="ad-space">
            <iframe title={"ad"} srcDoc={iFrame}></iframe>
        </div>
    );
};

export default Ad;