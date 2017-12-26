// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import type { Theme } from './createTheme';

type Props = {
  theme: Theme,
  children: React.Node,
};

export default class ThemeProvider extends React.Component<Props> {
  static childContextTypes = {
    theme: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }

  render() {
    return this.props.children;
  }
}
