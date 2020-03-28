
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

export class SettingScreen extends React.PureComponent {
    render() {
        return (
            <View>
                <Text>SettingScreen Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MyTabs')}>
                    <Text>'TO HOME SCREEN'</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
