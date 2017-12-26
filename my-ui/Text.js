// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';

export default class Text extends React.Component<*> {
  render() {
    const { font } = this.props;
    const fontStyle = [this.context.theme.fonts[font]];
    if (this.context.dark) {
      fontStyle.push({ color: '#FFF' });
    }
    return <RNText style={fontStyle} {...this.props} />;
  }
}

Text.contextTypes = {
  theme: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};
