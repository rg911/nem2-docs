# AccountRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountInfo**](AccountRoutesApi.md#getAccountInfo) | **GET** /account/{accountId} | Get account information
[**getAccountMultisig**](AccountRoutesApi.md#getAccountMultisig) | **GET** /account/{accountId}/multisig | Get multisig account information
[**getAccountMultisigGraph**](AccountRoutesApi.md#getAccountMultisigGraph) | **GET** /account/{accountId}/multisig/graph | Get multisig account graph information
[**getAccountProperties**](AccountRoutesApi.md#getAccountProperties) | **GET** /account/{accountId}/properties/ | Get account configurable properties information
[**getAccountPropertiesFromAccounts**](AccountRoutesApi.md#getAccountPropertiesFromAccounts) | **POST** /account/properties | Get account properties for given array of addresses
[**getAccountsInfo**](AccountRoutesApi.md#getAccountsInfo) | **POST** /account | Get accounts information
[**getAccountsNames**](AccountRoutesApi.md#getAccountsNames) | **POST** /account/names | Get readable names for a set of accountIds.
[**incomingTransactions**](AccountRoutesApi.md#incomingTransactions) | **GET** /account/{publicKey}/transactions/incoming | Get incoming transactions
[**outgoingTransactions**](AccountRoutesApi.md#outgoingTransactions) | **GET** /account/{publicKey}/transactions/outgoing | Get outgoing transactions
[**partialTransactions**](AccountRoutesApi.md#partialTransactions) | **GET** /account/{publicKey}/transactions/partial | Get aggregate bonded transactions information
[**transactions**](AccountRoutesApi.md#transactions) | **GET** /account/{publicKey}/transactions | Get confirmed transactions
[**unconfirmedTransactions**](AccountRoutesApi.md#unconfirmedTransactions) | **GET** /account/{publicKey}/transactions/unconfirmed | Get unconfirmed transactions


<a name="getAccountInfo"></a>
# **getAccountInfo**
> AccountInfoDTO getAccountInfo(accountId)

Get account information

Returns the account information.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    String accountId = "accountId_example"; // String | The public key or address of the account.
    try {
      AccountInfoDTO result = apiInstance.getAccountInfo(accountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#getAccountInfo");
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
 **accountId** | **String**| The public key or address of the account. |

### Return type

[**AccountInfoDTO**](AccountInfoDTO.md)

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

<a name="getAccountMultisig"></a>
# **getAccountMultisig**
> MultisigAccountInfoDTO getAccountMultisig(accountId)

Get multisig account information

Returns the multisig account information.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    String accountId = "accountId_example"; // String | The public key or address of the account.
    try {
      MultisigAccountInfoDTO result = apiInstance.getAccountMultisig(accountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#getAccountMultisig");
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
 **accountId** | **String**| The public key or address of the account. |

### Return type

[**MultisigAccountInfoDTO**](MultisigAccountInfoDTO.md)

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

<a name="getAccountMultisigGraph"></a>
# **getAccountMultisigGraph**
> List&lt;MultisigAccountGraphInfoDTO&gt; getAccountMultisigGraph(accountId)

Get multisig account graph information

Returns the multisig account graph.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    String accountId = "accountId_example"; // String | The public key or address of the account.
    try {
      List<MultisigAccountGraphInfoDTO> result = apiInstance.getAccountMultisigGraph(accountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#getAccountMultisigGraph");
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
 **accountId** | **String**| The public key or address of the account. |

### Return type

[**List&lt;MultisigAccountGraphInfoDTO&gt;**](MultisigAccountGraphInfoDTO.md)

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

<a name="getAccountProperties"></a>
# **getAccountProperties**
> AccountPropertiesInfoDTO getAccountProperties(accountId)

Get account configurable properties information

Returns the configurable properties for a given account.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    String accountId = "accountId_example"; // String | The public key or address of the account.
    try {
      AccountPropertiesInfoDTO result = apiInstance.getAccountProperties(accountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#getAccountProperties");
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
 **accountId** | **String**| The public key or address of the account. |

### Return type

[**AccountPropertiesInfoDTO**](AccountPropertiesInfoDTO.md)

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

<a name="getAccountPropertiesFromAccounts"></a>
# **getAccountPropertiesFromAccounts**
> List&lt;AccountPropertiesInfoDTO&gt; getAccountPropertiesFromAccounts(accountIds)

Get account properties for given array of addresses

Returns the configurable properties for a given array of addresses.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    AccountIds accountIds = new AccountIds(); // AccountIds | 
    try {
      List<AccountPropertiesInfoDTO> result = apiInstance.getAccountPropertiesFromAccounts(accountIds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#getAccountPropertiesFromAccounts");
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
 **accountIds** | [**AccountIds**](AccountIds.md)|  |

### Return type

[**List&lt;AccountPropertiesInfoDTO&gt;**](AccountPropertiesInfoDTO.md)

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

<a name="getAccountsInfo"></a>
# **getAccountsInfo**
> List&lt;AccountInfoDTO&gt; getAccountsInfo(accountIds)

Get accounts information

Returns the account information for an array of accounts.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    AccountIds accountIds = new AccountIds(); // AccountIds | 
    try {
      List<AccountInfoDTO> result = apiInstance.getAccountsInfo(accountIds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#getAccountsInfo");
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
 **accountIds** | [**AccountIds**](AccountIds.md)|  |

### Return type

[**List&lt;AccountInfoDTO&gt;**](AccountInfoDTO.md)

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

<a name="getAccountsNames"></a>
# **getAccountsNames**
> List&lt;AccountNamesDTO&gt; getAccountsNames(accountIds)

Get readable names for a set of accountIds.

Returns friendly names for accounts.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    AccountIds accountIds = new AccountIds(); // AccountIds | 
    try {
      List<AccountNamesDTO> result = apiInstance.getAccountsNames(accountIds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#getAccountsNames");
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
 **accountIds** | [**AccountIds**](AccountIds.md)|  |

### Return type

[**List&lt;AccountNamesDTO&gt;**](AccountNamesDTO.md)

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

<a name="incomingTransactions"></a>
# **incomingTransactions**
> List&lt;TransactionInfoDTO&gt; incomingTransactions(publicKey, pageSize, id, ordering)

Get incoming transactions

Gets an array of incoming transactions. A transaction is said to be incoming with respect to an account if the account is the recipient of the transaction. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    String publicKey = "publicKey_example"; // String | The public key of the account.
    Integer pageSize = 10; // Integer | The number of transactions to return for each request.
    String id = "id_example"; // String | The transaction id up to which transactions are returned. 
    String ordering = "\"-id\""; // String | The ordering criteria: * -id - Descending order by id. * id - Ascending order by id. 
    try {
      List<TransactionInfoDTO> result = apiInstance.incomingTransactions(publicKey, pageSize, id, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#incomingTransactions");
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
 **publicKey** | **String**| The public key of the account. |
 **pageSize** | **Integer**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional]
 **ordering** | **String**| The ordering criteria: * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to &quot;-id&quot;]

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
**409** | invalid argument |  -  |

<a name="outgoingTransactions"></a>
# **outgoingTransactions**
> List&lt;TransactionInfoDTO&gt; outgoingTransactions(publicKey, pageSize, id, ordering)

Get outgoing transactions

Gets an array of outgoing transactions. A transaction is said to be outgoing with respect to an account if the account is the sender of the transaction.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    String publicKey = "publicKey_example"; // String | The public key of the account.
    Integer pageSize = 10; // Integer | The number of transactions to return for each request.
    String id = "id_example"; // String | The transaction id up to which transactions are returned. 
    String ordering = "\"-id\""; // String | The ordering criteria: * -id - Descending order by id. * id - Ascending order by id. 
    try {
      List<TransactionInfoDTO> result = apiInstance.outgoingTransactions(publicKey, pageSize, id, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#outgoingTransactions");
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
 **publicKey** | **String**| The public key of the account. |
 **pageSize** | **Integer**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional]
 **ordering** | **String**| The ordering criteria: * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to &quot;-id&quot;]

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
**409** | invalid argument |  -  |

<a name="partialTransactions"></a>
# **partialTransactions**
> List&lt;TransactionInfoDTO&gt; partialTransactions(publicKey, pageSize, id, ordering)

Get aggregate bonded transactions information

Gets an array of aggregate bonded transactions where the account is the sender or requires to cosign the transaction. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    String publicKey = "publicKey_example"; // String | The public key of the account.
    Integer pageSize = 10; // Integer | The number of transactions to return for each request.
    String id = "id_example"; // String | The transaction id up to which transactions are returned. 
    String ordering = "\"-id\""; // String | The ordering criteria. * -id - Descending order by id. * id - Ascending order by id. 
    try {
      List<TransactionInfoDTO> result = apiInstance.partialTransactions(publicKey, pageSize, id, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#partialTransactions");
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
 **publicKey** | **String**| The public key of the account. |
 **pageSize** | **Integer**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional]
 **ordering** | **String**| The ordering criteria. * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to &quot;-id&quot;]

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
**409** | invalid argument |  -  |

<a name="transactions"></a>
# **transactions**
> List&lt;TransactionInfoDTO&gt; transactions(publicKey, pageSize, id, ordering)

Get confirmed transactions

Gets an array of transactions for which an account is the sender or receiver.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    String publicKey = "publicKey_example"; // String | The public key of the account.
    Integer pageSize = 10; // Integer | The number of transactions to return for each request.
    String id = "id_example"; // String | The transaction id up to which transactions are returned. 
    String ordering = "\"-id\""; // String | The ordering criteria: * -id - Descending order by id. * id - Ascending order by id. 
    try {
      List<TransactionInfoDTO> result = apiInstance.transactions(publicKey, pageSize, id, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#transactions");
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
 **publicKey** | **String**| The public key of the account. |
 **pageSize** | **Integer**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional]
 **ordering** | **String**| The ordering criteria: * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to &quot;-id&quot;]

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
**409** | invalid argument |  -  |

<a name="unconfirmedTransactions"></a>
# **unconfirmedTransactions**
> List&lt;TransactionInfoDTO&gt; unconfirmedTransactions(publicKey, pageSize, id, ordering)

Get unconfirmed transactions

Gets the array of transactions not included in a block where an account is the sender or receiver. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AccountRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AccountRoutesApi apiInstance = new AccountRoutesApi(defaultClient);
    String publicKey = "publicKey_example"; // String | The public key of the account.
    Integer pageSize = 10; // Integer | The number of transactions to return for each request.
    String id = "id_example"; // String | The transaction id up to which transactions are returned. 
    String ordering = "\"-id\""; // String | The ordering criteria. * -id - Descending order by id. * id - Ascending order by id. 
    try {
      List<TransactionInfoDTO> result = apiInstance.unconfirmedTransactions(publicKey, pageSize, id, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountRoutesApi#unconfirmedTransactions");
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
 **publicKey** | **String**| The public key of the account. |
 **pageSize** | **Integer**| The number of transactions to return for each request. | [optional] [default to 10]
 **id** | **String**| The transaction id up to which transactions are returned.  | [optional]
 **ordering** | **String**| The ordering criteria. * -id - Descending order by id. * id - Ascending order by id.  | [optional] [default to &quot;-id&quot;]

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
**409** | invalid argument |  -  |

