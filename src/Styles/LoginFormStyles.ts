import { StyleSheet } from 'react-native';
import theme from './Theme';

const LoginFormStyles = StyleSheet.create({
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
  link: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: theme.spacing.medium,
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.medium,
  },
  checkboxLabel: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.textPrimary,
    marginLeft: theme.spacing.small,
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
});

export default LoginFormStyles;
