Wireframe React Dapp. Skeleton framework for implementing react and and connecting web3 at the same time. Simple smart contract for a "parcel". Parcel is an object that can be created, change ownership, etc. Web3 can potentially be placed in redux dispatch, to have functions available in all components. Right now, I'm loading web3 at the App.js level.

react  
redux  
ganache-cli  
solc  
web3  

```
bother7:~/my_react_dapp$ node
> Web3 = require('web3')
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
> code = fs.readFileSync('./src/parcel.sol').toString()
> solc = require('solc')
> compiledCode = solc.compile(code)
> abiDefinition = JSON.parse(compiledCode.contracts[':ParcelFactory'].interface)
> sampleAccount = web3.eth.accounts.create()
> parcelfactoryContract = new web3.eth.Contract(abiDefinition, sampleAccount.address)
> byteCode = compiledCode.contracts[':ParcelFactory'].bytecode
> deployedContract = parcelfactoryContract.deploy({from: sampleAccount.address, data: byteCode, gas: '4700000'})
> sampleAccount.address
```
