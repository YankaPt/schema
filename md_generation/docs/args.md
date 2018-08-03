version 0.0.0
# Args
Arguments schema
## Structure
The arguments object definition

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|package|string|+|The package unique identifier in URI form which points to current version of package file|
|definitions|[definitions](#definitions)|-|The arguments definitions|
|delimiter|[arg:delimiter](#arg:delimiter)|-|undefined|
### definitions
The arguments definitions

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|object|[object](#object)|-|The arguments object schema|
### object
The arguments object schema

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|properties|object|-|The arguments properties of package|
## Example
```
{
    "package": "string",
    "definitions": {
        "object": {
            "properties": {}
        }
    },
    "delimiter": {}
}
```