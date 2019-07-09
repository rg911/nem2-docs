# CatapultRestApiReference.MultisigDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | The account public key. | 
**accountAddress** | **String** | The account address in hexadecimal. | [optional] 
**minApproval** | **Number** | The number of signatures needed to approve a transaction. | 
**minRemoval** | **Number** | The number of signatures needed to remove a cosignatory. | 
**cosignatories** | **[String]** | The array of public keys of the cosignatory accounts. | 
**multisigAccounts** | **[String]** | The array of multisig accounts where the account is cosignatory. | 


