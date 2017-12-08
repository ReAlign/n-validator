/**
 *  isBoolean(val)
 */
module.exports = ((_) => {
    _.isBoolean = (val = '', options) => {
        options = options || {};

        let _strictMode = options.hasOwnProperty('strictMode')
                            && options.strictMode;

        if(_.typeOf(val) == 'boolean') {
            return true;
        }

        if(_.typeOf(val) == 'number') {
            return (val === 1 || val === 0)
                    ? !_strictMode
                    : false;
        }

        return (_.enum.boolean.indexOf(val) >= 0) && !_strictMode;
    };
});