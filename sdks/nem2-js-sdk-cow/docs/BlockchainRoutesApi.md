# CatapultRestApiReference.BlockchainRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockByHeight**](BlockchainRoutesApi.md#getBlockByHeight) | **GET** /block/{height} | Get block information
[**getBlockReceipts**](BlockchainRoutesApi.md#getBlockReceipts) | **GET** /block/{height}/receipts | Get receipts from a block
[**getBlockTransactions**](BlockchainRoutesApi.md#getBlockTransactions) | **GET** /block/{height}/transactions | Get transactions from a block
[**getBlockchainHeight**](BlockchainRoutesApi.md#getBlockchainHeight) | **GET** /chain/height | Get the current height of the chain
[**getBlockchainScore**](BlockchainRoutesApi.md#getBlockchainScore) | **GET** /chain/score | Get the current score of the chain
[**getBlocksByHeightWithLimit**](BlockchainRoutesApi.md#getBlocksByHeightWithLimit) | **GET** /blocks/{height}/limit/{limit} | Get blocks information
[**getDiagnosticStorage**](BlockchainRoutesApi.md#getDiagnosticStorage) | **GET** /diagnostic/storage | Get the storage information
[**getMerkleReceipts**](BlockchainRoutesApi.md#getMerkleReceipts) | **GET** /block/{height}/receipt/{hash}/merkle | Get the merkle path for a given a receipt statement hash and block
[**getMerkleTransaction**](BlockchainRoutesApi.md#getMerkleTransaction) | **GET** /block/{height}/transaction/{hash}/merkle | Get the merkle path for a given a transaction and block


<a name="getBlockByHeight"></a>
# **getBlockByHeight**
> BlockInfoDTO getBlockByHeight(height)

Get block information

Gets a block from the chain that has the given height.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockchainRoutesApi();

let height = 789; // Number | The height of the block.

apiInstance.getBlockByHeight(height).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| The height of the block. | 

### Return type

[**BlockInfoDTO**](BlockInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockReceipts"></a>
# **getBlockReceipts**
> [Object] getBlockReceipts(height)

Get receipts from a block

Returns the [receipts](https://nemtech.github.io/concepts/receipt.html) linked to a block.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockchainRoutesApi();

let height = 789; // Number | The height of the block.

apiInstance.getBlockReceipts(height).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| The height of the block. | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockTransactions"></a>
# **getBlockTransactions**
> [Object] getBlockTransactions(height, opts)

Get transactions from a block

Returns an array of [transactions](https://nemtech.github.io/concepts/transaction.html) included in a block for a given block height.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockchainRoutesApi();

let height = 789; // Number | The height of the block.

let opts = { 
  'pageSize': 10, // Number | The number of transactions to return for each request.
  'id': "id_example" // String | The transaction id up to which transactions are returned.
};
apiInstance.getBlockTransactions(height, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| The height of the block. | 
 **pageSize** | **Number**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned. | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockchainHeight"></a>
# **getBlockchainHeight**
> HeightDTO getBlockchainHeight()

Get the current height of the chain

Returns the current height of the blockchain.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockchainRoutesApi();
apiInstance.getBlockchainHeight().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HeightDTO**](HeightDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockchainScore"></a>
# **getBlockchainScore**
> BlockchainScoreDTO getBlockchainScore()

Get the current score of the chain

Gets the current score of the blockchain. The higher the score, the better the chain. During synchronization, nodes try to get the best blockchain in the network.  The score for a block is derived from its difficulty and the time (in seconds) that has elapsed since the last block:      block score &#x3D; difficulty − time elasped since last block 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockchainRoutesApi();
apiInstance.getBlockchainScore().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BlockchainScoreDTO**](BlockchainScoreDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlocksByHeightWithLimit"></a>
# **getBlocksByHeightWithLimit**
> [BlockInfoDTO] getBlocksByHeightWithLimit(height, limit)

Get blocks information

Gets up to limit number of blocks after given block height.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockchainRoutesApi();

let height = 789; // Number | The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.

let limit = 56; // Number | The number of blocks to be returned.

apiInstance.getBlocksByHeightWithLimit(height, limit).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead. | 
 **limit** | **Number**| The number of blocks to be returned. | 

### Return type

[**[BlockInfoDTO]**](BlockInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDiagnosticStorage"></a>
# **getDiagnosticStorage**
> BlockchainStorageInfoDTO getDiagnosticStorage()

Get the storage information

Returns statistical information about the blockchain.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockchainRoutesApi();
apiInstance.getDiagnosticStorage().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BlockchainStorageInfoDTO**](BlockchainStorageInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMerkleReceipts"></a>
# **getMerkleReceipts**
> MerkleProofInfoDTO getMerkleReceipts(height, hash)

Get the merkle path for a given a receipt statement hash and block

Returns the merkle path for a [receipt statement or resolution](https://nemtech.github.io/concepts/receipt.html) linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockchainRoutesApi();

let height = 789; // Number | The height of the block.

let hash = "hash_example"; // String | The hash of the receipt statement or resolution.

apiInstance.getMerkleReceipts(height, hash).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| The height of the block. | 
 **hash** | **String**| The hash of the receipt statement or resolution. | 

### Return type

[**MerkleProofInfoDTO**](MerkleProofInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMerkleTransaction"></a>
# **getMerkleTransaction**
> MerkleProofInfoDTO getMerkleTransaction(height, hash)

Get the merkle path for a given a transaction and block

Returns the merkle path for a [transaction](https://nemtech.github.io/concepts/transaction.html) included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockchainRoutesApi();

let height = 789; // Number | The height of the block.

let hash = "hash_example"; // String | The hash of the transaction.

apiInstance.getMerkleTransaction(height, hash).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| The height of the block. | 
 **hash** | **String**| The hash of the transaction. | 

### Return type

[**MerkleProofInfoDTO**](MerkleProofInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

