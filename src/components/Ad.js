import React from 'react';

const Ad = () => {
    const iFrame = '<script src="//ad.daoad.com/fr.js?unid=edb03acb-4474-41ed-92ad-5bdd3782448a"></script>';

    return (
        <div className="ad-space">
            <iframe title={"ad"} srcDoc={iFrame}></iframe>
        </div>
    );
};

export default Ad;