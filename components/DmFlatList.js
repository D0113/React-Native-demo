import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import Swipeout from 'react-native-swipeout';

import db from '../DB/db';

class FlatListItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeRowKey: null
        };
    }
    render() {
        const swipeoutSettings = {
            backgroundColor: '#fb3d38',
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log('cancel pressed'), style: 'cancel' },
                                { text: 'Yes', onPress: () => {
                                    db.splice(this.props.index, 1);
                                    this.props.refeshParentFlatlist(deletingRow);
                                }}
                            ],
                                { cancelable: true }
                        );
                    },
                    text: 'Delete',
                    type: 'delete'
                }
            ],
            rowID: this.props.index,
            sectionID: 1
        };
        return (
            <Swipeout {...swipeoutSettings}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: '#000a12',
                    }}>
                        <Image
                            source={{ uri: this.props.item.imageUrl }}
                            style={{ width: 100, height: 170, margin: 5 }}
                        />
                        <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 8, marginTop: 5, justifyContent: 'flex-start' }}>
                            <Text style={[styles.flatlistItem, styles.flatlistItemName, { marginBottom: 8 }]}>{this.props.item.name}</Text>
                            <Text style={styles.flatlistItem}>{this.props.item.description}</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey' }}></View>
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    flatlistItemName: {
        fontWeight: 'bold',
        color: 'yellow'
    },
    flatlistItem: {
        color: 'white',
        fontSize: 16
    },
});

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deletedRowKey: null
        };
    }

    refeshFlatList = (deletedKey) => {
        this.setState({ deletedRowKey: deletedKey });
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 24 }}>
                <FlatList
                    data={db}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItems item={item} index={index} refeshParentFlatlist={this.refeshFlatList} />
                        )
                    }}
                    keyExtractor={(item) => `${item.id}`}
                />
            </View>
        );
    }
}