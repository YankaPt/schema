version 0.0.0
# Test
Test schema
## Structure


|Key|Type|Required|Description|
|-|:-:|:-:|-|
|title|string|+|The title of tests|
|description|string|+|Description what is being tested|
|data|[data](#data)|-|Global data of tests|
|tests|[test](#test)[]|+|Array of test objects|
### test
Object of test

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|description|string|+|Description of test|
|data|[data](#data)|+|Data of test|
|valid|boolean|+|Result of test|
## Example
```
{
    "title": "string",
    "description": "string",
    "data": {},
    "tests": [
        {
            "description": "string",
            "data": {},
            "valid": false
        }
    ]
}
```