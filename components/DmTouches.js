import React from 'react';
import {
    Alert,
    View,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

export default class extends React.Component {

    onPressButton() {
        Alert.alert('window ' + Dimensions.get('window').height, 'screen ' + Dimensions.get('screen').height);
    }

    render() {
        return (
            <View>
                <TouchableNativeFeedback
                    onPress={this.onPressButton}
                    style={{ borderRadius: 50 }}
                >
                    <View style={{ backgroundColor: '#67daff' }}>
                        <Text
                            style={{
                                color: 'white',
                                paddingHorizontal: 30,
                                paddingVertical: 20
                            }}
                        >
                            TouchableNativeFeedback
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}