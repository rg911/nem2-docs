# NodeRoutesApi

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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.NodeRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    NodeRoutesApi apiInstance = new NodeRoutesApi(defaultClient);
    try {
      NodeInfoDTO result = apiInstance.getNodeInfo();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRoutesApi#getNodeInfo");
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

[**NodeInfoDTO**](NodeInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

<a name="getNodeTime"></a>
# **getNodeTime**
> NodeTimeDTO getNodeTime()

Get the node time

Gets the node time at the moment the reply was sent and received.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.NodeRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    NodeRoutesApi apiInstance = new NodeRoutesApi(defaultClient);
    try {
      NodeTimeDTO result = apiInstance.getNodeTime();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRoutesApi#getNodeTime");
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

[**NodeTimeDTO**](NodeTimeDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

