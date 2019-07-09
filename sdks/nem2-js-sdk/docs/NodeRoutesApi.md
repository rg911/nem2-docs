# CatapultRestApiReference.NodeRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNodeInfo**](NodeRoutesApi.md#getNodeInfo) | **GET** /node/info | Get the node information
[**getNodeTime**](NodeRoutesApi.md#getNodeTime) | **GET** /node/time | Get the node time


<a name="getNodeInfo"></a>
# **getNodeInfo**
> NodeInfoDTO getNodeInfo()

Get the node information

Supplies additional information about the application running on a node. 

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.NodeRoutesApi();
apiInstance.getNodeInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**NodeInfoDTO**](NodeInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNodeTime"></a>
# **getNodeTime**
> NodeTimeDTO getNodeTime()

Get the node time

Supplies additional information about the application running on a node.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.NodeRoutesApi();
apiInstance.getNodeTime().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**NodeTimeDTO**](NodeTimeDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

