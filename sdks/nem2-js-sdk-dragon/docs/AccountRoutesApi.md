# CatapultRestApiReference.AccountRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountInfo**](AccountRoutesApi.md#getAccountInfo) | **GET** /account/{accountId} | Get account information
[**getAccountMultisig**](AccountRoutesApi.md#getAccountMultisig) | **GET** /account/{accountId}/multisig | Get multisig account information
[**getAccountMultisigGraph**](AccountRoutesApi.md#getAccountMultisigGraph) | **GET** /account/{accountId}/multisig/graph | Get multisig account graph information
[**getAccountProperties**](AccountRoutesApi.md#getAccountProperties) | **GET** /account/{accountId}/properties/ | Get account configurable properties information
[**getAccountPropertiesFromAccounts**](AccountRoutesApi.md#getAccountPropertiesFromAccounts) | **POST** /account/properties | Get account properties for given array of addresses
[**getAccountsInfo**](AccountRoutesApi.md#getAccountsInfo) | **POST** /account | Get accounts information
[**getAccountsNames**](AccountRoutesApi.md#getAccountsNames) | **POST** /account/names | Get readable names for a set of accountIds.
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

Returns the multisig account information.

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

Returns the multisig account graph.

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

Returns the configurable properties for a given account.

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
> [AccountPropertiesInfoDTO] getAccountPropertiesFromAccounts(accounstIds)

Get account properties for given array of addresses

Returns the configurable properties for a given array of addresses.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let accounstIds = new CatapultRestApiReference.AccountsIds(); // AccountsIds | 

apiInstance.getAccountPropertiesFromAccounts(accounstIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accounstIds** | [**AccountsIds**](AccountsIds.md)|  | 

### Return type

[**[AccountPropertiesInfoDTO]**](AccountPropertiesInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccountsInfo"></a>
# **getAccountsInfo**
> [AccountInfoDTO] getAccountsInfo(accountsIds)

Get accounts information

Returns the account information for an array of accounts.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let accountsIds = new CatapultRestApiReference.AccountsIds(); // AccountsIds | 

apiInstance.getAccountsInfo(accountsIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountsIds** | [**AccountsIds**](AccountsIds.md)|  | 

### Return type

[**[AccountInfoDTO]**](AccountInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccountsNames"></a>
# **getAccountsNames**
> [AccountNamesDTO] getAccountsNames(accountIds)

Get readable names for a set of accountIds.

Returns friendly names for accounts.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let accountIds = new CatapultRestApiReference.AccountsIds(); // AccountsIds | 

apiInstance.getAccountsNames(accountIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**AccountsIds**](AccountsIds.md)|  | 

### Return type

[**[AccountNamesDTO]**](AccountNamesDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="incomingTransactions"></a>
# **incomingTransactions**
> [TransactionInfoDTO] incomingTransactions(publicKey, opts)

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
  'ordering': "-id" // String | The ordering criteria: * -id - Descending order by id. * id - Ascending order by id. 
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
 **ordering** | **String**| The ordering criteria: * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to -id]

### Return type

[**[TransactionInfoDTO]**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="outgoingTransactions"></a>
# **outgoingTransactions**
> [TransactionInfoDTO] outgoingTransactions(publicKey, opts)

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
  'ordering': "-id" // String | The ordering criteria: * -id - Descending order by id. * id - Ascending order by id. 
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
 **ordering** | **String**| The ordering criteria: * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to -id]

### Return type

[**[TransactionInfoDTO]**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partialTransactions"></a>
# **partialTransactions**
> [TransactionInfoDTO] partialTransactions(publicKey, opts)

Get aggregate bonded transactions information

Gets an array of aggregate bonded transactions where the account is the sender or requires to cosign the transaction. 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.AccountRoutesApi();

let publicKey = "publicKey_example"; // String | The public key of the account.

let opts = { 
  'pageSize': 10, // Number | The number of transactions to return for each request.
  'id': "id_example", // String | The transaction id up to which transactions are returned. 
  'ordering': "-id" // String | The ordering criteria. * -id - Descending order by id. * id - Ascending order by id. 
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
 **ordering** | **String**| The ordering criteria. * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to -id]

### Return type

[**[TransactionInfoDTO]**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="transactions"></a>
# **transactions**
> [TransactionInfoDTO] transactions(publicKey, opts)

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
  'ordering': "-id" // String | The ordering criteria: * -id - Descending order by id. * id - Ascending order by id. 
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
 **ordering** | **String**| The ordering criteria: * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to -id]

### Return type

[**[TransactionInfoDTO]**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="unconfirmedTransactions"></a>
# **unconfirmedTransactions**
> [TransactionInfoDTO] unconfirmedTransactions(publicKey, opts)

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
  'ordering': "-id" // String | The ordering criteria. * -id - Descending order by id. * id - Ascending order by id. 
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
 **ordering** | **String**| The ordering criteria. * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to -id]

### Return type

[**[TransactionInfoDTO]**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

