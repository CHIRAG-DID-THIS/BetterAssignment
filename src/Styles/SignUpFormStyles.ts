import { StyleSheet } from 'react-native';
import theme from './Theme';

const SignUpFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.large,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
  },
  header: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
  },
  input: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: 10,
    padding: theme.spacing.medium,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.small,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  error: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.error,
    marginBottom: theme.spacing.small,
  },
  disclaimer: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginVertical: theme.spacing.medium,
    textAlign: 'center',
  },
  link: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    paddingVertical: theme.spacing.medium,
    alignItems: 'center',
    marginTop: theme.spacing.large,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  passwordStrength: {
    fontSize: theme.fontSizes.small,
    marginVertical: theme.spacing.small,
    fontWeight: 'bold',
  },
  strong: {
    color: 'green',
  },
  moderate: {
    color: 'orange',
  },
  weak: {
    color: 'red',
  },
  
});

export default SignUpFormStyles;
