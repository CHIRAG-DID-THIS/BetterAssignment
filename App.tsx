import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/components/LoginForm';
import SignUpForm from './src/components/SignUpForm';
import Dashboard from './src/components/Dashboard';
import { StyleSheet } from 'react-native';
import theme from './src/Styles/Theme';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTitleStyle: {
            fontSize: theme.fontSizes.xlarge,
            fontWeight: 'bold',
            color: theme.colors.white,
          },
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{
            headerTitle: 'BetterAssignment',
            headerLeft: () => null, 
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpForm}
          options={{
            headerTitle: 'BetterAssignment',
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerTitle: 'BetterAssignment',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
});

export default App;
