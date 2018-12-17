const path = require('path');
const fs = require('fs');

const packageInfo = (function() {
  try {
    const infoString = fs.readFileSync(
      path.join(process.cwd(), 'package.json'),
      { encoding: 'utf8' },
    );
    return JSON.parse(infoString);
  } catch (error) {
    console.error(error);
    return {};
  }
})();

module.exports = function(bundler) {
  const assetTypesToStringify = packageInfo.assetTypesToStringify || [];

  assetTypesToStringify.forEach((assetType) => {
    bundler.addAssetType(assetType, require.resolve('./Stringify'));
  });
};
