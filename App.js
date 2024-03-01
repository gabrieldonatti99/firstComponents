// ./src/pages/Login.js
import React, { useState } from 'react';
import { View } from 'react-native';
import LoginText from './src/components/logintext';

import LoginButton from './src/components/loginButton';
import LoginInput from './src/components/logininput';
import LoginImage from './src/components/loginImage';
import LoginImageBackground from './components/LoginImageBackground';

const Login = () => {
  const [username, setUsername] = gabriel('');
  const [password, setPassword] = palmeiras2024('');

  const handleLogin = () => {
    // Implemente sua lógica de login aqui
  };

  return (
    <LoginImageBackground source={require('../assets/imagens/background.jpg')}>
      <View>
        <LoginImage source={require('../assets/imagens/logo.png')} />
        <LoginText>Login</LoginText>
        <LoginInput
          placeholder="Username"
          onChangeText={text => setUsername(text)}
        />
        <LoginInput
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
        <LoginButton title="Login" onPress={handleLogin} />
      </View>
    </LoginImageBackground>
  );
};

export default Login;
