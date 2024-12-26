import React, { useEffect } from 'react';

const LivezohoChat = () => {
  // Function to load the Zoho script dynamically
  const loadZohoScript = () => {
    if (document.getElementById('zsiqscript')) return; // Prevent multiple script loads

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'zsiqscript';
    script.defer = true;
    script.src = 'https://salesiq.zoho.in/widget';

    script.onload = () => {
      const $zoho = window.$zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: '717628a61e699ae0e43918d0fc6157f2e80eef239a9017a9d4732e39ad0babd554f6510e158408eac7e891895a00696d',
        values: {},
        ready: function () {},
      };

      $zoho.salesiq.ready = function (embedinfo) {
        $zoho.salesiq.chat.logo('https://www.exportgenius.in/images/logo.png');
        $zoho.salesiq.visitor.getGeoDetails();
      };

      $zoho.salesiq.afterReady = function (info) {
        console.log('info.Country = ' + info.Country);
        if (
          [
            'INDIA',
            'CHINA',
            'PAKISTAN',
            'BANGLADESH',
            'NIGERIA',
            'GHANA',
            'IRAN',
            'UGANDA',
            'TANZANIA',
            'NEPAL',
            'KENYA',
          ].includes(info.Country)
        ) {
          $zoho.salesiq.tracking.off();
        } else {
          $zoho.salesiq.tracking.on();
        }
      };
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  };

  return (
    <a role="button" onClick={loadZohoScript}>
      <img src="live-chat.png" alt="Live Chat" />
      <h5>Live Chat</h5>
    </a>
  );
};

export default LivezohoChat;
