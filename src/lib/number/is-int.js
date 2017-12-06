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

        return regex.test(str) && _._numberBaseRules(str, options);
    };
});