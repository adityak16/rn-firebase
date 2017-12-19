import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './inputStyles.js';
const { inputStyle, labelStyle, containerStyle } = styles;

const TextFieldInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
return (
        <View style={containerStyle}>
            <Text >{label}</Text>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
            />
        </View>
    );
};
export default TextFieldInput;
