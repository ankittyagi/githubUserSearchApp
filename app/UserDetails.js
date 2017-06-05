import React, {Component} from 'react';
import { View, ListView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ActionBar from './ActionBar';
import UserListItem from './UserListItem';
import SpinnerComponent from './SpinnerComponent';
import * as userService from './services/user-service-rest';


export default class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), loading: true };
        this._render = this._render.bind(this);
        userService.findUserByName(this.props.data.login).then(user => {
            this.setState({
                user: user,
                loading: false
            });
        });
    }
    _render(){
         if (this.state.loading) {
            return (
                <SpinnerComponent></SpinnerComponent>
            );
        } else {
            if (this.state && this.state.user) {
                let user = this.state.user;
                return (
                    <View style={styles.header}>
                        <Image source={{uri: user.avatar_url}} style={styles.picture} />
                        <Text style={styles.bigText}>{user.name}</Text>
                        <Text style={[styles.mediumText, styles.lightText]}>Email : {user.email}</Text>
                        <Text style={[styles.mediumText, styles.lightText]}>Username : {user.login}</Text>
                        <Text style={[styles.mediumText, styles.lightText]}>Followers : {user.followers}</Text>
                        <Text style={[styles.mediumText, styles.lightText]}>Following : {user.following}</Text>
                        <Text style={[styles.mediumText, styles.lightText]}>Repo's : {user.public_repos}</Text>
                        <ActionBar mobilePhone={9999999999} email={user.email} />
                    </View>
                );
            }else {
                return null;
            }
        }
    }
    render() {
            return (
                <View style={styles.container}>
                    {this._render()}
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#FAFAFF',
        paddingBottom: 4,
        borderBottomColor: '#F2F2F7',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    picture: {
        width: 200,
        height: 200,
        borderRadius: 40,
        marginTop: 20
    },
    smallPicture: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    mediumText: {
        fontSize: 16,
        marginTop: 10,
    },
    bigText: {
        fontSize: 20,
        marginTop: 15,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#AAAAAA',
    },
    list: {
        flex: 1,
    },
    lightText: {
        fontSize: 14,
        color: '#586069'
    }
});