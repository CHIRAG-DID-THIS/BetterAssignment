import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import styles from '../Styles/SignUpFormStyles';
import { signUpSchema } from '../Utils/validationSchemas'

const SignUpForm = () => {
  const navigation = useNavigation();
  const [passwordStrength, setPasswordStrength] = useState('');

  const evaluatePasswordStrength = (password: string) => {
    if (password.length >= 8) {
      if (/[!@#$%^&*(),.?":{}|<>]/.test(password) && /\d/.test(password)) {
        setPasswordStrength('Strong');
      } else if (/\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        setPasswordStrength('Moderate');
      } else {
        setPasswordStrength('Weak');
      }
    } else {
      setPasswordStrength('Invalid');
    }
  };

  const saveDetails = async (details: {
    name: string;
    email: string;
    phone: string;
    address: string;
    dob: string;
    password: string;
  }) => {
    try {
      await AsyncStorage.setItem('userDetails', JSON.stringify(details));
      Alert.alert('Success', 'Sign Up Successful!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving details:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <Formik
  initialValues={{
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    password: '',
    confirmPassword: '',
  }}
  validationSchema={signUpSchema}
  onSubmit={saveDetails}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldTouched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name', true)}
              value={values.name}
              accessibilityLabel="Name"
              accessibilityHint="Enter your full name"
            />
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email', true)}
              value={values.email}
              keyboardType="email-address"
              accessibilityLabel="Email"
              accessibilityHint="Enter your email address"
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone', true)}
              value={values.phone}
              keyboardType="numeric"
              accessibilityLabel="Phone Number"
              accessibilityHint="Enter your phone number"
            />
            {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={handleChange('address')}
              onBlur={() => setFieldTouched('address', true)}
              value={values.address}
              accessibilityLabel="Address"
              accessibilityHint="Enter your address"
            />
            {touched.address && errors.address && <Text style={styles.error}>{errors.address}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Date of Birth (YYYY-MM-DD)"
              onChangeText={handleChange('dob')}
              onBlur={() => setFieldTouched('dob', true)}
              value={values.dob}
              accessibilityLabel="Date of Birth"
              accessibilityHint="Enter your date of birth in YYYY-MM-DD format"
            />
            {touched.dob && errors.dob && <Text style={styles.error}>{errors.dob}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text) => {
                handleChange('password')(text);
                evaluatePasswordStrength(text);
              }}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              secureTextEntry
              accessibilityLabel="Password"
              accessibilityHint="Enter a secure password"
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            {values.password ? (
              <Text
                style={[
                  styles.passwordStrength,
                  passwordStrength === 'Strong'
                    ? styles.strong
                    : passwordStrength === 'Moderate'
                    ? styles.moderate
                    : styles.weak,
                ]}
              >
                Password Strength: {passwordStrength}
              </Text>
            ) : null}

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword', true)}
              value={values.confirmPassword}
              secureTextEntry
              accessibilityLabel="Confirm Password"
              accessibilityHint="Re-enter your password"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

            <Text style={styles.disclaimer}>
              By signing up, you agree to our <Text style={styles.link}>terms and conditions</Text>.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;
