import React from 'react';
import { TouchableOpacity, Text, View, Image, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import ProfilePicture from '../ProfilePicture';
import Styles from './Style';
import * as Consts from '../../constants/constans';

// Post component, the name is written as Hardcoded name because post json has no field name.
// Name should be in posts.json fetching from the server.

export default (props) => {
    const { post } = props;
    const user = useSelector(state => state.currentUser);
    return (
        <TouchableOpacity style={Styles.outerContainer}>
            <View style={Styles.authorRow}>
                {post.image && <ProfilePicture source={{ uri: post.image }} />}
                <Text style={Styles.authorText}>{`by Hardcoded Name`}</Text>
            </View>
            <View style={{
                marginBottom: 10
            }}>
                <Text style={Styles.titleText}>
                    {post.title}
                </Text>
                <Text style={Styles.bottomMargin5}>{post.time}</Text>
                <Text style={Styles.bottomMargin5}>{post.body}</Text>
            </View>
            {
                post.image &&
                <View style={Styles.imageContainer}>
                    <Image
                        style={Styles.image}
                        source={{ uri: post.image }} />
                </View>
            }
            <View style={Styles.bottomRowWrapper}>
                <View style={Styles.bottomRowInnerContainer}>
                    <Image style={{ marginHorizontal: 5 }} source={require('../../assets/like.png')} />
                    <Image style={{ marginHorizontal: 5 }} source={require('../../assets/comment.png')} />
                    <TouchableOpacity onPress={() => props.navigation.navigate(Consts.COMMENT_SCREEN, { post })}>
                        <Text style={[Styles.textColor, { marginHorizontal: 5 }]}>{Consts.COMMENT}</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.bottomRowInnerContainer}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate(Consts.COMMENT_SCREEN, { post, mode: Consts.ADD_COMMENT_MODE })}>
                    <Text style={[Styles.textColor,{ marginHorizontal: 10}]}>{Consts.ADD_A_COMMENT}</Text>
                    </TouchableOpacity>
                    <ProfilePicture source={{ uri: user?.profilepicture }} />
                </View>
            </View>
        </TouchableOpacity>
    );
}