import React from 'react';
import { Image } from 'react-native';
import Styles from './Style';

export default (props) => (
    <Image 
        style={Styles.profilePicture}
        { ...props }
    />
);