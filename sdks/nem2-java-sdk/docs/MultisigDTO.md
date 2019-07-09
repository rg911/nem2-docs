

# MultisigDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | The account public key. | 
**accountAddress** | **String** | The account address in hexadecimal. |  [optional]
**minApproval** | **Integer** | The number of signatures needed to approve a transaction. | 
**minRemoval** | **Integer** | The number of signatures needed to remove a cosignatory. | 
**cosignatories** | **List&lt;String&gt;** | The array of public keys of the cosignatory accounts. | 
**multisigAccounts** | **List&lt;String&gt;** | The array of multisig accounts where the account is cosignatory. | 



