import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import Swipeout from 'react-native-swipeout';

import AddModal from './AddModal';
import EditModal from './EditModal';

import db from '../DB/db';
import { getMoviesFromServer } from '../networking/Sever';
import { create } from 'uuid-js';

class FlatListItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeRowKey: null,
            numRe: 0
        };
        this.refeshFlatListItem = this.refeshFlatListItem.bind(this);
    }

    refeshFlatListItem() {
        this.setState((preState) => {
            return {numRe: preState.numRe + 1};
        });
    }

    render() {
        const swipeoutSettings = {
            backgroundColor: '#000a12',
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
                        // Alert.alert(
                        //     'Update'
                        // );
                        this.props.parentFlatList.refs.editModal.showEditModal(db[this.props.index], this);
                    },
                    text: 'Edit',
                    type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log('cancel pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        db.splice(this.props.index, 1);
                                        this.props.parentFlatList.refeshFlatList(deletingRow);
                                    }
                                }
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete',
                    type: 'delete'
                },

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
                    <View style={{ height: 1, backgroundColor: 'gray' }}></View>
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
            deletedRowKey: null,
            moviesfromServer: []
        };

        this.onPressAdd = this.onPressAdd.bind(this);
    }

    componentDidMount() {
        this.refeshDataFromServer();
    }

    refeshDataFromServer() {
        getMoviesFromServer().then((movies) => {
            this.setState(() => {
                return { moviesfromServer: movies };
            });
        }).catch((err) => {
            this.setState(() => {
                return { moviesfromServer: [] };
            });
        });
    }

    refeshFlatList = (newId, add = false) => {
        this.setState(() => {
            return { deletedRowKey: newId };
        });
        // if (add) {
        //     this.refs.flatList.scrollToEnd();
        // }
    }


    onPressAdd() {
        this.refs.addModal.showAddModal();
    }


    render() {
        return (
            <View style={{ flex: 1, marginTop: 24 }}>
                <View style={{
                    backgroundColor: '#202124',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }} >
                    <TouchableHighlight
                        style={{ marginRight: 10 }}
                        underlayColor='#202124'
                        onPress={this.onPressAdd}
                    >
                        <Image
                            source={require('../assets/plus.png')}
                            style={{ width: 35, height: 35 }}
                        />
                    </TouchableHighlight>
                </View>
                <View style={{ height: 1, backgroundColor: '#212121' }}></View>
                <FlatList
                    extraData={this.state}
                    ref={'flatList'}
                    //data={db}
                    data={this.state.moviesfromServer}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItems item={item} index={index} parentFlatList={this}/>
                        )
                    }}
                    keyExtractor={(item) => `${item.id}`}
                />
                <AddModal ref={'addModal'} parentFlatList={this}>

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>
            </View>
        );
    }
}