import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { horizontalFlatListData } from '../DB/HorizontalData';

class HorizontalFlatListItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {
                alert(`You press: ${this.props.item.hour}`);
            }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 90,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'grey',
                        margin: 4,
                    }}>



                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#fff',
                        margin: 20,
                    }}>
                        {this.props.item.hour}
                    </Text>
                    <Icon
                        size={30}
                        color='#fff'
                        name={this.props.item.status.ios}
                    />
                    <Text style={{
                        fontSize: 16,
                        margin: 10,
                        color: '#fff',
                    }}>
                        {this.props.item.degrees} °C
                </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class extends React.Component {

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: 24
                }}>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}>
                    <Image style={{
                        flex: 1,
                        width: null,
                        height: null,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                    }}
                        source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/12/14/48/soap-bubble-1974897_960_720.jpg' }}
                    />
                </View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#000',
                    backgroundColor: 'transparent',
                    margin: 10,
                }}>
                    Weather forecast
                </Text>
                <View style={{ height: 150 }}>
                    <FlatList
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.5
                        }}
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={({ item, index }) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                                </HorizontalFlatListItem>
                            )
                        }}
                        keyExtractor={item => `${item.hour}`}
                    />
                </View>
            </View>
        );
    }
}