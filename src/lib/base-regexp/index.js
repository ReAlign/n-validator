module.exports = ((_) => {
    _.r = {
        int: /^(?:[-+]?(?:0|[1-9][0-9]*))$/,
        intLeadingZeroes: /^[-+]?[0-9]+$/,
        float: new RegExp('^(?:[-+])?(?:[0-9]+)?(?:\\.[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$'),
        date: (separator = '-') => new RegExp(`^[1-9]\\d{3}${separator}(0[1-9]|1[0-2])${separator}(0[1-9]|[1-2][0-9]|3[0-1])$`),
        time: /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/,
        dateTime: (separator = '-', strictMode = true) => {
            let strictStr = strictMode ? '{1}' : '+';
            /*eslint-disable*/
            return new RegExp(`^[1-9]\\d{3}${separator}(0[1-9]|1[0-2])${separator}(0[1-9]|[1-2][0-9]|3[0-1])\\s${strictStr}(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d$`);
            /*eslint-enable*/
        },
        dataURI: /^\s*data:([a-z]+\/[a-z0-9\-\\+]+(;[a-z\\-]+=[a-z0-9\\-]+)?)?(;base64)?,[a-z0-9!\\$&',\\(\\)\\*\\+,;=\-\\._~:@\\/\\?%\s]*\s*$/i
    };
});