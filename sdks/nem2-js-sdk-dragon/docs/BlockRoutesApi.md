# CatapultRestApiReference.BlockRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockByHeight**](BlockRoutesApi.md#getBlockByHeight) | **GET** /block/{height} | Get block information
[**getBlockReceipts**](BlockRoutesApi.md#getBlockReceipts) | **GET** /block/{height}/receipts | Get receipts from a block
[**getBlockTransactions**](BlockRoutesApi.md#getBlockTransactions) | **GET** /block/{height}/transactions | Get transactions from a block
[**getBlocksByHeightWithLimit**](BlockRoutesApi.md#getBlocksByHeightWithLimit) | **GET** /blocks/{height}/limit/{limit} | Get blocks information
[**getMerkleReceipts**](BlockRoutesApi.md#getMerkleReceipts) | **GET** /block/{height}/receipt/{hash}/merkle | Get the merkle path for a given a receipt statement hash and block
[**getMerkleTransaction**](BlockRoutesApi.md#getMerkleTransaction) | **GET** /block/{height}/transaction/{hash}/merkle | Get the merkle path for a given a transaction and block


<a name="getBlockByHeight"></a>
# **getBlockByHeight**
> BlockInfoDTO getBlockByHeight(height)

Get block information

Gets a block from the chain that has the given height.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockRoutesApi();

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
> StatementsDTO getBlockReceipts(height)

Get receipts from a block

Returns the receipts linked to a block.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockRoutesApi();

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

[**StatementsDTO**](StatementsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockTransactions"></a>
# **getBlockTransactions**
> [TransactionInfoDTO] getBlockTransactions(height, opts)

Get transactions from a block

Returns an array of transactions included in a block for a given block height.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockRoutesApi();

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

[**[TransactionInfoDTO]**](TransactionInfoDTO.md)

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

let apiInstance = new CatapultRestApiReference.BlockRoutesApi();

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

<a name="getMerkleReceipts"></a>
# **getMerkleReceipts**
> MerkleProofInfoDTO getMerkleReceipts(height, hash)

Get the merkle path for a given a receipt statement hash and block

Returns the merkle path for a receipt statement or resolution linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block. 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockRoutesApi();

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

Returns the merkle path for a transaction included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block. 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.BlockRoutesApi();

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

