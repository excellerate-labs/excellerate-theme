// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import type { Theme } from './createTheme';

type Props = {
  theme: Theme,
  dark?: boolean,
  children: React.Node,
};

export default class ThemeProvider extends React.Component<Props> {
  static childContextTypes = {
    theme: PropTypes.object.isRequired,
    dark: PropTypes.bool,
  };

  getChildContext() {
    return {
      theme: this.props.theme,
      dark: this.props.dark,
    };
  }

  render() {
    return this.props.children;
  }
}
