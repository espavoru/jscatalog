$(document).ready(function() {
/*
 * Class instanceof
 */
/**
 * Get type of any elements
 * @param {Object|Array|string|number|boolean} obj - any type to determine
 * @returns {unresolved} - type of element
 */
  function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
  }

  alert(getClass(new Date)); // Date
  alert(getClass([1, 2, 6])); // Array
});