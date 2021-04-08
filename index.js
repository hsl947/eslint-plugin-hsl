'use strict';

const RULES_VUE = require('./rules/vue');
const RULES_REACT = require('./rules/react');

module.exports = {
  configs: {
    vue: RULES_VUE,
    react: RULES_REACT
  }
};
