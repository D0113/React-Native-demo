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
const uuidv1 = require('uuid/v1');
export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newMovieName: '',
            newMovieDescription: ''
        };
    }

    showAddModal() {
        this.refs.myModal.open();
    }

    randomId() {
        return uuidv1();
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
                    //alert(this.state.newMovieName + ' ' + this.state.newMovieDescription);
                    if (this.state.newMovieName.length > 0 || this.state.newMovieDescription.length > 0) {
                        this.setState(() => {
                            return {
                                newMovieName: '',
                                newMovieDescription: ''
                            };
                        });
                    }
                }}
            >
                <Text
                    style={styles.title}
                >
                    New movie's information.
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter new movie's name"
                    onChangeText={(text) => {
                        this.setState(() => {
                            return { newMovieName: text }
                        })
                    }}
                    value={this.state.newMovieName}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter new  movie's description"
                    onChangeText={(text) => {
                        this.setState(() => {
                            return { newMovieDescription: text }
                        })
                    }}
                    value={this.state.newMovieDescription}
                />
                <Button
                    style={styles.buttonSave}
                    onPress={() => {
                        if (this.state.newMovieName.length === 0 || this.state.newMovieDescription.length === 0) {
                            alert(`You must enter movie's name and movie's description !`);
                            return;
                        }
                        const newId = this.randomId();
                        const newMovie = {
                            id: newId,
                            name: this.state.newMovieName,
                            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUB25wJWlYSokzNLpvjkOkhds9o3iKI26IBT82kx3itReGPxN6',
                            description: this.state.newMovieDescription
                        };
                        data.unshift(newMovie);

                        this.props.parentFlatList.refeshFlatList(newId, true);
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