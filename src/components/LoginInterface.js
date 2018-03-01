import React, { Component } from 'react';
import { ImageBackground, View, Text } from 'react-native';

import SignUpForm from './SignUpForm';

class LoginInterface extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/login-background.jpg')}
        style={styles.backgroundImage}
      >
        {/* Sign Up Form */}
        <SignUpForm />
      </ImageBackground>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
    // resizeMode: 'contain'
  }
};

export default LoginInterface;
