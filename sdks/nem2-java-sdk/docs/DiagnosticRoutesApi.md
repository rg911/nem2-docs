# DiagnosticRoutesApi

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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DiagnosticRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DiagnosticRoutesApi apiInstance = new DiagnosticRoutesApi(defaultClient);
    try {
      StorageInfoDTO result = apiInstance.getDiagnosticStorage();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DiagnosticRoutesApi#getDiagnosticStorage");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

<a name="getServerInfo"></a>
# **getServerInfo**
> ServerDTO getServerInfo()

Get the version of the running rest component

Returns the version of the running rest component.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DiagnosticRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DiagnosticRoutesApi apiInstance = new DiagnosticRoutesApi(defaultClient);
    try {
      ServerDTO result = apiInstance.getServerInfo();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DiagnosticRoutesApi#getServerInfo");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

