require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain uncover inflict phone olympic street'; 
let testAccounts = [
"0xa510b953a110bcd3cafea3baa256ab278a5375c1b7a83988c467b35a7046c5d1",
"0xb0d421051341ea383356163c37916cb5d262d0c0cf3a1ffc46181bcb299b5ce3",
"0x45921278c7b67d15c45ba1d1f175d1b848ba9f8df9c334f16ad8ebdb703fc077",
"0xf10557cbcc7851c64ac7f9f99fd753598101d727244c2a7753e2d854fd2eb38f",
"0x671393beb34201fdd68e380bfe15e4bcfaacbdc06f1bb8caf7419ad94d8d981f",
"0x1515b332dced3b088274047b7b103dbdb4ea9d4239c906fc1ab72be10ac04b7f",
"0x497fece2ced09e3d025ed7bfc39c3030b736394dd809cd011020041b190fc0bd",
"0x6b8b9b3d5d6ca472d9770eaa650b11c1c3be8b85d0a7bf876d3e1ed4a1c188b6",
"0x1d5ca6af207d927a5760a7b79e5480c10d8175cfd5095a4260a35ab0e10a847c",
"0xd2fca1e04f6661f1d202aeb26d82e1e7226d6e767f275bf91ba9bd6a49d8f580"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

