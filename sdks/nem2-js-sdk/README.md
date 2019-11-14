# catapult_rest_api_reference

CatapultRestApiReference - JavaScript client for catapult_rest_api_reference
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.12
- Package version: 1.0.12
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install catapult_rest_api_reference --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CatapultRestApiReference = require('catapult_rest_api_reference');

var api = new CatapultRestApiReference.AccountRoutesApi()

var accountId = "accountId_example"; // {String} The public key or address of the account.

api.getAccountInfo(accountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CatapultRestApiReference.AccountRoutesApi* | [**getAccountInfo**](docs/AccountRoutesApi.md#getAccountInfo) | **GET** /account/{accountId} | Get account information
*CatapultRestApiReference.AccountRoutesApi* | [**getAccountMultisig**](docs/AccountRoutesApi.md#getAccountMultisig) | **GET** /account/{accountId}/multisig | Get multisig account information
*CatapultRestApiReference.AccountRoutesApi* | [**getAccountMultisigGraph**](docs/AccountRoutesApi.md#getAccountMultisigGraph) | **GET** /account/{accountId}/multisig/graph | Get multisig account graph information
*CatapultRestApiReference.AccountRoutesApi* | [**getAccountProperties**](docs/AccountRoutesApi.md#getAccountProperties) | **GET** /account/properties/{accountId} | Get account configurable properties information
*CatapultRestApiReference.AccountRoutesApi* | [**getAccountPropertiesFromAccounts**](docs/AccountRoutesApi.md#getAccountPropertiesFromAccounts) | **POST** /account/properties | Get account properties for given array of addresses
*CatapultRestApiReference.AccountRoutesApi* | [**getAccountsInfo**](docs/AccountRoutesApi.md#getAccountsInfo) | **POST** /account | Get accounts information
*CatapultRestApiReference.AccountRoutesApi* | [**incomingTransactions**](docs/AccountRoutesApi.md#incomingTransactions) | **GET** /account/{publicKey}/transactions/incoming | Get incoming transactions
*CatapultRestApiReference.AccountRoutesApi* | [**outgoingTransactions**](docs/AccountRoutesApi.md#outgoingTransactions) | **GET** /account/{publicKey}/transactions/outgoing | Get outgoing transactions
*CatapultRestApiReference.AccountRoutesApi* | [**partialTransactions**](docs/AccountRoutesApi.md#partialTransactions) | **GET** /account/{publicKey}/transactions/partial | Get aggregate bonded transactions information
*CatapultRestApiReference.AccountRoutesApi* | [**transactions**](docs/AccountRoutesApi.md#transactions) | **GET** /account/{publicKey}/transactions | Get confirmed transactions
*CatapultRestApiReference.AccountRoutesApi* | [**unconfirmedTransactions**](docs/AccountRoutesApi.md#unconfirmedTransactions) | **GET** /account/{publicKey}/transactions/unconfirmed | Get unconfirmed transactions
*CatapultRestApiReference.BlockchainRoutesApi* | [**getBlockByHeight**](docs/BlockchainRoutesApi.md#getBlockByHeight) | **GET** /block/{height} | Get block information
*CatapultRestApiReference.BlockchainRoutesApi* | [**getBlockReceipts**](docs/BlockchainRoutesApi.md#getBlockReceipts) | **GET** /block/{height}/receipts | Get receipts from a block
*CatapultRestApiReference.BlockchainRoutesApi* | [**getBlockTransactions**](docs/BlockchainRoutesApi.md#getBlockTransactions) | **GET** /block/{height}/transactions | Get transactions from a block
*CatapultRestApiReference.BlockchainRoutesApi* | [**getBlockchainHeight**](docs/BlockchainRoutesApi.md#getBlockchainHeight) | **GET** /chain/height | Get the current height of the chain
*CatapultRestApiReference.BlockchainRoutesApi* | [**getBlockchainScore**](docs/BlockchainRoutesApi.md#getBlockchainScore) | **GET** /chain/score | Get the current score of the chain
*CatapultRestApiReference.BlockchainRoutesApi* | [**getBlocksByHeightWithLimit**](docs/BlockchainRoutesApi.md#getBlocksByHeightWithLimit) | **GET** /blocks/{height}/limit/{limit} | Get blocks information
*CatapultRestApiReference.BlockchainRoutesApi* | [**getDiagnosticStorage**](docs/BlockchainRoutesApi.md#getDiagnosticStorage) | **GET** /diagnostic/storage | Get the storage information
*CatapultRestApiReference.BlockchainRoutesApi* | [**getMerkleReceipts**](docs/BlockchainRoutesApi.md#getMerkleReceipts) | **GET** /block/{height}/receipt/{hash}/merkle | Get the merkle path for a given a receipt statement hash and block
*CatapultRestApiReference.BlockchainRoutesApi* | [**getMerkleTransaction**](docs/BlockchainRoutesApi.md#getMerkleTransaction) | **GET** /block/{height}/transaction/{hash}/merkle | Get the merkle path for a given a transaction and block
*CatapultRestApiReference.MosaicRoutesApi* | [**getMosaic**](docs/MosaicRoutesApi.md#getMosaic) | **GET** /mosaic/{mosaicId} | Get mosaic information
*CatapultRestApiReference.MosaicRoutesApi* | [**getMosaics**](docs/MosaicRoutesApi.md#getMosaics) | **POST** /mosaic | Get mosaics information for an array of mosaics
*CatapultRestApiReference.MosaicRoutesApi* | [**getMosaicsName**](docs/MosaicRoutesApi.md#getMosaicsName) | **POST** /mosaic/names | Get readable names for a set of mosaics
*CatapultRestApiReference.NamespaceRoutesApi* | [**getNamespace**](docs/NamespaceRoutesApi.md#getNamespace) | **GET** /namespace/{namespaceId} | Get namespace information
*CatapultRestApiReference.NamespaceRoutesApi* | [**getNamespacesFromAccount**](docs/NamespaceRoutesApi.md#getNamespacesFromAccount) | **GET** /account/{accountId}/namespaces | Get namespaces owned by an account
*CatapultRestApiReference.NamespaceRoutesApi* | [**getNamespacesFromAccounts**](docs/NamespaceRoutesApi.md#getNamespacesFromAccounts) | **POST** /account/namespaces | Get namespaces for given array of addresses
*CatapultRestApiReference.NamespaceRoutesApi* | [**getNamespacesNames**](docs/NamespaceRoutesApi.md#getNamespacesNames) | **POST** /namespace/names | Get readable names for a set of namespaces
*CatapultRestApiReference.NetworkRoutesApi* | [**getNetworkType**](docs/NetworkRoutesApi.md#getNetworkType) | **GET** /network | Get the current network type of the chain
*CatapultRestApiReference.NodeRoutesApi* | [**getNodeInfo**](docs/NodeRoutesApi.md#getNodeInfo) | **GET** /node/info | Get the node information
*CatapultRestApiReference.NodeRoutesApi* | [**getNodeTime**](docs/NodeRoutesApi.md#getNodeTime) | **GET** /node/time | Get the node time
*CatapultRestApiReference.TransactionRoutesApi* | [**announceCosignatureTransaction**](docs/TransactionRoutesApi.md#announceCosignatureTransaction) | **PUT** /transaction/cosignature | Announce a cosignature transaction
*CatapultRestApiReference.TransactionRoutesApi* | [**announcePartialTransaction**](docs/TransactionRoutesApi.md#announcePartialTransaction) | **PUT** /transaction/partial | Announce an aggregate bonded transaction
*CatapultRestApiReference.TransactionRoutesApi* | [**announceTransaction**](docs/TransactionRoutesApi.md#announceTransaction) | **PUT** /transaction | Announce a new transaction
*CatapultRestApiReference.TransactionRoutesApi* | [**getTransaction**](docs/TransactionRoutesApi.md#getTransaction) | **GET** /transaction/{transactionId} | Get transaction information
*CatapultRestApiReference.TransactionRoutesApi* | [**getTransactionStatus**](docs/TransactionRoutesApi.md#getTransactionStatus) | **GET** /transaction/{hash}/status | Get transaction status
*CatapultRestApiReference.TransactionRoutesApi* | [**getTransactions**](docs/TransactionRoutesApi.md#getTransactions) | **POST** /transaction | Get transactions information
*CatapultRestApiReference.TransactionRoutesApi* | [**getTransactionsStatuses**](docs/TransactionRoutesApi.md#getTransactionsStatuses) | **POST** /transaction/statuses | Get transactions status.


## Documentation for Models

 - [CatapultRestApiReference.AccountDTO](docs/AccountDTO.md)
 - [CatapultRestApiReference.AccountInfoDTO](docs/AccountInfoDTO.md)
 - [CatapultRestApiReference.AccountMetaDTO](docs/AccountMetaDTO.md)
 - [CatapultRestApiReference.AccountPropertiesDTO](docs/AccountPropertiesDTO.md)
 - [CatapultRestApiReference.AccountPropertiesInfoDTO](docs/AccountPropertiesInfoDTO.md)
 - [CatapultRestApiReference.AccountPropertiesMetaDTO](docs/AccountPropertiesMetaDTO.md)
 - [CatapultRestApiReference.AccountPropertyDTO](docs/AccountPropertyDTO.md)
 - [CatapultRestApiReference.Addresses](docs/Addresses.md)
 - [CatapultRestApiReference.AliasDTO](docs/AliasDTO.md)
 - [CatapultRestApiReference.AnnounceTransactionInfoDTO](docs/AnnounceTransactionInfoDTO.md)
 - [CatapultRestApiReference.BlockDTO](docs/BlockDTO.md)
 - [CatapultRestApiReference.BlockInfoDTO](docs/BlockInfoDTO.md)
 - [CatapultRestApiReference.BlockMetaDTO](docs/BlockMetaDTO.md)
 - [CatapultRestApiReference.BlockchainScoreDTO](docs/BlockchainScoreDTO.md)
 - [CatapultRestApiReference.BlockchainStorageInfoDTO](docs/BlockchainStorageInfoDTO.md)
 - [CatapultRestApiReference.CommunicationTimestamps](docs/CommunicationTimestamps.md)
 - [CatapultRestApiReference.HeightDTO](docs/HeightDTO.md)
 - [CatapultRestApiReference.MerklePathItem](docs/MerklePathItem.md)
 - [CatapultRestApiReference.MerkleProofInfoDTO](docs/MerkleProofInfoDTO.md)
 - [CatapultRestApiReference.MerkleProofInfoPayload](docs/MerkleProofInfoPayload.md)
 - [CatapultRestApiReference.MosaicDTO](docs/MosaicDTO.md)
 - [CatapultRestApiReference.MosaicDefinitionDTO](docs/MosaicDefinitionDTO.md)
 - [CatapultRestApiReference.MosaicIds](docs/MosaicIds.md)
 - [CatapultRestApiReference.MosaicInfoDTO](docs/MosaicInfoDTO.md)
 - [CatapultRestApiReference.MosaicMetaDTO](docs/MosaicMetaDTO.md)
 - [CatapultRestApiReference.MosaicNameDTO](docs/MosaicNameDTO.md)
 - [CatapultRestApiReference.MosaicPropertiesDTO](docs/MosaicPropertiesDTO.md)
 - [CatapultRestApiReference.MultisigAccountGraphInfoDTO](docs/MultisigAccountGraphInfoDTO.md)
 - [CatapultRestApiReference.MultisigAccountInfoDTO](docs/MultisigAccountInfoDTO.md)
 - [CatapultRestApiReference.MultisigDTO](docs/MultisigDTO.md)
 - [CatapultRestApiReference.NamespaceDTO](docs/NamespaceDTO.md)
 - [CatapultRestApiReference.NamespaceIds](docs/NamespaceIds.md)
 - [CatapultRestApiReference.NamespaceInfoDTO](docs/NamespaceInfoDTO.md)
 - [CatapultRestApiReference.NamespaceMetaDTO](docs/NamespaceMetaDTO.md)
 - [CatapultRestApiReference.NamespaceNameDTO](docs/NamespaceNameDTO.md)
 - [CatapultRestApiReference.NetworkTypeDTO](docs/NetworkTypeDTO.md)
 - [CatapultRestApiReference.NodeInfoDTO](docs/NodeInfoDTO.md)
 - [CatapultRestApiReference.NodeTimeDTO](docs/NodeTimeDTO.md)
 - [CatapultRestApiReference.TransactionHashes](docs/TransactionHashes.md)
 - [CatapultRestApiReference.TransactionIds](docs/TransactionIds.md)
 - [CatapultRestApiReference.TransactionPayload](docs/TransactionPayload.md)
 - [CatapultRestApiReference.TransactionStatusDTO](docs/TransactionStatusDTO.md)
 - [CatapultRestApiReference.UInt64DTO](docs/UInt64DTO.md)


## Documentation for Authorization

 All endpoints do not require authorization.
