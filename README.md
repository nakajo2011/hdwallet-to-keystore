[![Dependency Status](https://gemnasium.com/badges/github.com/nakajo2011/hdwallet-to-keystore.svg)](https://gemnasium.com/github.com/nakajo2011/hdwallet-to-keystore)

# hdwallet-to-keystore
> EthreumのHDWalletのアカウントからkeystore JSON fileを生成するツールです。

> create ethereum keystore file from hdwallet accounts.


## Installation

```
$npm install hdwallet-to-keystore
```
or
```
$npm install -g hdwallet-to-keystore
```

## Usage
```
Usage: hd2keystore [options] <mnemonic> <password>

create ethereum keystore file from hdwallet accounts.

Options:

    -V, --version            output the version number
    -i, --account-index <n>  target index of hdwallet accounts. default: 0 (default: 0)
    -h, --help               output usage information
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

