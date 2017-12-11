/**
 *  isRequired(val)
 */
module.exports = ((_) => {
    _.isRequired = (val = '') => {
        const _type = _.typeOf(val);

        let _len = 0;

        switch(_type) {
            case 'number':
                _len = `${val}`.length;
                break;
            case 'boolean':
                _len = `${val}`.length;
                break;
            case 'string':
                _len = val.length;
                break;
            case 'array':
                _len = val.length;
                break;
            case 'object':
                _len = Object.keys(val).length;
                break;
            default:
                _len = 0;
        }

        return val !== undefined
                && val !== null
                && _len > 0;
    };
});