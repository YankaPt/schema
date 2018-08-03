version 0.0.0
# Deps
Package dependencies
## Structure


|Key|Type|Required|Description|
|-|:-:|:-:|-|
|package|string|+|The package unique identifier in URI form which points to current version of package file|
|dependencies|[dependency](#dependency)[]|+|The array of linter dependencies, where each dependency is an array of required packages|
### package
The definition of required package, later it should be converted to linterhub package reference

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|manager|[manager](./collection.md#manager)|+|The package manager name|
|package|string|+|The package name in a format accepted by package manager|
|version|string|-|The package version in a format accepted by package manager, if not specified the latest version is assumed|
|target|boolean|-|The flag indicating whether the package is the target itself. Default is `false`|
## Example
```
{
    "package": "string",
    "dependencies": [
        [
            {
                "manager": {},
                "package": "string",
                "version": "string",
                "target": false
            }
        ]
    ]
}
```