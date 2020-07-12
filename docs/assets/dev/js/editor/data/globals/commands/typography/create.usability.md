# Command
  `$e.data.create('globals/typography');`

### User Action / Area of effect
    Create global color.
     
### Effect
    Create global color from selected setting, manipluate cache and server data.

## Input
* Query params

| Property          | Type                  | Requirement   | Description |
|---                |---                    |---            |---|
| _id_              | `{String}`            | **required**  | ID for the new created item.
   `$e.data.create('globals/typography?id={{ YOUR ID }}')`
  
* Request data

| Property          | Type                  | Requirement   | Description |
|---                |---                    |---            |---|
| _title_           | `{String}`            | **required**  | Title for new create item.
| _value_           | `{Object}`            | **required**  | Value of new creared item.


Example **_value:_**
```javascript
value = {
    typography_font_family: 'Roboto',
    typography_font_size: {
        unit: 'px',
        size: 55, 
        sizes: []
    },
    typography_font_weight: '600',
    typography_typography: 'custom'
}
```

## Output
    Promise

## Example
```javascript
await $e.data.create( `globals/typography?id=${elementor.helpers.getUniqueID()}`, {
    title: 'test',
    value: {
        typography_font_family: 'Roboto',
        typography_font_size: {
            unit: 'px',
            size: 55,
            sizes: []
        },
        typography_font_weight: '600',
        typography_typography: 'custom'
    },
} );

```
### [Back](usability.index.md) 
