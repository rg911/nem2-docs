

# ResolutionStatementDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **List&lt;Integer&gt;** |  | 
**unresolved** | **List&lt;Integer&gt;** |  | 
**resolutionEntries** | [**List&lt;ResolutionEntryDTO&gt;**](ResolutionEntryDTO.md) | The array of resolution entries linked to the unresolved namespaceId. It is an array instead of a single UInt64 field since within one block the resolution might change for different sources due to alias related transactions. | 



