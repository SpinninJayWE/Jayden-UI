export const componentDisabeld = (disabled: boolean | undefined, res: any) => {
  if (disabled) {
    res.pointerEvents = 'none';
    res.filter = 'var(--j-disabled-effect)';
  }

  return res;
};
