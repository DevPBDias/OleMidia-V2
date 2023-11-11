type IPoints = {
  xxs: string,
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
  '2xl': string,
};

const breakpoints: IPoints = {
  xxs: '375px',
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
  '2xl': '1920px',
};

type IDevices = {
  mini: string,
  mobile: string,
  landscapePhones: string,
  tablets: string,
  desktops: string,
  largeDesktops: string,
  largerDesktops: string,
};

export const devices: IDevices = {
  mini: `(max-width: ${breakpoints.xxs})`,
  mobile: `(max-width: ${breakpoints.xs})`,
  landscapePhones: `(max-width: ${breakpoints.sm})`,
  tablets: `(max-width: ${breakpoints.md})`,
  desktops: `(max-width: ${breakpoints.lg})`,
  largeDesktops: `(max-width: ${breakpoints.xl})`,
  largerDesktops: `(max-width: ${breakpoints['2xl']})`,
};
