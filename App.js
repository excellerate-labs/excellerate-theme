// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { createTheme, ThemeProvider } from './src';
import type { Colors, Fonts } from './src';

const myColors = {
  primary: 'blue',
};

const myFonts = {
  normal: {
    fontSize: 14,
  },
  large: {
    fontSize: 20,
  },
};

class Button extends React.Component<*> {
  render() {
    const styles = this.context.theme.stylesMap.Button;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Button</Text>
      </View>
    );
  }
}

Button.contextTypes = {
  theme: PropTypes.object.isRequired,
};

const myStylesMakers = {
  Button: (colors: Colors, fonts: Fonts) => ({
    container: {
      borderColor: colors.primary,
      borderWidth: 1,
      height: 50,
      width: 100,
    },
    label: {
      ...fonts.large,
    },
  }),
};

const theme = createTheme(myStylesMakers, myColors, myFonts);

// eslint-disable-next-line react/no-multi-comp
export default class App extends React.Component<*> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1 }}>
          <Button />
        </View>
      </ThemeProvider>
    );
  }
}
