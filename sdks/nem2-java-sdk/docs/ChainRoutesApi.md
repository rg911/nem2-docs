# ChainRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockchainHeight**](ChainRoutesApi.md#getBlockchainHeight) | **GET** /chain/height | Get the current height of the chain
[**getBlockchainScore**](ChainRoutesApi.md#getBlockchainScore) | **GET** /chain/score | Get the current score of the chain


<a name="getBlockchainHeight"></a>
# **getBlockchainHeight**
> HeightInfoDTO getBlockchainHeight()

Get the current height of the chain

Returns the current height of the blockchain.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ChainRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    ChainRoutesApi apiInstance = new ChainRoutesApi(defaultClient);
    try {
      HeightInfoDTO result = apiInstance.getBlockchainHeight();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ChainRoutesApi#getBlockchainHeight");
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

[**HeightInfoDTO**](HeightInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

<a name="getBlockchainScore"></a>
# **getBlockchainScore**
> BlockchainScoreDTO getBlockchainScore()

Get the current score of the chain

Gets the current score of the blockchain. The higher the score, the better the chain. During synchronization, nodes try to get the best blockchain in the network.  The score for a block is derived from its difficulty and the time (in seconds) that has elapsed since the last block:      block score &#x3D; difficulty − time elapsed since last block 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ChainRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    ChainRoutesApi apiInstance = new ChainRoutesApi(defaultClient);
    try {
      BlockchainScoreDTO result = apiInstance.getBlockchainScore();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ChainRoutesApi#getBlockchainScore");
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

[**BlockchainScoreDTO**](BlockchainScoreDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

