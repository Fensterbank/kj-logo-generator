import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import logoImg from './kj_logo_farbig.png';

import logo from '../../state/logo';

import './background.png';
import '../Logo/Logo.css';

class Logo extends PureComponent {
    constructor(props) {
        super(props);

        this.redraw = true;
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        this._context = this.canvas.getContext('2d');
        this._img = new Image();
        this._img.src = logoImg;

        this._img.onload = () => this.draw(true);
    }

    draw(init) {
        if (!init)
            this._context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (!this.props.transparent) {
            this._context.fillStyle = '#FFFFFF';
            this._context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        this._context.drawImage(this._img, 0, 0);

        this._context.fillStyle = 'black';
        this._context.font = `${this.props.fontSize}px Tahoma, "Nimbus Sans"`;
        this._context.textBaseline = 'top';
        this._context.fillText(this.props.text, 18, 570);
        this.redraw = false;
    }

    componentWillReceiveProps(nextProps) {
        this.redraw = (this.props.text !== nextProps.text || this.props.fontSize !== nextProps.fontSize || this.props.transparent !== nextProps.transparent);
    }

    componentDidUpdate() {
        if (this.redraw)
            this.draw();
    }

    render() {
        return (
            <div className="logo">
                <canvas id="canvas" ref={canvas => this.canvas = canvas} width="1544" height="740" />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: logo.selectors.getText(state),
    transparent: logo.selectors.getTransparent(state),
    fontSize: logo.selectors.getFontSize(state),
});

export default connect(mapStateToProps)(Logo);
