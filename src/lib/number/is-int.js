/**
 *  isInt(str, opt)
 *
 *  opt: {
 *      allow_leading_zeroes
 *      min
 *      max
 *      lt
 *      gt
 *  }
 */
module.exports = ((_) => {
    _.isInt = (str = '', options) => {
        options = options || {};

        const regex = options.hasOwnProperty('allow_leading_zeroes')
                        && !options.allow_leading_zeroes
                            ? _.r.int
                            : _.r.intLeadingZeroes;

        const minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
        const maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
        const ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
        const gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

        return regex.test(str)
                && minCheckPassed
                && maxCheckPassed
                && ltCheckPassed
                && gtCheckPassed;
    };
});