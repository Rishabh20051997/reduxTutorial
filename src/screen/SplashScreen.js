
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

export class SplashScreen extends React.PureComponent {
    render() {
        return (
            <View>
                <Text>Splash Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BottomTabScreen')}>
                    <Text>'TO HOME SCREEN'</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
