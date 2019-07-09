# NetworkRoutesApi

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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.NetworkRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    NetworkRoutesApi apiInstance = new NetworkRoutesApi(defaultClient);
    try {
      NetworkTypeDTO result = apiInstance.getNetworkType();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NetworkRoutesApi#getNetworkType");
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

[**NetworkTypeDTO**](NetworkTypeDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

