'use strict';

const RULES_VUE = require('./rules/vue');
const RULES_REACT = require('./rules/react');
const RULES_TYPESCRIPT = require('./rules/typescript');

module.exports = {
  configs: {
    vue: RULES_VUE,
    react: RULES_REACT,
    typescript: RULES_TYPESCRIPT
  }
};
