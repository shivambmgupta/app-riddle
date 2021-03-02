import React, { useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, Text, View,Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/Post';
import ProfilePicture from '../../components/ProfilePicture';
import Actions from '../../redux/actions';
import BottomContainer from '../../components/BottomContainer';
import ActivityIndicator from '../../components/ActivityIndicator';
import Styles from './Style';

export default (props) =>  {
    const refRBSheet = useRef();
    const dispatch = useDispatch();
    const store = useSelector(state => state.posts);
    const user = useSelector(state => state.currentUser);
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
                <View>
                    <TouchableOpacity onPress={() => refRBSheet.current.open() }>
                        <ProfilePicture source={{ uri: user?.profilepicture }}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.scrollViewParent}>
                <ScrollView contentContainerStyle={Styles.scrollView}>
                    {
                        store?.posts && store.posts?.length && !store.errorFetchingPosts &&
                        store.posts.map(post => {
                            return (
                                <Post key={post.id} post={post} { ...props} />
                            );
                        })
                    }
                    {
                        store?.errorFetchingPosts && 
                        <Text style={Styles.errorText}>
                            Something went wrong, couldn't fetch your posts.
                        </Text>
                    }
                    <View style={{ height: 80 }} />
                </ScrollView>
            </View>
            <BottomContainer refer={refRBSheet}/>
        </SafeAreaView>
    );
}