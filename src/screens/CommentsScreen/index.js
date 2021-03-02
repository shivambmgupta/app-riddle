import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TextInput, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePicture from '../../components/ProfilePicture';
import Action from '../../redux/actions';
import Styles from './Style';

export default (props) => {
    const [comments, addComments] = useState([]);
    const [newComment, addNewComment] = useState(''); 
    const dispatch = useDispatch();
    const { post } = props.route.params;
    const currentUser = useSelector(store => store.currentUser)
    const allComments = useSelector(store => store.comments)
    useEffect(() => {
        dispatch(Action.fetchComments());
    }, []);
    useEffect(() => {
        if (allComments && allComments.length) {
            let postRelatedComments = allComments.filter(comment => comment.postId === post?.id)
            addComments(postRelatedComments);
        }
    }, [allComments])
    return (
        <SafeAreaView style={Styles.outerContainer}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image source={require('../../assets/back.png')} />
                </TouchableOpacity>
                <Text style={Styles.headerTitleText}>Comments</Text>
            </View>
            <View style={Styles.scrollViewParentContainer}>
                <ScrollView>
                    {
                        comments.map(comment => {
                            return (
                                <View key={comment.id} style={Styles.commentWrapper}>
                                    <ProfilePicture source={{uri: comment.profilePicture}}/>
                                    <Text style={{ marginLeft: 10 }}>{comment.body}</Text>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
            <View style={Styles.seperator}/>
            <View style={Styles.bottomContainer}>  
                <ProfilePicture source={{ uri: currentUser.profilepicture }}/>
                <View style={Styles.textInputContainer}>
                    <TextInput 
                        autoFocus={props.route.params.mode === "NewComment"}
                        placeholder="Add a comment..."
                        onChangeText={(value) => addNewComment(value)}
                        value={newComment.length ? newComment : null}
                    />
                </View>
                <TouchableOpacity 
                    disabled={newComment.trim().length === 0}
                    onPress={() => {
                        let comment = {
                            postId: post?.Id,
                            userId: currentUser.id,
                            body: newComment.trim(),
                            time: new Date(),
                            profilePicture: currentUser.profilepicture
                        }
                        updatedComments = [ ...comments, comment ];
                        addNewComment('');
                        addComments(updatedComments);
                    }}
                >
                    <Text style={{
                        color: newComment.trim().length === 0 ? 'grey' : '#87CEEB'
                    }}>Post</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}