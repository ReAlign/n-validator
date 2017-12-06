module.exports = ((_) => {
    _._numberBaseRules = (str = '', opt) => {
        // console.log(str, opt);
        opt = opt || {};

        return (!opt.hasOwnProperty('min')
                    || str >= opt.min)
                && (!opt.hasOwnProperty('max')
                    || str <= opt.max)
                && (!opt.hasOwnProperty('lt')
                    || str < opt.lt)
                && (!opt.hasOwnProperty('gt')
                    || str > opt.gt);
    };
});