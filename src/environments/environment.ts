export const environment = {
  production: false,
  // apiDomain: 'https://demo.sell360.app',
  // apiUrl: 'https://demo.sell360.app/distributor-api',
  apiDomain: 'https://marketer.sell360.app', 
  apiUrl: 'https://marketer.sell360.app/distributor-api',  

  // apiDomain: ' https://staging.spencer.allomate.solutions',
  // apiUrl: ' https://staging.spencer.allomate.solutions/distributor-api',
  DISCOUNT_TYPES: {
    NORMAL: 1, // noramal means flat value * qty
    PERCENTAGE: 2, // Percentage means (value/100) * qty
  },
  ORDER_TYPE: {
    Regular_Order: '0',
    Credit_Order_Without_Discount: '1',
    Credit_Order_With_Discount: '2',
  },

  CREDIT_ORDER_TYPE: {
    Regular_Order: 0,
    Credit_Order_Without_Discount: 1,
    Credit_Order_With_Discount: 2,
  },
  SLAB_TYPE: {
    ALL: 0,
    NORMAL: 1,
    EXCLUSIVE: 2,
    SKU_BASE: 3,
    BRAND_BASE: 4,
    CATEGORY_BASE: 5,
  },

  SLAB_RULE: {
    RULE_1: 1, //Noraml
    RULE_2: 2, // matching slab ranges with quantity
  },
};
