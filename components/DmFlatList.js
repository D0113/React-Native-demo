import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import db from '../DB/db';

class FlatListItems extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'grey',
                }}>
                    <Image
                        source={{ uri: this.props.item.imageUrl }}
                        style={{ width: 100, height: 150, margin: 5 }}
                    />
                    <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 8, marginTop: 5, justifyContent: 'flex-start' }}>
                        <Text style={[styles.flatlistItem, styles.flatlistItemName ,{ marginBottom: 8 }]}>{this.props.item.name}</Text>
                        <Text style={styles.flatlistItem}>{this.props.item.description}</Text>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: '#696969' }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatlistItemName: {
        fontWeight: 'bold',
        color: 'orange'
    },
    flatlistItem: {
        color: 'white',
        fontSize: 16
    },
});

export default class extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 24 }}>
                <FlatList
                    data={db}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItems item={item} index={index} />
                        )
                    }}
                    keyExtractor={(item) => `${item.id}`}
                />
            </View>
        );
    }
}