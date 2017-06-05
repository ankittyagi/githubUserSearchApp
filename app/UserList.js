import React, {Component} from 'react';
import {View, ListView, StyleSheet} from 'react-native';
import SearchBar from './SearchBar';
import UserListItem from './UserListItem';
import SpinnerComponent from './SpinnerComponent';
import * as userService from './services/user-service-rest';

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), loading: true };
        this.search = this.search.bind(this);
        this._renderSpinner = this._renderSpinner.bind(this);
        userService.findAll().then(users => {
            this.setState({ 
                dataSource: this.state.dataSource.cloneWithRows(users),
                loading: false
            });
        });
    }

    search(key) {
        this.setState({
            loading: true
        });
        userService.findUsersByName(key).then(users => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(users.items),
                loading: false
            });
        });
    }
    _renderSpinner(){
         if (this.state.loading) {
            return (
                <SpinnerComponent></SpinnerComponent>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <View>
                {this._renderSpinner()}      
                <ListView style={styles.container}
                          dataSource={this.state.dataSource}
                          enableEmptySections={true}
                          renderRow={(data) => <UserListItem navigator={this.props.navigator} data={data} />}
                          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                          renderHeader={() => <SearchBar keyToSearch={this.search} />}
                ></ListView>
            </View>

                 
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 60
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#AAAAAA',
    }
});