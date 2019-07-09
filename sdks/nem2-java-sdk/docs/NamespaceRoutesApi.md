# NamespaceRoutesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNamespace**](NamespaceRoutesApi.md#getNamespace) | **GET** /namespace/{namespaceId} | Get namespace information
[**getNamespacesFromAccount**](NamespaceRoutesApi.md#getNamespacesFromAccount) | **GET** /account/{accountId}/namespaces | Get namespaces owned by an account
[**getNamespacesFromAccounts**](NamespaceRoutesApi.md#getNamespacesFromAccounts) | **POST** /account/namespaces | Get namespaces for given array of addresses
[**getNamespacesNames**](NamespaceRoutesApi.md#getNamespacesNames) | **POST** /namespace/names | Get readable names for a set of namespaces


<a name="getNamespace"></a>
# **getNamespace**
> NamespaceInfoDTO getNamespace(namespaceId)

Get namespace information

Gets the namespace for a given namespaceId.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.NamespaceRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    NamespaceRoutesApi apiInstance = new NamespaceRoutesApi(defaultClient);
    String namespaceId = "namespaceId_example"; // String | The namespace identifier.
    try {
      NamespaceInfoDTO result = apiInstance.getNamespace(namespaceId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NamespaceRoutesApi#getNamespace");
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
 **namespaceId** | **String**| The namespace identifier. |

### Return type

[**NamespaceInfoDTO**](NamespaceInfoDTO.md)

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

<a name="getNamespacesFromAccount"></a>
# **getNamespacesFromAccount**
> List&lt;NamespaceInfoDTO&gt; getNamespacesFromAccount(accountId, pageSize, id)

Get namespaces owned by an account

Gets an array of namespaces for a given account address.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.NamespaceRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    NamespaceRoutesApi apiInstance = new NamespaceRoutesApi(defaultClient);
    String accountId = "accountId_example"; // String | The address or public key of the account.
    Integer pageSize = 56; // Integer | The number of namespaces to return.
    String id = "id_example"; // String | The namespace id up to which namespace objects are returned.
    try {
      List<NamespaceInfoDTO> result = apiInstance.getNamespacesFromAccount(accountId, pageSize, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NamespaceRoutesApi#getNamespacesFromAccount");
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
 **accountId** | **String**| The address or public key of the account. |
 **pageSize** | **Integer**| The number of namespaces to return. | [optional]
 **id** | **String**| The namespace id up to which namespace objects are returned. | [optional]

### Return type

[**List&lt;NamespaceInfoDTO&gt;**](NamespaceInfoDTO.md)

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

<a name="getNamespacesFromAccounts"></a>
# **getNamespacesFromAccounts**
> List&lt;NamespaceInfoDTO&gt; getNamespacesFromAccounts(accountIds, pageSize, id)

Get namespaces for given array of addresses

Gets namespaces for a given array of addresses.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.NamespaceRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    NamespaceRoutesApi apiInstance = new NamespaceRoutesApi(defaultClient);
    AccountIds accountIds = new AccountIds(); // AccountIds | 
    Integer pageSize = 56; // Integer | The number of namespaces to return.
    String id = "id_example"; // String | The namespace id up to which namespace objects are returned.
    try {
      List<NamespaceInfoDTO> result = apiInstance.getNamespacesFromAccounts(accountIds, pageSize, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NamespaceRoutesApi#getNamespacesFromAccounts");
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
 **pageSize** | **Integer**| The number of namespaces to return. | [optional]
 **id** | **String**| The namespace id up to which namespace objects are returned. | [optional]

### Return type

[**List&lt;NamespaceInfoDTO&gt;**](NamespaceInfoDTO.md)

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

<a name="getNamespacesNames"></a>
# **getNamespacesNames**
> List&lt;NamespaceNameDTO&gt; getNamespacesNames(namespaceIds)

Get readable names for a set of namespaces

Returns friendly names for namespaces.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.NamespaceRoutesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    NamespaceRoutesApi apiInstance = new NamespaceRoutesApi(defaultClient);
    NamespaceIds namespaceIds = new NamespaceIds(); // NamespaceIds | 
    try {
      List<NamespaceNameDTO> result = apiInstance.getNamespacesNames(namespaceIds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NamespaceRoutesApi#getNamespacesNames");
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
 **namespaceIds** | [**NamespaceIds**](NamespaceIds.md)|  |

### Return type

[**List&lt;NamespaceNameDTO&gt;**](NamespaceNameDTO.md)

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

