version 0.0.0
# Linter
Linter meta-information
## Structure


|Key|Type|Required|Description|
|-|:-:|:-:|-|
|package|string|+|The package unique identifier in URI form which points to current version of package file|
|languages|[language](./collection.md#language)[]|-|The list of supported languages. Default is ``|
|extensions|[extension](#extension)[]|-|The list of supported extensions, by default corresponding extensions for linter languages are used. Default is ``|
|configs|[config](#config)[]|-|List of file names or masks which could be treated as linter configuration file. Default is ``|
## Example
```
{
    "package": "string",
    "languages": [],
    "extensions": [],
    "configs": []
}
```