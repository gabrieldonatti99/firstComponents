// ./src/components/LoginInput.js
import React from 'react';
import { TextInput } from 'react-native';

const LoginInput = ({ placeholder, onChangeText }) => {
  return <TextInput placeholder={placeholder} onChangeText={onChangeText} />;
};

export default LoginInput;
