import * as React from 'react';

import View from '@go1d/go1d/build/components/View';

const directionMargins = {
  row: 'marginRight',
  column: 'marginBottom'
};

const length = (value) => (Array.isArray(value) ? value.length : 1);
const longestLength = (...values) => values.map((value) => length(value)).sort((a, b) => b - a)[0];

const padArray = (array, padLength) => {
  const paddedArray = Array.isArray(array) ? array : [array];
  const initialLength = paddedArray.length;
  const lastArrayValue = paddedArray[initialLength - 1];

  if (initialLength === padLength) {
    return paddedArray;
  }

  return [...paddedArray, ...Array(padLength - initialLength).fill(lastArrayValue)];
};

const getMargins = (flexDirection, gap) => {
  const longestPropLength = longestLength(flexDirection, gap);
  const margins = padArray(flexDirection, longestPropLength).map((direction) => directionMargins[direction]);
  const paddedGap = padArray(gap, longestPropLength);

  if (longestPropLength === 1) {
    return {
      [directionMargins[flexDirection]]: gap,
    };
  }
  return margins.reduce((acc, currentMargin, index) => {
    const current = {
      marginRight: currentMargin === 'marginRight' ? [paddedGap[index]] : [0],
      marginBottom: currentMargin === 'marginBottom' ? [paddedGap[index]] : [0],
    };
    if (index === 0) {
      return current;
    }
    return {
      marginRight: [...acc.marginRight, ...current.marginRight],
      marginBottom: [...acc.marginBottom, ...current.marginBottom],
    };
  }, {});
};

const Stack = ({
  gap,
  children,
  alignItems = 'stretch',
  justifyContent = 'stretch',
  flexDirection = 'column',
  ...props
}) => {
  const stackItems = React.Children.toArray(children);
  const itemMargins = getMargins(flexDirection, gap);
  const lastIndex = stackItems.length - 1;
  return (
    <View flexDirection={flexDirection} alignItems={alignItems} justifyContent={justifyContent} {...props}>
      {stackItems.map((child, index) =>
        React.cloneElement(child, {
          ...(index !== lastIndex && itemMargins),
        })
      )}
    </View>
  );
};

export default Stack;
