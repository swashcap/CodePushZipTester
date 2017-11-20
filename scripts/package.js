// Use code-push's packager
const AccountManager = require('code-push')
const path = require('path')

AccountManager.prototype.packageFileFromPath.call(
  {
    generateRandomFilename() {
      return path.resolve(__dirname, '../build/packaged')
    }
  },
  path.resolve(__dirname, '../build/bundle')
)
  .then(() => console.log('Packaged!'))
  .catch(console.error)
