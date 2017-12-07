/**
 *  isInt(str, opt)
 *
 *  opt: {
 *      time
 *      separator | '-'
 *      strictMode | true
 *  }
 */
module.exports = ((_) => {
    _.isDateStr = (str = '', options) => {
        options = options || {};

        const regex = options.hasOwnProperty('time')
                        && options.time
                            ? _.r.dateTime(options.separator, options.strictMode)
                            : _.r.date(options.separator);

        return regex.test(str);
    };
});