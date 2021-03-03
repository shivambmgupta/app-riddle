import React, { useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/Post';
import ProfilePicture from '../../components/ProfilePicture';
import Actions from '../../redux/actions';
import BottomContainer from '../../components/BottomContainer';
import ActivityIndicator from '../../components/ActivityIndicator';
import Styles from './Style';
import { ERROR_FETCHING_POST } from '../../constants/constans'

export default (props) => {
    const refRBSheet = useRef();
    const dispatch = useDispatch();
    const store = useSelector(store => store.posts);
    const user = useSelector(store => store.currentUser);
    useEffect(() => {
        dispatch(Actions.fetchPosts());
    }, []);
    return (
        <SafeAreaView style={Styles.outerContainer}>
            {!store && <ActivityIndicator />}
            <View style={Styles.header}>
                <View style={Styles.headerLeftChild}>
                    <Image style={Styles.headerLeftChildImage} source={require('../../assets/hamburger.png')} />
                    <Image style={Styles.headerLeftChildImage} source={require('../../assets/logo.jpg')} />
                </View>
                {
                    user &&
                    <TouchableOpacity onPress={() => refRBSheet.current.open()} style={Styles.headerRightChild}>
                        <View style={{alignItems: "center"}}>
                            <Text style={Styles.nameText}>{user.name}</Text>
                            <Text style={Styles.nameText}>{user.username}</Text>
                        </View>
                        <View>
                            <ProfilePicture source={{ uri: user.profilepicture }} />
                        </View>
                    </TouchableOpacity>
                }
            </View>
            <View style={Styles.scrollViewParent}>
                <ScrollView contentContainerStyle={Styles.scrollView}>
                    {
                        store?.posts && store.posts?.length && !store.errorFetchingPosts &&
                        store.posts.map(post => {
                            return post.userId === user?.id
                            ? <Post key={post.id} post={post} {...props} />
                            : null;
                        })
                    }
                    {
                        store?.errorFetchingPosts &&
                        <Text style={Styles.errorText}>
                            {ERROR_FETCHING_POST}
                        </Text>
                    }
                    <View style={{ height: 80 }} />
                </ScrollView>
            </View>
            <BottomContainer refer={refRBSheet} />
        </SafeAreaView>
    );
}