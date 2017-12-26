// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  onPress: () => void,
};

export default class Button extends React.Component<Props> {
  render() {
    const styles = this.context.theme.stylesMap.Button;
    const labelStyle = [styles.label];
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={labelStyle}>Button</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Button.contextTypes = {
  theme: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};
