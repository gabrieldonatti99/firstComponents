// ./src/components/LoginButton.js
import React from 'react';
import { Button } from 'react-native';

const LoginButton = ({ title, onPress }) => {
  return <Button title={title} onPress={onPress} />;
};

export default LoginButton;
