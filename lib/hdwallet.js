// based on: https://github.com/trufflesuite/truffle-hdwallet-provider/blob/master/index.js
//           https://ethereum.stackexchange.com/questions/11166/how-to-generate-a-keystore-utc-file-from-the-raw-private-key
//

var bip39 = require("bip39");
var hdkey = require('ethereumjs-wallet/hdkey');

function HDWallet(mnemonic, address_index=0, num_addresses=1) {
  if (!bip39.validateMnemonic(mnemonic)) {
    throw new Error("Mnemonic invalid or undefined")
  }

  this.mnemonic = mnemonic;
  this.hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
  this.wallet_hdpath = "m/44'/60'/0'/0/";
  this.wallets = {};

  for (let i = address_index; i < address_index + num_addresses; i++){
    this.wallets[i] = this.hdwallet.derivePath(this.wallet_hdpath + i).getWallet();
  }
}

HDWallet.prototype._createWallet = function(idx) {
  return this.hdwallet.derivePath(this.wallet_hdpath + idx).getWallet();
};

HDWallet.prototype.getKeystoreJson = function(password, idx=0) {
  return this._createWallet(idx).toV3String(password);
};

module.exports = HDWallet;