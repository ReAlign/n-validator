/**
 *  isLength(str, options)
 */
module.exports = ((_) => {
    _.isLength = (str = '', options = {}) => {
        let _noOpt = _.compareObject(options, {});

        let min = options.min || 0;
        let max = options.max || 0;

        if(_.typeOf(str) !== 'string') {
            return false;
        }

        const _len = str.length;

        return _noOpt
                ? _len
                : _len >= min && _len <= max;
    };
});