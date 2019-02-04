import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight,
    Dimensions,
    TextInput,
    Platform
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

import data from '../DB/db';

const screen = Dimensions.get('window');
export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            movieName: '',
            movieDescription: ''
        };
    }

    showEditModal(editingMovie, flatListItem) {
        console.log(`editing ${JSON.stringify(editingMovie)}`);
        this.setState({
            id: editingMovie.id,
            movieName: editingMovie.name,
            movieDescription: editingMovie.description,
            flatListItem: flatListItem
        });
        this.refs.myModal.open();
    }

    render() {
        return (
            <Modal
                ref={'myModal'}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 35,
                    shadowRadius: 10,
                    width: screen.width - 90,
                    height: 280,
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    //alert(this.state.movieName + ' ' + this.state.movieDescription);
                    if (this.state.movieName.length > 0 || this.state.movieDescription.length > 0) {
                        this.setState(() => {
                            return {
                                movieName: '',
                                movieDescription: ''
                            };
                        });
                    }
                }}
            >
                <Text
                    style={styles.title}
                >
                    Movie's information.
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter movie's name"
                    onChangeText={(text) => {
                        this.setState(() => {
                            return { movieName: text }
                        })
                    }}
                    value={this.state.movieName}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter movie's description"
                    onChangeText={(text) => {
                        this.setState(() => {
                            return { movieDescription: text }
                        })
                    }}
                    value={this.state.movieDescription}
                />
                <Button
                    style={styles.buttonSave}
                    onPress={() => {
                        if (this.state.movieName.length === 0 || this.state.movieDescription.length === 0) {
                            alert(`You must enter movie's name and movie's description !`);
                            return;
                        }
                        //update item
                        const foundIndex = data.findIndex(item => this.state.id === item.id);

                        if (foundIndex < 0) {
                            return;
                        }
                        data[foundIndex].name = this.state.movieName;
                        data[foundIndex].description = this.state.movieDescription;

                        this.state.flatListItem.refeshFlatListItem();
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
    textInput: {
        height: 40,
        borderBottomColor: 'gray',
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    buttonSave: {
        color: '#fff',
        padding: 8,
        marginHorizontal: 70,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'mediumseagreen'
    }
});