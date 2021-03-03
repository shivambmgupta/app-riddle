import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import ProfilePicture from '../ProfilePicture';
import Action from '../../redux/actions';
import Styles from './Style';

// The bottom sheet that holds the different registered accounts.

export default (props) => {
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();
    return (
        <RBSheet
            ref={props.refer}
            closeOnDragDown={true}
            closeOnPressMask={true}
            animationType="slide"
            height={400}
            openDuration={0}
            closeDuration={0}
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(52, 52, 52, 0.8)',
                },
                container: {
                    borderRadius: 10
                },
                draggableIcon: {
                    backgroundColor: "#000"
                }
            }}>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View>
                        {
                            users && users.length
                                ? users.map(user => {
                                    return (
                                        <TouchableOpacity
                                            key={user.id}
                                            onPress={() => {
                                                props.refer.current.close();
                                                dispatch(Action.currentUserSelectionChanged(user))
                                            }}
                                            style={Styles.user}
                                        >
                                            <View style={{
                                                flexDirection: "row",
                                                padding: 10
                                            }}>
                                                <View>
                                                    <ProfilePicture source={{ uri: user.profilepicture }} />
                                                </View>
                                                <View style={{ marginHorizontal: 10 }}>
                                                    <Text>{user.name}</Text>
                                                    <Text style={{ color: "grey" }}>{`${user.username} | ${user.website}`}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                                : <View style={{ marginVertical: 20, justifyContent: "center" }}>
                                    <TouchableOpacity style={Styles.noUser}>
                                        <Text style={{ color: "white" }}>Pity, we ran out of registered users!</Text>
                                    </TouchableOpacity>
                                </View>
                        }
                    </View>
                </ScrollView>
            </View>
        </RBSheet>
    );
}