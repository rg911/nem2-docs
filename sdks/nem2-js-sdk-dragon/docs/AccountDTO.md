# CatapultRestApiReference.AccountDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | The account unique address in hexadecimal.  | 
**addressHeight** | [**UInt64DTO**](UInt64DTO.md) |  | 
**publicKey** | **String** | The public key of an account can be used to verify signatures of the account. Only accounts that have already published a transaction have a public key assigned to the account. Otherwise, the field is null.  | 
**publicKeyHeight** | [**UInt64DTO**](UInt64DTO.md) |  | 
**mosaics** | [**[MosaicDTO]**](MosaicDTO.md) | The list of mosaics the account owns. The amount is represented in absolute amount. Thus a balance of 123456789 for a mosaic with divisibility 6 (absolute) means the account owns 123.456789 instead.  | 
**importance** | [**UInt64DTO**](UInt64DTO.md) |  | 
**importanceHeight** | [**UInt64DTO**](UInt64DTO.md) |  | 


