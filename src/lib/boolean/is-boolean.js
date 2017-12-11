/**
 *  isBoolean(val)
 */
let _nt = require('n-tools');

module.exports = ((_) => {
    _.isBoolean = (val = '', options = {}) => {
        let _strictMode = options.hasOwnProperty('strictMode')
                            && options.strictMode;

        if(_nt.typeOf(val) == 'boolean') {
            return true;
        }

        if(_nt.typeOf(val) == 'number') {
            return (val === 1 || val === 0)
                    ? !_strictMode
                    : false;
        }

        return (_.enum.boolean.indexOf(val) >= 0) && !_strictMode;
    };
});