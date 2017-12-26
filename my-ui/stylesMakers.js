// @flow
import type { Colors, Fonts } from '../src';

const stylesMakers = {
  Button: (colors: Colors, fonts: Fonts) => ({
    container: {
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: colors.primary,
      height: 40,
      justifyContent: 'center',
      width: 100,
    },
    label: {
      color: '#FFF',
      ...fonts.large,
    },
  }),
  TextInput: (colors: Colors) => ({
    container: {
      borderColor: colors.primary,
      borderWidth: 1,
    },
    textInput: {
      height: 40,
      paddingHorizontal: 8,
      paddingVertical: 0,
      width: 200,
    },
  }),
};

export default stylesMakers;
