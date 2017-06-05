import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let parent = this;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="search by username ..."
                    ref= {(el) => { this.username = el; }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    onKeyPress={
                        (e)=> {
                            if (e.nativeEvent.key == "Enter") {
                              parent.props.keyToSearch(parent.state.username)
                            }
                        }
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C9C9CE',
    },
    input: {
        height: 30,
        flex: 1,
        paddingHorizontal: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
    },
});

