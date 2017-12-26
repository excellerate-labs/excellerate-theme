// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default class Button extends React.Component<*> {
  render() {
    const styles = this.context.theme.stylesMap.Button;
    const labelStyle = [styles.label];
    if (this.context.dark) {
      labelStyle.push({ color: '#FFF' });
    }
    return (
      <View style={styles.container}>
        <Text style={labelStyle}>Button</Text>
      </View>
    );
  }
}

Button.contextTypes = {
  theme: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};
