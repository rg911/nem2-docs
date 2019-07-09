# CatapultRestApiReference.TransactionRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**announceCosignatureTransaction**](TransactionRoutesApi.md#announceCosignatureTransaction) | **PUT** /transaction/cosignature | Announce a cosignature transaction
[**announcePartialTransaction**](TransactionRoutesApi.md#announcePartialTransaction) | **PUT** /transaction/partial | Announce an aggregate bonded transaction
[**announceTransaction**](TransactionRoutesApi.md#announceTransaction) | **PUT** /transaction | Announce a new transaction
[**getTransaction**](TransactionRoutesApi.md#getTransaction) | **GET** /transaction/{transactionId} | Get transaction information
[**getTransactionStatus**](TransactionRoutesApi.md#getTransactionStatus) | **GET** /transaction/{hash}/status | Get transaction status
[**getTransactions**](TransactionRoutesApi.md#getTransactions) | **POST** /transaction | Get transactions information
[**getTransactionsStatuses**](TransactionRoutesApi.md#getTransactionsStatuses) | **POST** /transaction/statuses | Get transactions status.


<a name="announceCosignatureTransaction"></a>
# **announceCosignatureTransaction**
> Object announceCosignatureTransaction(payload)

Announce a cosignature transaction

Announces a [cosignature transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#cosignature-transaction) to the network.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.TransactionRoutesApi();

let payload = new CatapultRestApiReference.TransactionPayload(); // TransactionPayload | The transaction [payload](https://nemtech.github.io/api.html#serialization).

apiInstance.announceCosignatureTransaction(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**TransactionPayload**](TransactionPayload.md)| The transaction [payload](https://nemtech.github.io/api.html#serialization). | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="announcePartialTransaction"></a>
# **announcePartialTransaction**
> Object announcePartialTransaction(payload)

Announce an aggregate bonded transaction

Announces an [aggregate bonded transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-bonded) to the network.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.TransactionRoutesApi();

let payload = new CatapultRestApiReference.TransactionPayload(); // TransactionPayload | The transaction [payload](https://nemtech.github.io/api.html#serialization).

apiInstance.announcePartialTransaction(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**TransactionPayload**](TransactionPayload.md)| The transaction [payload](https://nemtech.github.io/api.html#serialization). | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="announceTransaction"></a>
# **announceTransaction**
> Object announceTransaction(payload)

Announce a new transaction

Announces a transaction to the network. It is recommended to use the NEM2-SDK to announce transactions as they should be [serialized](https://nemtech.github.io/api.html#serialization).

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.TransactionRoutesApi();

let payload = new CatapultRestApiReference.TransactionPayload(); // TransactionPayload | The transaction [payload](https://nemtech.github.io/api.html#serialization).

apiInstance.announceTransaction(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**TransactionPayload**](TransactionPayload.md)| The transaction [payload](https://nemtech.github.io/api.html#serialization). | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransaction"></a>
# **getTransaction**
> Object getTransaction(transactionId)

Get transaction information

Returns transaction information given a transactionId or hash.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.TransactionRoutesApi();

let transactionId = "transactionId_example"; // String | The transaction id or hash.

apiInstance.getTransaction(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| The transaction id or hash. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionStatus"></a>
# **getTransactionStatus**
> TransactionStatusDTO getTransactionStatus(hash)

Get transaction status

Returns the transaction status for a given hash.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.TransactionRoutesApi();

let hash = "hash_example"; // String | The transaction hash.

apiInstance.getTransactionStatus(hash).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The transaction hash. | 

### Return type

[**TransactionStatusDTO**](TransactionStatusDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactions"></a>
# **getTransactions**
> [Object] getTransactions(transactionIds)

Get transactions information

Returns transactions information for a given array of transactionIds.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.TransactionRoutesApi();

let transactionIds = new CatapultRestApiReference.TransactionIds(); // TransactionIds | An array of transaction ids or hashes.

apiInstance.getTransactions(transactionIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionIds** | [**TransactionIds**](TransactionIds.md)| An array of transaction ids or hashes. | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionsStatuses"></a>
# **getTransactionsStatuses**
> [TransactionStatusDTO] getTransactionsStatuses(transactionHashes)

Get transactions status.

Returns an array of transaction statuses for a given array of transaction hashes.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.TransactionRoutesApi();

let transactionHashes = new CatapultRestApiReference.TransactionHashes(); // TransactionHashes | An array of transaction hashes.

apiInstance.getTransactionsStatuses(transactionHashes).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionHashes** | [**TransactionHashes**](TransactionHashes.md)| An array of transaction hashes. | 

### Return type

[**[TransactionStatusDTO]**](TransactionStatusDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

