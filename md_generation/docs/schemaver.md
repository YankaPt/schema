version 0.0.0
# Schemaver
Versioned Schema
## Structure
The versioned object

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|$version|string|+|The version value|
|$schema|string|+|The parent schema uri|
## Example
```
{
    "$version": "string",
    "$schema": "string"
}
```