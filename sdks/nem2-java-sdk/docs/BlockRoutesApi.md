# BlockRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockByHeight**](BlockRoutesApi.md#getBlockByHeight) | **GET** /block/{height} | Get block information
[**getBlockReceipts**](BlockRoutesApi.md#getBlockReceipts) | **GET** /block/{height}/receipts | Get receipts from a block
[**getBlockTransactions**](BlockRoutesApi.md#getBlockTransactions) | **GET** /block/{height}/transactions | Get transactions from a block
[**getBlocksByHeightWithLimit**](BlockRoutesApi.md#getBlocksByHeightWithLimit) | **GET** /blocks/{height}/limit/{limit} | Get blocks information
[**getMerkleReceipts**](BlockRoutesApi.md#getMerkleReceipts) | **GET** /block/{height}/receipt/{hash}/merkle | Get the merkle path for a given a receipt statement hash and block
[**getMerkleTransaction**](BlockRoutesApi.md#getMerkleTransaction) | **GET** /block/{height}/transaction/{hash}/merkle | Get the merkle path for a given a transaction and block


<a name="getBlockByHeight"></a>
# **getBlockByHeight**
> BlockInfoDTO getBlockByHeight(height)

Get block information

Gets a block from the chain that has the given height.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BlockRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    BlockRoutesApi apiInstance = new BlockRoutesApi(defaultClient);
    Long height = 56L; // Long | The height of the block.
    try {
      BlockInfoDTO result = apiInstance.getBlockByHeight(height);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockRoutesApi#getBlockByHeight");
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
 **height** | **Long**| The height of the block. |

### Return type

[**BlockInfoDTO**](BlockInfoDTO.md)

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

<a name="getBlockReceipts"></a>
# **getBlockReceipts**
> StatementsDTO getBlockReceipts(height)

Get receipts from a block

Returns the receipts linked to a block.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BlockRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    BlockRoutesApi apiInstance = new BlockRoutesApi(defaultClient);
    Long height = 56L; // Long | The height of the block.
    try {
      StatementsDTO result = apiInstance.getBlockReceipts(height);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockRoutesApi#getBlockReceipts");
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
 **height** | **Long**| The height of the block. |

### Return type

[**StatementsDTO**](StatementsDTO.md)

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

<a name="getBlockTransactions"></a>
# **getBlockTransactions**
> List&lt;TransactionInfoDTO&gt; getBlockTransactions(height, pageSize, id)

Get transactions from a block

Returns an array of transactions included in a block for a given block height.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BlockRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    BlockRoutesApi apiInstance = new BlockRoutesApi(defaultClient);
    Long height = 56L; // Long | The height of the block.
    Integer pageSize = 10; // Integer | The number of transactions to return for each request.
    String id = "id_example"; // String | The transaction id up to which transactions are returned.
    try {
      List<TransactionInfoDTO> result = apiInstance.getBlockTransactions(height, pageSize, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockRoutesApi#getBlockTransactions");
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
 **height** | **Long**| The height of the block. |
 **pageSize** | **Integer**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned. | [optional]

### Return type

[**List&lt;TransactionInfoDTO&gt;**](TransactionInfoDTO.md)

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

<a name="getBlocksByHeightWithLimit"></a>
# **getBlocksByHeightWithLimit**
> List&lt;BlockInfoDTO&gt; getBlocksByHeightWithLimit(height, limit)

Get blocks information

Gets up to limit number of blocks after given block height.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BlockRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    BlockRoutesApi apiInstance = new BlockRoutesApi(defaultClient);
    Long height = 56L; // Long | The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.
    Integer limit = 56; // Integer | The number of blocks to be returned.
    try {
      List<BlockInfoDTO> result = apiInstance.getBlocksByHeightWithLimit(height, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockRoutesApi#getBlocksByHeightWithLimit");
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
 **height** | **Long**| The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead. |
 **limit** | **Integer**| The number of blocks to be returned. | [enum: 25, 50, 75, 100]

### Return type

[**List&lt;BlockInfoDTO&gt;**](BlockInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |
**409** | invalid argument |  -  |

<a name="getMerkleReceipts"></a>
# **getMerkleReceipts**
> MerkleProofInfoDTO getMerkleReceipts(height, hash)

Get the merkle path for a given a receipt statement hash and block

Returns the merkle path for a receipt statement or resolution linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BlockRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    BlockRoutesApi apiInstance = new BlockRoutesApi(defaultClient);
    Long height = 56L; // Long | The height of the block.
    String hash = "hash_example"; // String | The hash of the receipt statement or resolution.
    try {
      MerkleProofInfoDTO result = apiInstance.getMerkleReceipts(height, hash);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockRoutesApi#getMerkleReceipts");
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
 **height** | **Long**| The height of the block. |
 **hash** | **String**| The hash of the receipt statement or resolution. |

### Return type

[**MerkleProofInfoDTO**](MerkleProofInfoDTO.md)

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

<a name="getMerkleTransaction"></a>
# **getMerkleTransaction**
> MerkleProofInfoDTO getMerkleTransaction(height, hash)

Get the merkle path for a given a transaction and block

Returns the merkle path for a transaction included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BlockRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    BlockRoutesApi apiInstance = new BlockRoutesApi(defaultClient);
    Long height = 56L; // Long | The height of the block.
    String hash = "hash_example"; // String | The hash of the transaction.
    try {
      MerkleProofInfoDTO result = apiInstance.getMerkleTransaction(height, hash);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlockRoutesApi#getMerkleTransaction");
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
 **height** | **Long**| The height of the block. |
 **hash** | **String**| The hash of the transaction. |

### Return type

[**MerkleProofInfoDTO**](MerkleProofInfoDTO.md)

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

