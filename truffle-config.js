const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "gap actual patient foam cereal horror loop ugly electric clean problem gallery";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        develop: {
            port: 7545
        },
        ropsten: {
            provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/1815651cbc7440fca737ecf87905dd31`),
            network_id: 3,
            gas: 4500000,
            gasPrice: 10000000000
        },
    }
};