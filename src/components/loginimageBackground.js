// ./src/components/LoginImageBackground.js
import React from 'react';
import { ImageBackground } from 'react-native';

const LoginImageBackground = ({ source, children }) => {
  return <ImageBackground source={source}>{children}</ImageBackground>;
};

export default LoginImageBackground;
