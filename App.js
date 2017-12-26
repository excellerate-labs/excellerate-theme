// @flow
/* eslint-disable no-alert */
import * as React from 'react';
import { View } from 'react-native';

import { createTheme, ThemeProvider } from './src';

import {
  stylesMakers,
  colors,
  fonts,
  Button,
  Text,
  TextInput,
} from './my-ui';

const theme = createTheme(stylesMakers, colors, fonts);

export default class App extends React.Component<*> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ThemeProvider theme={theme}>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-around' }}>
              <Text>This is normal (default) text</Text>
              <Text font="large">This is large text</Text>
              <Button onPress={() => alert('pressed')} />
              <TextInput />
            </View>
          </ThemeProvider>
        </View>
        <View style={{ backgroundColor: '#000', flex: 1 }}>
          <ThemeProvider theme={theme} dark>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-around' }}>
              <Text>This is normal (default) text</Text>
              <Text font="large">This is large text</Text>
              <Button onPress={() => alert('pressed')} />
              <TextInput />
            </View>
          </ThemeProvider>
        </View>
      </View>
    );
  }
}
