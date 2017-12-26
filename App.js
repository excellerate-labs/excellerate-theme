// @flow
import * as React from 'react';
import { View } from 'react-native';

import Button from './Button';
import { createTheme, ThemeProvider } from './src';
import type { Colors, Fonts } from './src';

const myStylesMakers = {
  Button: (colors: Colors, fonts: Fonts) => ({
    container: {
      alignItems: 'center',
      borderColor: colors.primary,
      borderWidth: 1,
      height: 50,
      justifyContent: 'center',
      width: 100,
    },
    label: {
      ...fonts.large,
    },
  }),
};

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

const theme = createTheme(myStylesMakers, myColors, myFonts);

export default class App extends React.Component<*> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ThemeProvider theme={theme}>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
              <Button />
            </View>
          </ThemeProvider>
        </View>
        <View style={{ backgroundColor: '#000', flex: 1 }}>
          <ThemeProvider theme={theme} dark>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
              <Button />
            </View>
          </ThemeProvider>
        </View>
      </View>
    );
  }
}
