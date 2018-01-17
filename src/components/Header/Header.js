import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

import FileSaver from 'file-saver';

import logo from '../../state/logo';

import './Header.css';

class Header extends Component {
    onResetClick = () => {
        this.props.reset();
    }

    onDownloadClick = () => {
        document.getElementById('canvas').toBlob((blob) => {
            FileSaver.saveAs(blob, 'logo.png');
        });
    }

    render() {
        return (
            <div>
                <CommandBar
                    isSearchBoxVisible={false}
                    items={
                        [
                            {
                                key: 'download',
                                iconProps: {
                                    iconName: 'Save',
                                },
                                onClick: this.onDownloadClick,
                                name: 'Herunterladen',
                            },

                        ]
                    }
                    farItems={
                        [{
                            key: 'reset',
                            iconProps: {
                                iconName: 'Refresh',
                                style: {
                                    color: '#a11100',
                                },
                            },
                            onClick: this.onResetClick,
                            name: 'Zurücksetzen',
                        }]
                    }
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(logo.actions.reset()),
});

export default connect(null, mapDispatchToProps)(Header);
