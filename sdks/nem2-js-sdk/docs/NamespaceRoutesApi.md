# CatapultRestApiReference.NamespaceRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNamespace**](NamespaceRoutesApi.md#getNamespace) | **GET** /namespace/{namespaceId} | Get namespace information
[**getNamespacesFromAccount**](NamespaceRoutesApi.md#getNamespacesFromAccount) | **GET** /account/{accountId}/namespaces | Get namespaces owned by an account
[**getNamespacesFromAccounts**](NamespaceRoutesApi.md#getNamespacesFromAccounts) | **POST** /account/namespaces | Get namespaces for given array of addresses
[**getNamespacesNames**](NamespaceRoutesApi.md#getNamespacesNames) | **POST** /namespace/names | Get readable names for a set of namespaces


<a name="getNamespace"></a>
# **getNamespace**
> NamespaceInfoDTO getNamespace(namespaceId)

Get namespace information

Gets the namespace for a given namespaceId.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.NamespaceRoutesApi();

let namespaceId = "namespaceId_example"; // String | The namespace identifier.

apiInstance.getNamespace(namespaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespaceId** | **String**| The namespace identifier. | 

### Return type

[**NamespaceInfoDTO**](NamespaceInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNamespacesFromAccount"></a>
# **getNamespacesFromAccount**
> [NamespaceInfoDTO] getNamespacesFromAccount(accountId, opts)

Get namespaces owned by an account

Gets an array of namespaces for a given account address.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.NamespaceRoutesApi();

let accountId = "accountId_example"; // String | The address or public key of the account.

let opts = { 
  'pageSize': 56, // Number | The number of namespaces to return.
  'id': "id_example" // String | The namespace id up to which namespace objects are returned.
};
apiInstance.getNamespacesFromAccount(accountId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The address or public key of the account. | 
 **pageSize** | **Number**| The number of namespaces to return. | [optional] 
 **id** | **String**| The namespace id up to which namespace objects are returned. | [optional] 

### Return type

[**[NamespaceInfoDTO]**](NamespaceInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNamespacesFromAccounts"></a>
# **getNamespacesFromAccounts**
> [NamespaceInfoDTO] getNamespacesFromAccounts(addresses, opts)

Get namespaces for given array of addresses

Gets namespaces for a given array of addresses.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.NamespaceRoutesApi();

let addresses = new CatapultRestApiReference.Addresses(); // Addresses | An array of addresses.

let opts = { 
  'pageSize': 56, // Number | The number of namespaces to return.
  'id': "id_example" // String | The namespace id up to which namespace objects are returned.
};
apiInstance.getNamespacesFromAccounts(addresses, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addresses** | [**Addresses**](Addresses.md)| An array of addresses. | 
 **pageSize** | **Number**| The number of namespaces to return. | [optional] 
 **id** | **String**| The namespace id up to which namespace objects are returned. | [optional] 

### Return type

[**[NamespaceInfoDTO]**](NamespaceInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNamespacesNames"></a>
# **getNamespacesNames**
> [NamespaceNameDTO] getNamespacesNames(namespaceIds)

Get readable names for a set of namespaces

Returns friendly names for mosaics.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.NamespaceRoutesApi();

let namespaceIds = new CatapultRestApiReference.NamespaceIds(); // NamespaceIds | An array of namespaceIds.

apiInstance.getNamespacesNames(namespaceIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespaceIds** | [**NamespaceIds**](NamespaceIds.md)| An array of namespaceIds. | 

### Return type

[**[NamespaceNameDTO]**](NamespaceNameDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

