# openapi-java-client

Catapult REST API Reference
- API version: 0.7.15
  - Build date: 2019-06-20T19:56:23.892+01:00[Europe/London]

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)


*Automatically generated by the [OpenAPI Generator](https://openapi-generator.tech)*


## Requirements

Building the API client library requires:
1. Java 1.7+
2. Maven/Gradle

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>org.openapitools</groupId>
  <artifactId>openapi-java-client</artifactId>
  <version>0.7.15</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "org.openapitools:openapi-java-client:0.7.15"
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/openapi-java-client-0.7.15.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

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

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountRoutesApi* | [**getAccountInfo**](docs/AccountRoutesApi.md#getAccountInfo) | **GET** /account/{accountId} | Get account information
*AccountRoutesApi* | [**getAccountMultisig**](docs/AccountRoutesApi.md#getAccountMultisig) | **GET** /account/{accountId}/multisig | Get multisig account information
*AccountRoutesApi* | [**getAccountMultisigGraph**](docs/AccountRoutesApi.md#getAccountMultisigGraph) | **GET** /account/{accountId}/multisig/graph | Get multisig account graph information
*AccountRoutesApi* | [**getAccountProperties**](docs/AccountRoutesApi.md#getAccountProperties) | **GET** /account/{accountId}/properties/ | Get account configurable properties information
*AccountRoutesApi* | [**getAccountPropertiesFromAccounts**](docs/AccountRoutesApi.md#getAccountPropertiesFromAccounts) | **POST** /account/properties | Get account properties for given array of addresses
*AccountRoutesApi* | [**getAccountsInfo**](docs/AccountRoutesApi.md#getAccountsInfo) | **POST** /account | Get accounts information
*AccountRoutesApi* | [**getAccountsNames**](docs/AccountRoutesApi.md#getAccountsNames) | **POST** /account/names | Get readable names for a set of accountIds.
*AccountRoutesApi* | [**incomingTransactions**](docs/AccountRoutesApi.md#incomingTransactions) | **GET** /account/{publicKey}/transactions/incoming | Get incoming transactions
*AccountRoutesApi* | [**outgoingTransactions**](docs/AccountRoutesApi.md#outgoingTransactions) | **GET** /account/{publicKey}/transactions/outgoing | Get outgoing transactions
*AccountRoutesApi* | [**partialTransactions**](docs/AccountRoutesApi.md#partialTransactions) | **GET** /account/{publicKey}/transactions/partial | Get aggregate bonded transactions information
*AccountRoutesApi* | [**transactions**](docs/AccountRoutesApi.md#transactions) | **GET** /account/{publicKey}/transactions | Get confirmed transactions
*AccountRoutesApi* | [**unconfirmedTransactions**](docs/AccountRoutesApi.md#unconfirmedTransactions) | **GET** /account/{publicKey}/transactions/unconfirmed | Get unconfirmed transactions
*BlockRoutesApi* | [**getBlockByHeight**](docs/BlockRoutesApi.md#getBlockByHeight) | **GET** /block/{height} | Get block information
*BlockRoutesApi* | [**getBlockReceipts**](docs/BlockRoutesApi.md#getBlockReceipts) | **GET** /block/{height}/receipts | Get receipts from a block
*BlockRoutesApi* | [**getBlockTransactions**](docs/BlockRoutesApi.md#getBlockTransactions) | **GET** /block/{height}/transactions | Get transactions from a block
*BlockRoutesApi* | [**getBlocksByHeightWithLimit**](docs/BlockRoutesApi.md#getBlocksByHeightWithLimit) | **GET** /blocks/{height}/limit/{limit} | Get blocks information
*BlockRoutesApi* | [**getMerkleReceipts**](docs/BlockRoutesApi.md#getMerkleReceipts) | **GET** /block/{height}/receipt/{hash}/merkle | Get the merkle path for a given a receipt statement hash and block
*BlockRoutesApi* | [**getMerkleTransaction**](docs/BlockRoutesApi.md#getMerkleTransaction) | **GET** /block/{height}/transaction/{hash}/merkle | Get the merkle path for a given a transaction and block
*ChainRoutesApi* | [**getBlockchainHeight**](docs/ChainRoutesApi.md#getBlockchainHeight) | **GET** /chain/height | Get the current height of the chain
*ChainRoutesApi* | [**getBlockchainScore**](docs/ChainRoutesApi.md#getBlockchainScore) | **GET** /chain/score | Get the current score of the chain
*DiagnosticRoutesApi* | [**getDiagnosticStorage**](docs/DiagnosticRoutesApi.md#getDiagnosticStorage) | **GET** /diagnostic/storage | Get the storage information of the node
*DiagnosticRoutesApi* | [**getServerInfo**](docs/DiagnosticRoutesApi.md#getServerInfo) | **GET** /diagnostic/server | Get the version of the running rest component
*MosaicRoutesApi* | [**getMosaic**](docs/MosaicRoutesApi.md#getMosaic) | **GET** /mosaic/{mosaicId} | Get mosaic information
*MosaicRoutesApi* | [**getMosaics**](docs/MosaicRoutesApi.md#getMosaics) | **POST** /mosaic | Get mosaics information for an array of mosaics
*MosaicRoutesApi* | [**getMosaicsNames**](docs/MosaicRoutesApi.md#getMosaicsNames) | **POST** /mosaic/names | Get readable names for a set of mosaics
*NamespaceRoutesApi* | [**getNamespace**](docs/NamespaceRoutesApi.md#getNamespace) | **GET** /namespace/{namespaceId} | Get namespace information
*NamespaceRoutesApi* | [**getNamespacesFromAccount**](docs/NamespaceRoutesApi.md#getNamespacesFromAccount) | **GET** /account/{accountId}/namespaces | Get namespaces owned by an account
*NamespaceRoutesApi* | [**getNamespacesFromAccounts**](docs/NamespaceRoutesApi.md#getNamespacesFromAccounts) | **POST** /account/namespaces | Get namespaces for given array of addresses
*NamespaceRoutesApi* | [**getNamespacesNames**](docs/NamespaceRoutesApi.md#getNamespacesNames) | **POST** /namespace/names | Get readable names for a set of namespaces
*NetworkRoutesApi* | [**getNetworkType**](docs/NetworkRoutesApi.md#getNetworkType) | **GET** /network | Get the current network type of the chain
*NodeRoutesApi* | [**getNodeInfo**](docs/NodeRoutesApi.md#getNodeInfo) | **GET** /node/info | Get the node information
*NodeRoutesApi* | [**getNodeTime**](docs/NodeRoutesApi.md#getNodeTime) | **GET** /node/time | Get the node time
*TransactionRoutesApi* | [**announceCosignatureTransaction**](docs/TransactionRoutesApi.md#announceCosignatureTransaction) | **PUT** /transaction/cosignature | Announce a cosignature transaction
*TransactionRoutesApi* | [**announcePartialTransaction**](docs/TransactionRoutesApi.md#announcePartialTransaction) | **PUT** /transaction/partial | Announce an aggregate bonded transaction
*TransactionRoutesApi* | [**announceTransaction**](docs/TransactionRoutesApi.md#announceTransaction) | **PUT** /transaction | Announce a new transaction
*TransactionRoutesApi* | [**getTransaction**](docs/TransactionRoutesApi.md#getTransaction) | **GET** /transaction/{transactionId} | Get transaction information
*TransactionRoutesApi* | [**getTransactionStatus**](docs/TransactionRoutesApi.md#getTransactionStatus) | **GET** /transaction/{hash}/status | Get transaction status
*TransactionRoutesApi* | [**getTransactions**](docs/TransactionRoutesApi.md#getTransactions) | **POST** /transaction | Get transactions information
*TransactionRoutesApi* | [**getTransactionsStatuses**](docs/TransactionRoutesApi.md#getTransactionsStatuses) | **POST** /transaction/statuses | Get transactions status.


## Documentation for Models

 - [AccountDTO](docs/AccountDTO.md)
 - [AccountIds](docs/AccountIds.md)
 - [AccountInfoDTO](docs/AccountInfoDTO.md)
 - [AccountMetaDTO](docs/AccountMetaDTO.md)
 - [AccountNamesDTO](docs/AccountNamesDTO.md)
 - [AccountPropertiesDTO](docs/AccountPropertiesDTO.md)
 - [AccountPropertiesInfoDTO](docs/AccountPropertiesInfoDTO.md)
 - [AccountPropertyDTO](docs/AccountPropertyDTO.md)
 - [AccountPropertyTypeEnum](docs/AccountPropertyTypeEnum.md)
 - [AliasDTO](docs/AliasDTO.md)
 - [AliasTypeEnum](docs/AliasTypeEnum.md)
 - [AnnounceTransactionInfoDTO](docs/AnnounceTransactionInfoDTO.md)
 - [BlockDTO](docs/BlockDTO.md)
 - [BlockInfoDTO](docs/BlockInfoDTO.md)
 - [BlockMetaDTO](docs/BlockMetaDTO.md)
 - [BlockchainScoreDTO](docs/BlockchainScoreDTO.md)
 - [CommunicationTimestamps](docs/CommunicationTimestamps.md)
 - [Cosignature](docs/Cosignature.md)
 - [HeightInfoDTO](docs/HeightInfoDTO.md)
 - [MerklePathItem](docs/MerklePathItem.md)
 - [MerkleProofInfo](docs/MerkleProofInfo.md)
 - [MerkleProofInfoDTO](docs/MerkleProofInfoDTO.md)
 - [MosaicDTO](docs/MosaicDTO.md)
 - [MosaicDefinitionDTO](docs/MosaicDefinitionDTO.md)
 - [MosaicIds](docs/MosaicIds.md)
 - [MosaicInfoDTO](docs/MosaicInfoDTO.md)
 - [MosaicMetaDTO](docs/MosaicMetaDTO.md)
 - [MosaicNamesDTO](docs/MosaicNamesDTO.md)
 - [MosaicPropertyDTO](docs/MosaicPropertyDTO.md)
 - [MosaicPropertyIdEnum](docs/MosaicPropertyIdEnum.md)
 - [MultisigAccountGraphInfoDTO](docs/MultisigAccountGraphInfoDTO.md)
 - [MultisigAccountInfoDTO](docs/MultisigAccountInfoDTO.md)
 - [MultisigDTO](docs/MultisigDTO.md)
 - [MultisigModificationTypeEnum](docs/MultisigModificationTypeEnum.md)
 - [NamespaceDTO](docs/NamespaceDTO.md)
 - [NamespaceIds](docs/NamespaceIds.md)
 - [NamespaceInfoDTO](docs/NamespaceInfoDTO.md)
 - [NamespaceMetaDTO](docs/NamespaceMetaDTO.md)
 - [NamespaceNameDTO](docs/NamespaceNameDTO.md)
 - [NamespaceTypeEnum](docs/NamespaceTypeEnum.md)
 - [NetworkTypeDTO](docs/NetworkTypeDTO.md)
 - [NodeInfoDTO](docs/NodeInfoDTO.md)
 - [NodeTimeDTO](docs/NodeTimeDTO.md)
 - [ReceiptTypeEnum](docs/ReceiptTypeEnum.md)
 - [ResolutionEntryDTO](docs/ResolutionEntryDTO.md)
 - [ResolutionStatementDTO](docs/ResolutionStatementDTO.md)
 - [RolesTypeEnum](docs/RolesTypeEnum.md)
 - [ServerDTO](docs/ServerDTO.md)
 - [ServerInfoDTO](docs/ServerInfoDTO.md)
 - [SourceDTO](docs/SourceDTO.md)
 - [StatementsDTO](docs/StatementsDTO.md)
 - [StorageInfoDTO](docs/StorageInfoDTO.md)
 - [TransactionHashes](docs/TransactionHashes.md)
 - [TransactionIds](docs/TransactionIds.md)
 - [TransactionInfoDTO](docs/TransactionInfoDTO.md)
 - [TransactionMetaDTO](docs/TransactionMetaDTO.md)
 - [TransactionPayload](docs/TransactionPayload.md)
 - [TransactionStatementDTO](docs/TransactionStatementDTO.md)
 - [TransactionStatusDTO](docs/TransactionStatusDTO.md)


## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author


