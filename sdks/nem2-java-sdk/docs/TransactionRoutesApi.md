# TransactionRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**announceCosignatureTransaction**](TransactionRoutesApi.md#announceCosignatureTransaction) | **PUT** /transaction/cosignature | Announce a cosignature transaction
[**announcePartialTransaction**](TransactionRoutesApi.md#announcePartialTransaction) | **PUT** /transaction/partial | Announce an aggregate bonded transaction
[**announceTransaction**](TransactionRoutesApi.md#announceTransaction) | **PUT** /transaction | Announce a new transaction
[**getTransaction**](TransactionRoutesApi.md#getTransaction) | **GET** /transaction/{transactionId} | Get transaction information
[**getTransactionStatus**](TransactionRoutesApi.md#getTransactionStatus) | **GET** /transaction/{hash}/status | Get transaction status
[**getTransactions**](TransactionRoutesApi.md#getTransactions) | **POST** /transaction | Get transactions information
[**getTransactionsStatuses**](TransactionRoutesApi.md#getTransactionsStatuses) | **POST** /transaction/statuses | Get transactions status.


<a name="announceCosignatureTransaction"></a>
# **announceCosignatureTransaction**
> AnnounceTransactionInfoDTO announceCosignatureTransaction(cosignature)

Announce a cosignature transaction

Announces a cosignature transaction to the network.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    TransactionRoutesApi apiInstance = new TransactionRoutesApi(defaultClient);
    Cosignature cosignature = new Cosignature(); // Cosignature | 
    try {
      AnnounceTransactionInfoDTO result = apiInstance.announceCosignatureTransaction(cosignature);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionRoutesApi#announceCosignatureTransaction");
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
 **cosignature** | [**Cosignature**](Cosignature.md)|  |

### Return type

[**AnnounceTransactionInfoDTO**](AnnounceTransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | success |  -  |
**400** | invalid content |  -  |
**409** | invalid argument |  -  |

<a name="announcePartialTransaction"></a>
# **announcePartialTransaction**
> AnnounceTransactionInfoDTO announcePartialTransaction(transactionPayload)

Announce an aggregate bonded transaction

Announces an aggregate bonded transaction to the network.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    TransactionRoutesApi apiInstance = new TransactionRoutesApi(defaultClient);
    TransactionPayload transactionPayload = new TransactionPayload(); // TransactionPayload | 
    try {
      AnnounceTransactionInfoDTO result = apiInstance.announcePartialTransaction(transactionPayload);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionRoutesApi#announcePartialTransaction");
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
 **transactionPayload** | [**TransactionPayload**](TransactionPayload.md)|  |

### Return type

[**AnnounceTransactionInfoDTO**](AnnounceTransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | success |  -  |
**400** | invalid content |  -  |
**409** | invalid argument |  -  |

<a name="announceTransaction"></a>
# **announceTransaction**
> AnnounceTransactionInfoDTO announceTransaction(transactionPayload)

Announce a new transaction

Announces a transaction to the network. It is recommended to use the NEM2-SDK to announce transactions as they should be serialized. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    TransactionRoutesApi apiInstance = new TransactionRoutesApi(defaultClient);
    TransactionPayload transactionPayload = new TransactionPayload(); // TransactionPayload | 
    try {
      AnnounceTransactionInfoDTO result = apiInstance.announceTransaction(transactionPayload);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionRoutesApi#announceTransaction");
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
 **transactionPayload** | [**TransactionPayload**](TransactionPayload.md)|  |

### Return type

[**AnnounceTransactionInfoDTO**](AnnounceTransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | success |  -  |
**400** | invalid content |  -  |
**409** | invalid argument |  -  |

<a name="getTransaction"></a>
# **getTransaction**
> TransactionInfoDTO getTransaction(transactionId)

Get transaction information

Returns transaction information given a transactionId or hash.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    TransactionRoutesApi apiInstance = new TransactionRoutesApi(defaultClient);
    String transactionId = "transactionId_example"; // String | The transaction id or hash.
    try {
      TransactionInfoDTO result = apiInstance.getTransaction(transactionId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionRoutesApi#getTransaction");
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
 **transactionId** | **String**| The transaction id or hash. |

### Return type

[**TransactionInfoDTO**](TransactionInfoDTO.md)

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

<a name="getTransactionStatus"></a>
# **getTransactionStatus**
> TransactionStatusDTO getTransactionStatus(hash)

Get transaction status

Returns the transaction status for a given hash.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    TransactionRoutesApi apiInstance = new TransactionRoutesApi(defaultClient);
    String hash = "hash_example"; // String | The transaction hash.
    try {
      TransactionStatusDTO result = apiInstance.getTransactionStatus(hash);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionRoutesApi#getTransactionStatus");
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
 **hash** | **String**| The transaction hash. |

### Return type

[**TransactionStatusDTO**](TransactionStatusDTO.md)

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

<a name="getTransactions"></a>
# **getTransactions**
> List&lt;TransactionInfoDTO&gt; getTransactions(transactionIds)

Get transactions information

Returns transactions information for a given array of transactionIds.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    TransactionRoutesApi apiInstance = new TransactionRoutesApi(defaultClient);
    TransactionIds transactionIds = new TransactionIds(); // TransactionIds | 
    try {
      List<TransactionInfoDTO> result = apiInstance.getTransactions(transactionIds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionRoutesApi#getTransactions");
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
 **transactionIds** | [**TransactionIds**](TransactionIds.md)|  |

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
**400** | invalid content |  -  |
**409** | invalid argument |  -  |

<a name="getTransactionsStatuses"></a>
# **getTransactionsStatuses**
> List&lt;TransactionStatusDTO&gt; getTransactionsStatuses(transactionHashes)

Get transactions status.

Returns an array of transaction statuses for a given array of transaction hashes.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    TransactionRoutesApi apiInstance = new TransactionRoutesApi(defaultClient);
    TransactionHashes transactionHashes = new TransactionHashes(); // TransactionHashes | 
    try {
      List<TransactionStatusDTO> result = apiInstance.getTransactionsStatuses(transactionHashes);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionRoutesApi#getTransactionsStatuses");
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
 **transactionHashes** | [**TransactionHashes**](TransactionHashes.md)|  |

### Return type

[**List&lt;TransactionStatusDTO&gt;**](TransactionStatusDTO.md)

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

