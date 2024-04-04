import React, { useEffect } from 'react';
import postscribe from 'postscribe';

const Ad = () => {
    useEffect(() => {
        postscribe(
            '#ad-space',
            '<script src="//ad.daoad.com/fr.js?unid=edb03acb-4474-41ed-92ad-5bdd3782448a"></script>'
        );
    }, []);

    return (
        <div id="ad-space" className="ad-space" />
    );
};

export default Ad;