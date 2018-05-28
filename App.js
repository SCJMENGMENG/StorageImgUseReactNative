/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    CameraRoll,
    TouchableOpacity,
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import FS from 'react-native-fs'

const imgURL = 'https://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png';

import firstPage from './FirstPage';
import secondPage from './SecondPage';

type Props = {};

const ModalStack = StackNavigator(
    {
        firstPage: {screen: firstPage},
        secondPage: {
            screen: secondPage,
            navigationOptions: {
                headerTitle: '5555',
                headerRight: <TouchableOpacity>
                    <Text>6666</Text>
                </TouchableOpacity>,
            }
        },
    },
    {
        navigationOptions: {
            headerBackTitle: '0000',
            headerTintColor: '#000000',
            // header:null,
            showIcon: true,
            swipeEnabled: true,
            animationEnabled: true,
            headerText: '1111',
            headerTitle: '2222',
            // title:'3333',
            headerRight: <Text>4444</Text>,
        },
        mode: 'card',
    }
)

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <ModalStack/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
