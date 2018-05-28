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
} from 'react-native';

const imgURL = 'https://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png';

type Props = {};
export default class SecondPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image style={styles.img}
                           source={{uri: imgURL}}
                           resizeMode="contain" />
                </View>
                <View>
                    <Text onPress={this.saveImg.bind(this, imgURL)} style={[styles.saveImg]}>
                        保存图片到相册
                    </Text>
                </View>
            </View>
        );
    }

    //保存图片
    saveImg(img) {
        var promise = CameraRoll.saveToCameraRoll(img);
        promise.then(function(result) {
            alert('保存成功！地址如下：\n' + result);
        }).catch(function(error) {
            alert('保存失败！\n' + error);
        });
    }
}

//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems:'center'
    },
    image:{
        borderWidth:1,
        width:300,
        height:100,
        borderRadius:5,
        borderColor:'#ccc'
    },
    img:{
        height:98,
        width:300,
    },
    saveImg:{
        height:30,
        padding:6,
        textAlign:'center',
        backgroundColor:'#3BC1FF',
        color:'#FFF',
        marginTop:10,
    }
});
