import React, { PureComponent } from 'react';

import './Footer.css';

export default class Footer extends PureComponent {
    render() {
        return (<div className="Footer">
            <span>Entwickelt und Bereitgestellt von <a href="https://bol.vin" rel="noopener noreferrer" target="_blank">Frédéric Bolvin</a> für die <a href="https://www.kolpingjugend.de/" rel="noopener noreferrer" target="_blank">Kolpingjugend Deutschland</a></span>
            <span><a href="https://github.com/Fensterbank/kj-logo-generator" rel="noopener noreferrer" target="_blank">Source Code auf Github</a></span>
        </div>);
    }
}