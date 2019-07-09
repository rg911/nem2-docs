# CatapultRestApiReference.DiagnosticRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDiagnosticStorage**](DiagnosticRoutesApi.md#getDiagnosticStorage) | **GET** /diagnostic/storage | Get the storage information of the node
[**getServerInfo**](DiagnosticRoutesApi.md#getServerInfo) | **GET** /diagnostic/server | Get the version of the running rest component


<a name="getDiagnosticStorage"></a>
# **getDiagnosticStorage**
> StorageInfoDTO getDiagnosticStorage()

Get the storage information of the node

Returns diagnostic information about the node storage.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.DiagnosticRoutesApi();
apiInstance.getDiagnosticStorage().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**StorageInfoDTO**](StorageInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getServerInfo"></a>
# **getServerInfo**
> ServerDTO getServerInfo()

Get the version of the running rest component

Returns the version of the running rest component.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.DiagnosticRoutesApi();
apiInstance.getServerInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerDTO**](ServerDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

