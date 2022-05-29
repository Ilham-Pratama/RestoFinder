import ThemedText from 'components/ThemedText';
import React from 'react';
import { StyleSheet } from 'react-native';
import sharedStyles from 'shared/styles';

interface HeaderProps {
  children: any;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <ThemedText
      accessibilityRole="header"
      style={[
        styles.header,
        sharedStyles.marginBottom2,
        sharedStyles.marginHorizontal3
      ]}>
      {children}
    </ThemedText>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: '700'
  }
});

export default Header;
