export const componentStatus = ['info', 'warning', 'success', 'error'] as const;

export type ComponentStatus = (typeof componentStatus)[number];
