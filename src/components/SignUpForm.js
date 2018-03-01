import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class SignUpForm extends Component {
  // const { formContainerStyles, registerStyles, appNameStyles  } = styles;

  render() {
    return (
      <View style={styles.formContainerStyles}>
        <Text>Register</Text>
        <View>
          <Text style={styles.appNameStyles}>App Name</Text>
          <TextInput placeholder="email@example.com" />
          <TextInput placeholder="password" />
        </View>
      </View>
    );
  }
}

const styles = {
  formContainerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1
  },
  registerStyles: {
    alignSelf: 'start'
  },
  appNameStyles: {
    fontSize: 32,
    fontWeight: 'bold'
  }
};

export default SignUpForm;
