/**
 *  isFloat(str, opt)
 *
 *  opt: {
 *      min
 *      max
 *      lt
 *      gt
 *  }
 */
module.exports = ((_) => {
    _.isFloat = (str = '', options) => {
        options = options || {};

        if (str === '' || str === '.' || str === '-' || str === '+') {
            return false;
        }

        return _.r.float.test(str) && _._numberBaseRules(str, options);
    };
});