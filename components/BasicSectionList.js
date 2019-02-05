import React from 'react';
import {
    Alert,
    View,
    Text,
    StyleSheet,
    Platform,
    SectionList
} from 'react-native';

import { sectionListData } from '../DB/SectionListData';

class SectionListItem extends React.Component {

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'rgb(98, 197, 184)'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'rgb(173, 252, 250)',
                    marginLeft: 20,
                    marginRight: 10,
                }}>
                    {this.props.item.name}
                </Text>
                <Text style={{
                    fontSize: 16,
                    color: 'rgb(173, 252, 250)',
                    marginLeft: 20,
                    marginRight: 10,
                }}>
                    {this.props.item.description}
                </Text>
                <View style={{
                    backgroundColor: 'rgb(77, 120, 140)',
                    height: 1,
                    margin: 4,
                    marginLeft: 20,
                    marginRight: 10
                }}>

                </View>
            </View>
        );
    }
}

class SectionHeader extends React.Component {
    
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'rgb(77, 120, 140)',
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#fff',
                    margin: 20,
                }}>
                    {this.props.section.title}
                </Text>
            </View>
        );
    }
}

export default class extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                marginTop: Platform.OS === 'ios' ? 34 : 24,
            }}>
                <SectionList
                    sections={sectionListData}
                    renderItem={({ item, index }) => {
                        return (
                            <SectionListItem item={item} index={index} />
                        );
                    }}
                    renderSectionHeader={({ section }) => {
                        return (
                            <SectionHeader section={section} />
                        );
                    }}
                    keyExtractor={item => `${item.name}`}
                />
            </View>
        );
    }
}