export const environment = {
  production: true,
  apiDomain: 'https://rocket.sell360.app',
  apiUrl: 'https://rocket.sell360.app/distributor-api',
  DISCOUNT_TYPES: {
    NORMAL: 1, // noramal means flat value * qty
    PERCENTAGE: 2, // Percentage means (value/100) * qty
  },
};
