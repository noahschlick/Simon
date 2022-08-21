import React from 'react';

export default class GoogleAds extends React.Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins class="adsbygoogle"
                style={{display: "block"}}
                data-ad-client="ca-pub-6243515819420079"
                data-ad-slot="9025725939"
                data-ad-format="auto"
                data-full-width-responsive="true"
               >
            </ins>
        )
    }
}

