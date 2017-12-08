/**
 *  isBoolean(str)
 */
module.exports = ((_) => {
    _.isBoolean = (str = '', options) => {
        options = options || {};
        if(_.typeOf(str) == 'boolean') {
            return true;
        }

        if(_.typeOf(str) == 'number'
            && (str === 1 || str === 0)) {
            return !(options.hasOwnProperty('strictMode')
                    && options.strictMode);
        }

        return _.enum.boolean.indexOf(str) >= 0;
    };
});