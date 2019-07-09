# CatapultRestApiReference.MosaicRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMosaic**](MosaicRoutesApi.md#getMosaic) | **GET** /mosaic/{mosaicId} | Get mosaic information
[**getMosaics**](MosaicRoutesApi.md#getMosaics) | **POST** /mosaic | Get mosaics information for an array of mosaics
[**getMosaicsNames**](MosaicRoutesApi.md#getMosaicsNames) | **POST** /mosaic/names | Get readable names for a set of mosaics


<a name="getMosaic"></a>
# **getMosaic**
> MosaicInfoDTO getMosaic(mosaicId)

Get mosaic information

Gets the mosaic definition for a given mosaicId.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.MosaicRoutesApi();

let mosaicId = "mosaicId_example"; // String | The mosaic identifier.

apiInstance.getMosaic(mosaicId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mosaicId** | **String**| The mosaic identifier. | 

### Return type

[**MosaicInfoDTO**](MosaicInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMosaics"></a>
# **getMosaics**
> [MosaicInfoDTO] getMosaics(mosaicIds)

Get mosaics information for an array of mosaics

Gets an array of mosaic definition.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.MosaicRoutesApi();

let mosaicIds = new CatapultRestApiReference.MosaicIds(); // MosaicIds | 

apiInstance.getMosaics(mosaicIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mosaicIds** | [**MosaicIds**](MosaicIds.md)|  | 

### Return type

[**[MosaicInfoDTO]**](MosaicInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMosaicsNames"></a>
# **getMosaicsNames**
> [MosaicNamesDTO] getMosaicsNames(mosaicIds)

Get readable names for a set of mosaics

Returns friendly names for mosaics.

### Example
```javascript
import CatapultRestApiReference from 'catapult_rest_api_reference';

let apiInstance = new CatapultRestApiReference.MosaicRoutesApi();

let mosaicIds = new CatapultRestApiReference.MosaicIds(); // MosaicIds | 

apiInstance.getMosaicsNames(mosaicIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mosaicIds** | [**MosaicIds**](MosaicIds.md)|  | 

### Return type

[**[MosaicNamesDTO]**](MosaicNamesDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

