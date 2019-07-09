# CatapultRestApiReference.NetworkRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkType**](NetworkRoutesApi.md#getNetworkType) | **GET** /network | Get the current network type of the chain


<a name="getNetworkType"></a>
# **getNetworkType**
> NetworkTypeDTO getNetworkType()

Get the current network type of the chain

Returns the current network type.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.NetworkRoutesApi();
apiInstance.getNetworkType().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**NetworkTypeDTO**](NetworkTypeDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

