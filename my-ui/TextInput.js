// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { TextInput as RNTextInput, View } from 'react-native';

export default class TextInput extends React.Component<*> {
  render() {
    const styles = this.context.theme.stylesMap.TextInput;
    const textInputStyle = [styles.textInput];
    if (this.context.dark) {
      textInputStyle.push({ color: '#FFF' });
    }
    return (
      <View style={styles.container}>
        <RNTextInput
          placeholder="This is text placeholder..."
          placeholderTextColor={this.context.dark && '#FFF'}
          underlineColorAndroid="transparent"
          style={textInputStyle}
          {...this.props}
        />
      </View>
    );
  }
}

TextInput.contextTypes = {
  theme: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};
