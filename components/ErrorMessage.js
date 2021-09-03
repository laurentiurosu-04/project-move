import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 14,
    color: colors.danger,
    fontWeight: '600',
  },
});

export default ErrorMessage;
