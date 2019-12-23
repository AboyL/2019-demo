// through2 is a thin wrapper around node transform streams
var through = require('through2');
var PluginError = require('plugin-error');

// Consts
const PLUGIN_NAME = 'gulp-transform_rpx';

// Plugin level function(dealing with files)
function gulpPrefixer (multiple = 2) {
  if (typeof multiple !== 'number') {
    throw new PluginError(PLUGIN_NAME, 'multiple must is number!');
  }

  // Creating a stream through which each file will pass
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file);
    }
    if (file.isBuffer()) {
      const fileStr = file.contents.toString();
      const f2 = fileStr.replace(/\d+px/g, (item) => {
        const newS = item.split('px')[0] * multiple + 'rpx';
        return newS;
      });
      // 将所有的px单位都转化成rpx单位
      file.contents = Buffer.from(f2);
    }
    if (file.isStream()) {
      // file.contents = file.contents.pipe(prefixStream(newPrefixText));
    }

    cb(null, file);
  });
}

// Exporting the plugin main function
module.exports = gulpPrefixer;
