const { Asset } = require('parcel-bundler');

class Stringify extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
    this.code = '';
  }

  async parse(string) {
    this.code = `module.exports = ${JSON.stringify(string)}`;
  }

  async generate() {
    return { js: this.code };
  }
}

module.exports = Stringify;
