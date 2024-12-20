import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  AccessibilityProps,
} from 'react-native';

type CustomCheckBoxProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label: string;
} & AccessibilityProps;

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  value,
  onValueChange,
  label,
  accessibilityLabel,
  accessibilityHint,
}) => (
  <TouchableOpacity
    onPress={() => onValueChange(!value)}
    style={styles.container}
    accessibilityLabel={accessibilityLabel || label}
    accessibilityHint={accessibilityHint || 'Tap to toggle the checkbox'}
    accessible
  >
    <View style={[styles.box, value && styles.boxChecked]} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginRight: 10,
    borderRadius: 4,
  },
  boxChecked: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  label: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default CustomCheckBox;
