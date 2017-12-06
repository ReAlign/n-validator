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

        return _.r.float.test(str)
                && (!options.hasOwnProperty('min')
                    || str >= options.min)
                && (!options.hasOwnProperty('max')
                    || str <= options.max)
                && (!options.hasOwnProperty('lt')
                    || str < options.lt)
                && (!options.hasOwnProperty('gt')
                    || str > options.gt);
    };
});