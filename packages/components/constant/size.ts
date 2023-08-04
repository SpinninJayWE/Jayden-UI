export const componentSizes = ['', 'medium', 'small', 'large'] as const;

export type ComponentSize = (typeof componentSizes)[number];

export const componentSizeMap = {
  small: 45,
  medium: 55,
  large: 65
};
