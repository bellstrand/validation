'use strict';

exports.__esModule = true;
exports.configure = configure;

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _validationValidationConfig = require('./validation/validation-config');

var _validationValidation = require('./validation/validation');

var _validationUtilities = require('./validation/utilities');

exports.Utilities = _validationUtilities.Utilities;
exports.ValidationConfig = _validationValidationConfig.ValidationConfig;

var _validationValidationLocale = require('./validation/validation-locale');

exports.ValidationLocale = _validationValidationLocale.ValidationLocale;

var _validationValidationResult = require('./validation/validation-result');

_defaults(exports, _interopExportWildcard(_validationValidationResult, _defaults));

var _validationValidationRules = require('./validation/validation-rules');

_defaults(exports, _interopExportWildcard(_validationValidationRules, _defaults));

exports.Validation = _validationValidation.Validation;

var _validationValidateCustomAttribute = require('./validation/validate-custom-attribute');

exports.ValidateCustomAttribute = _validationValidateCustomAttribute.ValidateCustomAttribute;

var _validationValidateCustomAttributeViewStrategy = require('./validation/validate-custom-attribute-view-strategy');

exports.ValidateCustomAttributeViewStrategy = _validationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategy;
exports.ValidateCustomAttributeViewStrategyBase = _validationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategyBase;

var _validationDecorators = require('./validation/decorators');

exports.ensure = _validationDecorators.ensure;

function configure(frameworkConfig, configCallback) {

  frameworkConfig.globalResources('./validation/validate-custom-attribute');
  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(_validationValidation.Validation.defaults);
  }
  frameworkConfig.singleton(_validationValidationConfig.ValidationConfig, _validationValidation.Validation.defaults);
  return _validationValidation.Validation.defaults.locale();
}