version 0.0.0
# Package
Package meta-information
## Structure


|Key|Type|Required|Description|
|-|:-:|:-:|-|
|package|string|+|The package unique identifier in URI form which points to current version of package file|
|name|string|+|The original name of the package|
|version|string|-|The package version in a format it was originally specified|
|description|string|-|The textual description of the package|
|url|[urls](#urls)|-|The package homepage (website, online documentation or repository)|
|license|[license](./collection.md#license)|+|The package license|
|license-text|string|-|The package license text|
### urls
The URL or collection of URLs

Acceptable types: url:complex ,url:complex[]
### url:complex
The URL in one of acceptable formats

Acceptable types: url:uri ,url:typed 
### url:typed
The URL with type specified

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|url|[url:uri](#url:uri)|+|The URL in URI format|
|type|[url:type](#url:type)|-|The type of url|
## Example
```
{
    "package": "string",
    "name": "string",
    "version": "string",
    "description": "string",
    "url": {},
    "license": {},
    "license-text": "string"
}
```