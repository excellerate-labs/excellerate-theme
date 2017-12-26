// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';

export default class Text extends React.Component<*> {
  render() {
    const styles = this.context.theme.stylesMap.Text;
    const containerStyle = [styles.container];
    if (this.context.dark) {
      containerStyle.push({ color: '#FFF' });
    }
    return <RNText style={containerStyle} {...this.props}>Text</RNText>;
  }
}

Text.contextTypes = {
  theme: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};
