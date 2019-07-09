# CatapultRestApiReference.AccountRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountInfo**](AccountRoutesApi.md#getAccountInfo) | **GET** /account/{accountId} | Get account information
[**getAccountMultisig**](AccountRoutesApi.md#getAccountMultisig) | **GET** /account/{accountId}/multisig | Get multisig account information
[**getAccountMultisigGraph**](AccountRoutesApi.md#getAccountMultisigGraph) | **GET** /account/{accountId}/multisig/graph | Get multisig account graph information
[**getAccountProperties**](AccountRoutesApi.md#getAccountProperties) | **GET** /account/properties/{accountId} | Get account configurable properties information
[**getAccountPropertiesFromAccounts**](AccountRoutesApi.md#getAccountPropertiesFromAccounts) | **POST** /account/properties | Get account properties for given array of addresses
[**getAccountsInfo**](AccountRoutesApi.md#getAccountsInfo) | **POST** /account | Get accounts information
[**incomingTransactions**](AccountRoutesApi.md#incomingTransactions) | **GET** /account/{publicKey}/transactions/incoming | Get incoming transactions
[**outgoingTransactions**](AccountRoutesApi.md#outgoingTransactions) | **GET** /account/{publicKey}/transactions/outgoing | Get outgoing transactions
[**partialTransactions**](AccountRoutesApi.md#partialTransactions) | **GET** /account/{publicKey}/transactions/partial | Get aggregate bonded transactions information
[**transactions**](AccountRoutesApi.md#transactions) | **GET** /account/{publicKey}/transactions | Get confirmed transactions
[**unconfirmedTransactions**](AccountRoutesApi.md#unconfirmedTransactions) | **GET** /account/{publicKey}/transactions/unconfirmed | Get unconfirmed transactions


<a name="getAccountInfo"></a>
# **getAccountInfo**
> AccountInfoDTO getAccountInfo(accountId)

Get account information

Returns the account information.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let accountId = "accountId_example"; // String | The public key or address of the account.

apiInstance.getAccountInfo(accountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The public key or address of the account. | 

### Return type

[**AccountInfoDTO**](AccountInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccountMultisig"></a>
# **getAccountMultisig**
> MultisigAccountInfoDTO getAccountMultisig(accountId)

Get multisig account information

Returns the [multisig account](https://nemtech.github.io/concepts/multisig-account.html) information.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let accountId = "accountId_example"; // String | The public key or address of the account.

apiInstance.getAccountMultisig(accountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The public key or address of the account. | 

### Return type

[**MultisigAccountInfoDTO**](MultisigAccountInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccountMultisigGraph"></a>
# **getAccountMultisigGraph**
> [MultisigAccountGraphInfoDTO] getAccountMultisigGraph(accountId)

Get multisig account graph information

Returns the [multisig account](https://nemtech.github.io/concepts/multisig-account.html) graph.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let accountId = "accountId_example"; // String | The public key or address of the account.

apiInstance.getAccountMultisigGraph(accountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The public key or address of the account. | 

### Return type

[**[MultisigAccountGraphInfoDTO]**](MultisigAccountGraphInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccountProperties"></a>
# **getAccountProperties**
> AccountPropertiesInfoDTO getAccountProperties(accountId)

Get account configurable properties information

Returns the [configurable properties](https://nemtech.github.io/concepts/account-filter.html) for a given account. 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let accountId = "accountId_example"; // String | The public key or address of the account.

apiInstance.getAccountProperties(accountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The public key or address of the account. | 

### Return type

[**AccountPropertiesInfoDTO**](AccountPropertiesInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccountPropertiesFromAccounts"></a>
# **getAccountPropertiesFromAccounts**
> [AccountPropertiesInfoDTO] getAccountPropertiesFromAccounts(addresses)

Get account properties for given array of addresses

Returns the [configurable properties](https://nemtech.github.io/concepts/account-filter.html) for a given array of addresses. 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let addresses = new CatapultRestApiReference.Addresses(); // Addresses | An array of addresses.

apiInstance.getAccountPropertiesFromAccounts(addresses).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addresses** | [**Addresses**](Addresses.md)| An array of addresses. | 

### Return type

[**[AccountPropertiesInfoDTO]**](AccountPropertiesInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccountsInfo"></a>
# **getAccountsInfo**
> [AccountInfoDTO] getAccountsInfo(addresses)

Get accounts information

Returns the account information for an array of accounts.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let addresses = new CatapultRestApiReference.Addresses(); // Addresses | An array of addresses.

apiInstance.getAccountsInfo(addresses).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addresses** | [**Addresses**](Addresses.md)| An array of addresses. | 

### Return type

[**[AccountInfoDTO]**](AccountInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="incomingTransactions"></a>
# **incomingTransactions**
> [Object] incomingTransactions(publicKey, opts)

Get incoming transactions

Gets an array of incoming transactions. A transaction is said to be incoming with respect to an account if the account is the recipient of the transaction. 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let publicKey = "publicKey_example"; // String | The public key of the account.

let opts = { 
  'pageSize': 10, // Number | The number of transactions to return for each request.
  'id': "id_example", // String | The transaction id up to which transactions are returned. 
  'ordering': "-id" // String | The ordering criteria. * -id: Descending order by id. * id: Ascending order by id. 
};
apiInstance.incomingTransactions(publicKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicKey** | **String**| The public key of the account. | 
 **pageSize** | **Number**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional] 
 **ordering** | **String**| The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  | [optional] [default to -id]

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="outgoingTransactions"></a>
# **outgoingTransactions**
> [Object] outgoingTransactions(publicKey, opts)

Get outgoing transactions

Gets an array of outgoing transactions. A transaction is said to be outgoing with respect to an account if the account is the sender of the transaction.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let publicKey = "publicKey_example"; // String | The public key of the account.

let opts = { 
  'pageSize': 10, // Number | The number of transactions to return for each request.
  'id': "id_example", // String | The transaction id up to which transactions are returned. 
  'ordering': "-id" // String | The ordering criteria. * -id: Descending order by id. * id: Ascending order by id. 
};
apiInstance.outgoingTransactions(publicKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicKey** | **String**| The public key of the account. | 
 **pageSize** | **Number**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional] 
 **ordering** | **String**| The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  | [optional] [default to -id]

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partialTransactions"></a>
# **partialTransactions**
> [Object] partialTransactions(publicKey, opts)

Get aggregate bonded transactions information

Gets an array of [aggregate bonded transactions](https://nemtech.github.io/concepts/aggregate-transaction.html) where the account is the sender or requires to cosign the transaction. 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let publicKey = "publicKey_example"; // String | The public key of the account.

let opts = { 
  'pageSize': 10, // Number | The number of transactions to return for each request.
  'id': "id_example", // String | The transaction id up to which transactions are returned. 
  'ordering': "-id" // String | The ordering criteria. * -id: Descending order by id. * id: Ascending order by id. 
};
apiInstance.partialTransactions(publicKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicKey** | **String**| The public key of the account. | 
 **pageSize** | **Number**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional] 
 **ordering** | **String**| The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  | [optional] [default to -id]

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="transactions"></a>
# **transactions**
> [Object] transactions(publicKey, opts)

Get confirmed transactions

Gets an array of transactions for which an account is the sender or receiver.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let publicKey = "publicKey_example"; // String | The public key of the account.

let opts = { 
  'pageSize': 10, // Number | The number of transactions to return for each request.
  'id': "id_example", // String | The transaction id up to which transactions are returned. 
  'ordering': "-id" // String | The ordering criteria. * -id: Descending order by id. * id: Ascending order by id. 
};
apiInstance.transactions(publicKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicKey** | **String**| The public key of the account. | 
 **pageSize** | **Number**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional] 
 **ordering** | **String**| The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  | [optional] [default to -id]

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="unconfirmedTransactions"></a>
# **unconfirmedTransactions**
> [Object] unconfirmedTransactions(publicKey, opts)

Get unconfirmed transactions

Gets the array of transactions not included in a block where an account is the sender or receiver. 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let publicKey = "publicKey_example"; // String | The public key of the account.

let opts = { 
  'pageSize': 10, // Number | The number of transactions to return for each request.
  'id': "id_example", // String | The transaction id up to which transactions are returned. 
  'ordering': "-id" // String | The ordering criteria. * -id: Descending order by id. * id: Ascending order by id. 
};
apiInstance.unconfirmedTransactions(publicKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicKey** | **String**| The public key of the account. | 
 **pageSize** | **Number**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional] 
 **ordering** | **String**| The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  | [optional] [default to -id]

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

