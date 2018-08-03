version 0.0.0
# Import
Import schema
## Structure


|Key|Type|Required|Description|
|-|:-:|:-:|-|
|source|[source](#source)|+|The information of package manager|
|linters|[linters](#linters)|+|The information about linters|
### source
The information of package manager

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|name|[manager](./collection.md#manager)|+|Name of package manager|
|version|string|-|Recommendation version of package manager|
### linter
Linter meta-information for import

Acceptable types: linter:name ,linter:complex 
### linter:complex
Full data of linter

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|name|[linter:name](#linter:name)|+|Name of linter|
|version|undefined|+|Version of linter|
|languages|[language](./collection.md#language)[]|-|The list of supported languages. Default is ``|
|extensions|[extension](./linter.md#extension)[]|-|The list of supported extensions, by default corresponding extensions for linter languages are used. Default is ``|
|configs|[config](./linter.md#config)[]|-|List of file names or masks which could be treated as linter configuration file. Default is ``|
### version
Version of linter

Acceptable types: linter:version ,linter:versions 
## Example
```
{
    "source": {},
    "linters": {}
}
```