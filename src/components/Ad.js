import React from 'react';

const Ad = () => {
    // <script src="//dummy/fr.js?unid=a7799aeb-9d11-4a05-9764-dd6d3efb336b"></script>
    const iFrame = '<script src="//ad.stg.daoad.com/fr.js?unid=67b394fe-f2ae-4a64-8ba4-7f4b26d4b411"></script>';

    return (
      <div className="ad-space">
        <iframe
          srcDoc='<body style="margin:0"><script src="//ad.stg.daoad.com/fr.js?unid=0e6bca0d-9991-4b13-875b-d159c4b1d1ae"></script></body>'
          width="388"
          height="92"
          scrolling="no"
        ></iframe>
        <script src="//ad.stg.daoad.com/vd.js?unid=cac80a4b-46ab-41f7-b886-797d99a6218a"></script>
        <script src="//ad.stg.daoad.com/vd.js?unid=8f7cae24-575d-4738-ae7b-0fb3fe59afe7"></script>
      </div>
    );
};

export default Ad;
