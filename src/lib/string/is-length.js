/**
 *  isLength(str, options)
 */
let _nt = require('n-tools');
module.exports = ((_) => {
    _.isLength = (str = '', options = {}) => {
        let _noOpt = _nt.compareObject(options, {});

        let min = options.min || 0;
        let max = options.max || -1;

        if(_nt.typeOf(str) !== 'string') {
            return false;
        }

        const _len = str.length;

        if(max == -1) {
            console.log('max == -1');
        } else {
            console.log(_len <= max);
        }

        return _noOpt
                ? _len
                : _len >= min && (max == -1 ? true : _len <= max);
    };
});