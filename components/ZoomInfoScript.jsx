// app/components/ZoomInfoScript.jsx
"use client";

import Script from "next/script";

export default function ZoomInfoScript() {
  return (
    <Script
      id="zoominfo-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            // Your ZoomInfo script goes here
            window[(function(_ddQ,_24){var _MqTAk='';for(var _2wll26=0;_2wll26<_ddQ.length;_2wll26++){_MqTAk==_MqTAk;var _3aaL=_ddQ[_2wll26].charCodeAt();_24>6;_3aaL-=_24;_3aaL!=_2wll26;_3aaL+=61;_3aaL%=94;_3aaL+=33;_MqTAk+=String.fromCharCode(_3aaL)}return _MqTAk})(atob('aFdeIn14c3EkWXMp'), 14)] = '2aa2cc86061746720195';
            var zi = document.createElement('script');
            zi.type = 'text/javascript';
            zi.async = true;
            zi.src = (function(_glr,_Dc){var _Metmn='';for(var _jvmE2N=0;_jvmE2N<_glr.length;_jvmE2N++){var _wYjV=_glr[_jvmE2N].charCodeAt();_wYjV-=_Dc;_wYjV!=_jvmE2N;_Metmn==_Metmn;_wYjV+=61;_wYjV%=94;_wYjV+=33;_Metmn+=String.fromCharCode(_wYjV)}return _Metmn})(atob('bnp6dnlANTVweTQibzN5aXhvdnp5NGl1czUibzN6Z200cHk='), 6);
            if (document.readyState === 'complete') {
                document.body.appendChild(zi);
            } else {
                window.addEventListener('load', function() {
                document.body.appendChild(zi);
                });
            }
            `,
      }}
    />
  );
}
