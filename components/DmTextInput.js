import React from 'react';
import {
    View,
    TextInput,
    Text,
    Keyboard
} from 'react-native';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    componentWillMount () {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return {
                    email: 'keyboard is show!'
                }
            });
        });

        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
            this.setState(() => {
                return {
                    email: 'keyboard is hide!'
                }
            });
        });
    }

    componentWillUnmount() {
        this.keyboardDidShow.remove();
        this.keyboardDidHide.remove();
    }

    render() {
        return (
            <View>
                <TextInput style={{
                    height: 40,
                    marginHorizontal: 20,
                    marginVertical: 30,
                    paddingHorizontal: 16,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 20,
                }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        email: text
                                    }
                                }
                            )
                        }
                    }
                />
                <Text style={{ marginHorizontal: 20, paddingHorizontal: 16 }}>{this.state.email}</Text>
                <TextInput style={{
                    height: 40,
                    marginHorizontal: 20,
                    marginVertical: 30,
                    paddingHorizontal: 16,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 20,
                }}
                    secureTextEntry={true}
                    placeholder='Enter your password'
          
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        password: text
                                    }
                                }
                            )
                        }
                    }
                />
                <Text style={{ marginHorizontal: 20, paddingHorizontal: 16 }}>{this.state.password}</Text>
                <TextInput style={{
                    height: 100,
                    marginHorizontal: 20,
                    marginVertical: 30,
                    paddingHorizontal: 16,
                    
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 20,
                }}
                    placeholder='Mutiline input'
                    multiline={true}
                    returnKeyType='done'
                    onSubmitEditing={Keyboard.dismiss}
                />
            </View>
        );
    }
}