/**
 *  isBoolean(str)
 */
module.exports = ((_) => {
    _.isBoolean = (str = '', options) => {
        options = options || {};

        let _strictMode = options.hasOwnProperty('strictMode')
                            && options.strictMode;

        if(_.typeOf(str) == 'boolean') {
            return true;
        }

        if(_.typeOf(str) == 'number') {
            return (str === 1 || str === 0)
                    ? !_strictMode
                    : false;
        }

        return (_.enum.boolean.indexOf(str) >= 0) && !_strictMode;
    };
});