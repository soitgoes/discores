var Q = require('q');
var crypto = require('crypto');
var md5 = crypto.createHash('md5');

module.exports = function(blobService) {
  return {
    blobService: blobService,

    save: function (course) {
      var d = Q.defer();

      md5.update(course.name);
      var hashName = md5.digest('hex');

      try {
        blobService.createBlockBlobFromText('courses', hashName, JSON.stringify(course), function (err, result, response) {
          if (err) {
            d.reject(err);
          } else {
            d.resolve(result);
          }
        });
      } catch(e) {
        d.reject(e);
      }

      return d.promise;
    }
  };
};