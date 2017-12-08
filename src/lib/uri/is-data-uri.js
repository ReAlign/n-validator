/**
 *  isDataURI(str)
 */
module.exports = ((_) => {
    _.isDataURI = (str = '') => _.r.dataURI.test(str);
});