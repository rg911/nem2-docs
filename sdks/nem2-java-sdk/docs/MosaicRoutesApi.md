# MosaicRoutesApi

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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.MosaicRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    MosaicRoutesApi apiInstance = new MosaicRoutesApi(defaultClient);
    String mosaicId = "mosaicId_example"; // String | The mosaic identifier.
    try {
      MosaicInfoDTO result = apiInstance.getMosaic(mosaicId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MosaicRoutesApi#getMosaic");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |
**404** | resource not found |  -  |
**409** | invalid argument |  -  |

<a name="getMosaics"></a>
# **getMosaics**
> List&lt;MosaicInfoDTO&gt; getMosaics(mosaicIds)

Get mosaics information for an array of mosaics

Gets an array of mosaic definition.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.MosaicRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    MosaicRoutesApi apiInstance = new MosaicRoutesApi(defaultClient);
    MosaicIds mosaicIds = new MosaicIds(); // MosaicIds | 
    try {
      List<MosaicInfoDTO> result = apiInstance.getMosaics(mosaicIds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MosaicRoutesApi#getMosaics");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mosaicIds** | [**MosaicIds**](MosaicIds.md)|  |

### Return type

[**List&lt;MosaicInfoDTO&gt;**](MosaicInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |
**400** | invalid content |  -  |
**409** | invalid argument |  -  |

<a name="getMosaicsNames"></a>
# **getMosaicsNames**
> List&lt;MosaicNamesDTO&gt; getMosaicsNames(mosaicIds)

Get readable names for a set of mosaics

Returns friendly names for mosaics.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.MosaicRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    MosaicRoutesApi apiInstance = new MosaicRoutesApi(defaultClient);
    MosaicIds mosaicIds = new MosaicIds(); // MosaicIds | 
    try {
      List<MosaicNamesDTO> result = apiInstance.getMosaicsNames(mosaicIds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MosaicRoutesApi#getMosaicsNames");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mosaicIds** | [**MosaicIds**](MosaicIds.md)|  |

### Return type

[**List&lt;MosaicNamesDTO&gt;**](MosaicNamesDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |
**400** | invalid content |  -  |
**409** | invalid argument |  -  |

