export const environment = {
  production: false,
  // apiDomain: 'https://sell360.allomate.solutions',
  // apiUrl: 'https://sell360.allomate.solutions/distributor-api',
  apiDomain: 'https://marketer.sell360.app',
  apiUrl: 'https://marketer.sell360.app/distributor-api',

  // apiDomain: ' https://staging.spencer.allomate.solutions',
  // apiUrl: ' https://staging.spencer.allomate.solutions/distributor-api',
  DISCOUNT_TYPES: {
    NORMAL: 1, // noramal means flat value * qty
    PERCENTAGE: 2, // Percentage means (value/100) * qty
  },
  ORDER_TYPE: {
    COUNTER_SALE: 'CounterSale',
  },
};
