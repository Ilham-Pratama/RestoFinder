import { AccessibilityRole } from 'react-native';
import { Color, NumberProp } from 'react-native-svg';

export interface SvgIconProps {
  height: NumberProp;
  width: NumberProp;
  fill?: Color;
  accessibilityRole?: AccessibilityRole;
}
