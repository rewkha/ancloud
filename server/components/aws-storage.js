import AWS from 'aws-sdk';

export default class Storage {
  constructor() {
    this.s3 = new AWS.S3({
      params: { Bucket: '' }
    });
  }

  /**
   * Get list of files and folders from folder prefix
   *
   * @example
   * storage.getList('', 'bucket-name');
   *
   * {
   *  "files": [
   *    {
   *      "Key": "example/",
   *      "LastModified": "2018-10-21T17:01:46.000Z",
   *      "ETag": "\"example12332example\"",
   *      "Size": 0,
   *      "StorageClass": "STANDARD"
   *    },
   *    ...
   *  ],
   *  "folders": [
   *    {
   *      "Prefix": "example/example2/"
   *    }
   *  ],
   *  "count": 2
   * }
   *
   * @param {String} folder
   * @param {String} bucket
   * @returns {Promise} Always returns exactly the same object
   */
  getList(folder, bucket) {
    return new Promise((resolve, reject) => {
      this.s3.listObjectsV2({
        Bucket: bucket,
        Prefix: folder,
        Delimiter: '/'
      }, function(err, data) {
        if (err) {
          reject(err, err.stack);
        } else {
          resolve({
            files: data.Contents,
            folders: data.CommonPrefixes,
            count: data.KeyCount
          });
        }
      });
    });
  }

  // getMyBuckets() {
  //   this.s3.listBuckets({}, function(err, data) {
  //     if (err) {
  //       console.log(err, err.stack); // an error occurred
  //     } else {
  //       console.log(data);
  //     }
  //   })
  // }
}
