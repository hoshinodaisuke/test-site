import React from 'react';

const Ad = () => {
    // <script src="//dummy/fr.js?unid=a7799aeb-9d11-4a05-9764-dd6d3efb336b"></script>
    const iFrame = '<script src="//ad.daoad.com/fr.js?unid=62c8aca8-1459-4cb8-a564-e969d2ff1c42"></script>';

    return (
        <div className="ad-space">
            <iframe title={"ad"} srcDoc={iFrame}></iframe>
        </div>
    );
};

export default Ad;
