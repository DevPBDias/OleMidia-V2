type IPoints = {
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
  '2xl': string,
};

const breakpoints: IPoints = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
  '2xl': '1920px',
};

type IDevices = {
  mobile: string,
  landscapePhones: string,
  tablets: string,
  desktops: string,
  largeDesktops: string,
  largerDesktops: string,
};

export const devices: IDevices = {
  mobile: `(min-width: ${breakpoints.xs})`,
  landscapePhones: `(min-width: ${breakpoints.sm})`,
  tablets: `(min-width: ${breakpoints.md})`,
  desktops: `(min-width: ${breakpoints.lg})`,
  largeDesktops: `(min-width: ${breakpoints.xl})`,
  largerDesktops: `(min-width: ${breakpoints['2xl']})`,
};
