var grasp = require('grasp');
var through = require('through2');

module.exports = function propTypeRemover(file, options) {
    if (typeof file !== 'string' || file.lastIndexOf('.') === -1) {
        return through();
    }

    var givenExtension = file.slice(file.lastIndexOf('.') + 1, file.length);
    var supportedExtensions = ['js', 'jsx', 'es6'];

    if (options.extension) { supportedExtensions.concat(options.extension); }
    if (options.extensions) { supportedExtensions.concat(options.extensions); }

    if (supportedExtensions.indexOf(givenExtension) !== -1) {
        return through(function (buf, enc, next) {
            this.push(
                grasp.replace('equery', '__.propTypes = __', '')(buf.toString('utf8'))
            );

            next();
        });
    }

    return through();
};
