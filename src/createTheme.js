// @flow

export type Colors = {
  [string]: string,
};
export type Fonts = {
  [string]: {
    [string]: string | number,
  },
};
type Styles = {
  [string]: {
    [string]: string | number,
  },
};
type StylesMaker = (colors: Colors, fonts: Fonts) => Styles;
type StylesMakers = {
  [string]: StylesMaker,
};
type StylesMap = {
  [string]: Styles,
};
export type Theme = {
  stylesMap: StylesMap,
  colors: Colors,
  fonts: Fonts,
};

function createTheme(stylesMakers: StylesMakers, colors: Colors, fonts: Fonts): Theme {
  const stylesMap: StylesMap = {};
  Object.keys(stylesMakers).forEach((componentName) => {
    const stylesMaker = stylesMakers[componentName];
    const styles = stylesMaker(colors, fonts);
    stylesMap[componentName] = styles;
  });
  return {
    stylesMap,
    colors,
    fonts,
  };
}

export default createTheme;
