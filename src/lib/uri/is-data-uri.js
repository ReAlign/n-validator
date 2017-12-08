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
    _.isDataURI = (str = '') => _.r.dataURI.test(str);
});