import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import './Controls.css';

import logo from '../../state/logo';

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg4 ms-u-xl4">
                            <TextField placeholder='Rottenburg-Stuttgart' ariaLabel='Diözese / Stadt angeben' value={this.props.text} onChanged={value => this.props.setText(value)} />
                        </div>
                        <div className="ms-Grid-col ms-u-sm12 ms-u-md5 ms-u-lg3 ms-u-xl4">
                            <Slider
                                min={60}
                                max={175}
                                value={this.props.fontSize}
                                onChange={value => this.props.setFontSize(value)}
                                showValue={true}
                            />
                        </div>
                        <div className="controls-toggle ms-Grid-col ms-u-sm12 ms-u-md7 ms-u-lg5 ms-u-xl4">
                            <Toggle
                                checked={this.props.transparent}
                                onChanged={checked => this.props.setTransparent(checked)}
                                onAriaLabel="Das Logo hat einen weißen Hintergrund."
                                offAriaLabel="Das Logo hat einen transparenten Hintergrund."
                                onText="Hintergrund umschalten"
                                offText="Hintergrund umschalten" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: logo.selectors.getText(state),
    transparent: logo.selectors.getTransparent(state),
    fontSize: logo.selectors.getFontSize(state),
});

const mapDispatchToProps = dispatch => ({
    setText: (text) => dispatch(logo.actions.setText(text)),
    setTransparent: (transparent) => dispatch(logo.actions.setTransparent(transparent)),
    setFontSize: (fontSize) => dispatch(logo.actions.setFontSize(fontSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
