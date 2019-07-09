# CatapultRestApiReference.ChainRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockchainHeight**](ChainRoutesApi.md#getBlockchainHeight) | **GET** /chain/height | Get the current height of the chain
[**getBlockchainScore**](ChainRoutesApi.md#getBlockchainScore) | **GET** /chain/score | Get the current score of the chain


<a name="getBlockchainHeight"></a>
# **getBlockchainHeight**
> HeightInfoDTO getBlockchainHeight()

Get the current height of the chain

Returns the current height of the blockchain.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.ChainRoutesApi();
apiInstance.getBlockchainHeight().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HeightInfoDTO**](HeightInfoDTO.md)

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

let apiInstance = new CatapultRestApiReference.ChainRoutesApi();
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

