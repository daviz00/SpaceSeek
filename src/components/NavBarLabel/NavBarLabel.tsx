import { useIsFocused, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { BottomRoute } from '../../navigators/routes';
import { RegularText } from '../Basic/Basic';

export const NavBarLabel = () => {
  const route = useRoute();
  const { t } = useTranslation();
  const isFocused = useIsFocused();
  const { focusedIconColor, unFocusedIconColor } = useTheme();

  const name = route.name as BottomRoute;

  const backgroundColor = isFocused ? focusedIconColor : unFocusedIconColor;

  const shortTitle = t(`screen.${route.name}.shortTitle`);

  return <RegularText fontType={isFocused ? 'bold' : 'regular'}>{shortTitle}</RegularText>;
};
