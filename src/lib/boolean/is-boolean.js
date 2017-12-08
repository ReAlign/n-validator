/**
 *  isBoolean(str)
 */
module.exports = ((_) => {
    _.isBoolean = (str = '') => {
        if(_.typeOf(str) == 'boolean') {
            return true;
        }

        if(_.typeOf(str) == 'number'
            && (str === 1 || str === 0)) {
            return true;
        }

        return _.enum.boolean.indexOf(str) >= 0;
    };
});