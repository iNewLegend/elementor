# Command
  `$e.data.create('globals/colors');`

### User Action / Area of effect
    Create global color.
     
### Effect
    Create global color from selected setting, manipluate cache and server data.

## Input
* Query params

| Property          | Type                  | Requirement   | Description |
|---                |---                    |---            |---|
| _id_              | `{String}`            | **required**  | ID for the new created item.
   `$e.data.create('globals/colors?id={{ YOUR ID }}')`
  
* Request data

| Property          | Type                  | Requirement   | Description |
|---                |---                    |---            |---|
| _title_           | `{String}`            | **required**  | Title for new created item.
| _value_           | `{String}`            | **required**  | Value of new created item ( The actual color).

## Output
    Promise

## Example
```javascript
await $e.data.create( `globals/colors?id=${elementor.helpers.getUniqueID()}`, {
    title: 'test',
    value: 'red',
} );

```
### [Back](usability.index.md) 
