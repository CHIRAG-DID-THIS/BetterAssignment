const colors = {
  primary: '#3B82F6', // Modern blue
  secondary: '#64748B', // Muted grey
  accent: '#22C55E', // Green for success messages
  background: '#F1F5F9', // Light background
  error: '#EF4444', // Red for error messages
  textPrimary: '#1E293B', // Dark grey for text
  textSecondary: '#475569', // Muted grey for subtext
  white: '#FFFFFF',
  shadow: '#000000', // Add shadow color
  backgroundGradientEnd:'#F1F5F9',
};

const fontSizes = {
  small: 14,
  medium: 16,
  large: 24,
  xlarge: 32,
};

const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

const theme = {
  colors,
  fontSizes,
  spacing,
  header: {
    fontSize: fontSizes.xlarge,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.large,
    textAlign: 'center',
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    padding: spacing.medium,
    marginBottom: spacing.small,
    fontSize: fontSizes.medium,
    color: colors.textPrimary,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: spacing.medium,
    alignItems: 'center',
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
  },
  errorText: {
    color: colors.error,
    fontSize: fontSizes.small,
    marginBottom: spacing.small,
    marginTop: -spacing.small,
  },
  disclaimer: {
    fontSize: fontSizes.small,
    color: colors.textSecondary,
    marginVertical: spacing.medium,
    textAlign: 'center',
  },
  link: {
    color: colors.primary,
    fontSize: fontSizes.medium,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
};

export default theme;