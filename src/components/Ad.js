import React from 'react';

const Ad = () => {
    // <script src="//dummy/fr.js?unid=a7799aeb-9d11-4a05-9764-dd6d3efb336b"></script>
    const iFrame = '<script src="//ad.stg.daoad.com/fr.js?unid=67b394fe-f2ae-4a64-8ba4-7f4b26d4b411"></script>';

    return (
        <div className="ad-space">
            <iframe srcDoc="<body style=&quot;margin:0&quot;><script src=&quot;//ad.stg.daoad.com/fr.js?unid=0e6bca0d-9991-4b13-875b-d159c4b1d1ae&quot;></script></body>" width="388" height="92" scrolling="no"></iframe>
        </div>
    );
};

export default Ad;
