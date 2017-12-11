/**
 *  isDate(str, opt)
 *
 *  opt: {
 *      separator | '-'
 *  }
 */
module.exports = ((_) => {
    _.isDate = (str = '', options = {}) => {
        const regex = _.r.date(options.separator);

        return regex.test(str);
    };
});