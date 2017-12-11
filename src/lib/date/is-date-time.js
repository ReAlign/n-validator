/**
 *  isDateTime(str, opt)
 *
 *  opt: {
 *      separator | '-'
 *      strictMode | true
 *  }
 */
module.exports = ((_) => {
    _.isDateTime = (str = '', options = {}) => {
        const regex = _.r.dateTime(options.separator, options.strictMode);

        return regex.test(str);
    };
});