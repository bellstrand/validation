define(['exports', './validation/validation-config', './validation/validation', './validation/utilities', './validation/validation-locale', './validation/validation-result', './validation/validation-rules', './validation/validate-custom-attribute', './validation/validate-custom-attribute-view-strategy', './validation/decorators'], function (exports, _validationValidationConfig, _validationValidation, _validationUtilities, _validationValidationLocale, _validationValidationResult, _validationValidationRules, _validationValidateCustomAttribute, _validationValidateCustomAttributeViewStrategy, _validationDecorators) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

  exports.Utilities = _validationUtilities.Utilities;
  exports.ValidationConfig = _validationValidationConfig.ValidationConfig;
  exports.ValidationLocale = _validationValidationLocale.ValidationLocale;

  _defaults(exports, _interopExportWildcard(_validationValidationResult, _defaults));

  _defaults(exports, _interopExportWildcard(_validationValidationRules, _defaults));

  exports.Validation = _validationValidation.Validation;
  exports.ValidateCustomAttribute = _validationValidateCustomAttribute.ValidateCustomAttribute;
  exports.ValidateCustomAttributeViewStrategy = _validationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategy;
  exports.ValidateCustomAttributeViewStrategyBase = _validationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategyBase;
  exports.ensure = _validationDecorators.ensure;

  function configure(frameworkConfig, configCallback) {

    frameworkConfig.globalResources('./validation/validate-custom-attribute');
    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(_validationValidation.Validation.defaults);
    }
    frameworkConfig.singleton(_validationValidationConfig.ValidationConfig, _validationValidation.Validation.defaults);
    return _validationValidation.Validation.defaults.locale();
  }
});