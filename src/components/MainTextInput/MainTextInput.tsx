import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps
} from 'react-native';
import { SvgIconProps } from 'assets/svgs/types';

interface IMainTextInput extends TextInputProps {
  icon?: React.FC<SvgIconProps>;
  disabled?: boolean;
}

const MainTextInput = (props: IMainTextInput) => {
  const { icon: Icon } = props;
  return (
    <View style={styles.container}>
      {Icon && <Icon height={20} width={20} />}
      {props.disabled ? (
        <Text
          accessibilityRole="text"
          style={[
            styles.disabledText,
            { color: props.value ? 'black' : 'gray' }
          ]}>
          {props.value || props.placeholder || ''}
        </Text>
      ) : (
        <TextInput
          accessibilityRole="search"
          placeholderTextColor="gray"
          style={[styles.textStyle, { marginLeft: Icon ? 10 : 0 }]}
          {...props}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    marginHorizontal: 20,
    paddingHorizontal: 12,
    shadowColor: 'black',
    shadowOffset: {
      height: 5,
      width: 5
    },
    elevation: 3,
    shadowOpacity: 0.1
  },
  textStyle: {
    color: 'black',
    flex: 1
  },
  disabledText: {
    paddingRight: 10,
    marginLeft: 15,
    marginVertical: 15
  }
});

export default MainTextInput;
