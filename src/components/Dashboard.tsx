import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../Styles/Theme';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.congrats}>🎉 Congrats!</Text>
      <Text style={styles.message}>You have successfully logged in.</Text>
      <Text style={styles.dashboardText}>This is your sample dashboard.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundGradientEnd,
  },
  congrats: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    color: theme.colors.accent,
    marginBottom: theme.spacing.medium,
  },
  message: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: theme.spacing.small,
  },
  dashboardText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
});

export default Dashboard;
