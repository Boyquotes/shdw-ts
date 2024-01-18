
const anchor = require("@project-serum/anchor");
const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");
const { ShdwDrive, ShadowFile } = require("@shadow-drive/sdk");
const key =  require('./Nv7BkSxVEN4GxebvDfrrkJ7bv4HHZ6KdyXCU3ZVr3N4.json');
const fs = require('fs');

async function main() {
    let secretKey = Uint8Array.from(key);
    let keypair = Keypair.fromSecretKey(secretKey);
    const connection = new Connection(
        "https://rpc.helius.xyz/?api-key=8b08695d-7145-4253-aabf-c59c29dc0e72", "confirmed"
    );    const wallet = new anchor.Wallet(keypair);
    const drive = await new ShdwDrive(connection, wallet).init(); 
		const newAccount = await drive.createStorageAccount("heliusDemo", "1MB", "v2");
		console.log(newAccount);  
    const accts = await drive.getStorageAccounts("v2");
    const fileBuff = fs.readFileSync("./helius.txt");
    let acctPubKey = new anchor.web3.PublicKey(accts[0].publicKey);
    const fileToUpload: typeof ShadowFile = {
    name: "helius.txt",
    file: fileBuff,
    };
    const uploadFile = await drive.uploadFile(acctPubKey, fileToUpload);
    console.log(uploadFile);

}
main();

