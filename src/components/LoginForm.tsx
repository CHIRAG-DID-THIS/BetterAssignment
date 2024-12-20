import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import CustomCheckBox from './CustomCheckBox';
import styles from '../Styles/LoginFormStyles';
import { loginSchema } from '../Utils/validationSchemas';

const LoginForm = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);

  const validateCredentials = async (email: string, password: string) => {
    try {
      const storedCredentials = await AsyncStorage.getItem('userDetails');
      if (storedCredentials) {
        const { email: storedEmail, password: storedPassword } = JSON.parse(storedCredentials);

        if (email === storedEmail && password === storedPassword) {
          if (rememberMe) {
            await AsyncStorage.setItem(
              'rememberedCredentials',
              JSON.stringify({ email, password })
            );
          }

          Alert.alert('Success', 'Login Successful!');
          navigation.navigate('Dashboard');
          return;
        }
      }
      Alert.alert('Error', 'Invalid credentials');
    } catch (error) {
      console.error('Error retrieving credentials:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => validateCredentials(values.email, values.password)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              accessibilityLabel="Email Input"
              accessibilityHint="Enter your email address"
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              accessibilityLabel="Password Input"
              accessibilityHint="Enter your password"
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <View style={styles.checkboxContainer}>
              <CustomCheckBox
                value={rememberMe}
                onValueChange={setRememberMe}
                label="Remember Me"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text
              style={styles.link}
              onPress={() => navigation.navigate('SignUp')}
            >
              Don't have an account? Sign Up
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
