import 'react-native-gesture-handler';
import React from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import MainRouter from './src/router';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isSplashScreenVisible: true
        }
    }


    componentDidMount() {
        setTimeout(() => { this.setState({ isSplashScreenVisible: false }) }, 2500)
    }

    render() {
        return MainRouter(this.state.isSplashScreenVisible)

    }
}

AppRegistry.registerComponent(appName, () => App);
