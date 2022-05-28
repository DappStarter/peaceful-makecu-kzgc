require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember promote hidden climb tail giant'; 
let testAccounts = [
"0xb447b06d130e9ef760c4ee5dce41519a7f05752b99c23bf9ac612af29df8c87d",
"0xd3a61bf591c5c8950fc4e860f346a8c3da9c7b20cebfbf22b29ab55b8ed712b5",
"0x854fc16a4309daf70f610601be146d8d63e392bfc36d13a579bf679e8e3a3dd3",
"0x26492b0a4e843c9fd52c1dfd3becc28db34d6314d17f2a0728bd008e1df4a558",
"0xe6b3e87cb1ca5bfcd88e643bd24bd77cae5dd9d3a3256a0a2ddb40ef27122c03",
"0xd3f821cc32680440f51fee1a46edff8ed6f124c5ce61161680de6cacef72602e",
"0x0ed1a8d30a178a2204813a7bb44fd66e7c3bea29e047a8395cd9e2138169baa1",
"0x7cce184431e1c574ff5d7cb6d5ff92fc0a7369875e37f661d81d04ab0551d4ba",
"0x186ea8c67f2d1a6ab6377cf3ac8683039795ddc3c6395dbe5a0d95604b240bca",
"0x1c7cde8da499468ef0a2f59a123267db670e865ac7eaf164d21d43d6dae1bf8e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


