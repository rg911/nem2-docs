# CatapultRestApiReference.ResolutionStatementDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | [**UInt64DTO**](UInt64DTO.md) |  | 
**unresolved** | [**UInt64DTO**](UInt64DTO.md) |  | 
**resolutionEntries** | [**[ResolutionEntryDTO]**](ResolutionEntryDTO.md) | The array of resolution entries linked to the unresolved namespaceId. It is an array instead of a single UInt64 field since within one block the resolution might change for different sources due to alias related transactions. | 


