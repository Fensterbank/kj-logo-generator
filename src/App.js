import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './state/Store';
import Header from './components/Header/Header.js';
import Logo from './components/Logo/Logo.js';
import Controls from './components/Controls/Controls.js';
import './App.css';

import { loadTheme } from 'office-ui-fabric-react';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'

import fabricTheme from './fabricTheme';
initializeIcons();

loadTheme(fabricTheme.theme);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { store: Store };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <div className="container">
                    <Header />
                    <Logo />
                    <Controls />
                </div>
            </Provider>
        );
    }
}

export default App;
