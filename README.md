Run only on mainet with true SOL and true SDHW.     

An account and API key is necessary on helius : https://dev.helius.xyz/rpcs/my    

According to this tutorial, everything works fine and file upload to Shadow :    

https://www.helius.dev/blog/uploading-files-to-shadow-drive-on-solana

```
npm i
```

Create a wallet with the same procedure in the tutorial and create a json file with your private key inside, adapt upload.ts with your helius api key and the correct path/filename to your wallet.json file who contain your private key
Transfer Sol and SDHW on the wallet(MAINET ONLY) and run :

```
ts-node upload.ts
```
