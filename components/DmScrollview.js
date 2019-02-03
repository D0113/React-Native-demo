import React from 'react';
import {
    Alert,
    View,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';

export default class extends React.Component {
    render() {
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                // onMomentumScrollBegin={() => {
                //     alert('begin')
                // }}
                // onMomentumScrollEnd={() => {
                //     alert('end')
                // }}
                onScroll={(event) => {
                   //asdsadasd 
                }}
            >
                <View style={{
                    width: screenWidth,
                    backgroundColor: '#5f9ea0',
                    flex: 1,
                    marginTop: 24,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        padding: 15,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Screen 1
                    </Text>
                </View>
                <View style={{
                    width: screenWidth,
                    backgroundColor: 'tomato',
                    flex: 1,
                    marginTop: 24,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        padding: 15,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Screen 2
                    </Text>
                </View>
                <View style={{
                    width: screenWidth,
                    backgroundColor: 'black',
                    flex: 1,
                    marginTop: 24,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        padding: 15,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        );
    }
}