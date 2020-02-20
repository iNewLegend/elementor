# Command
  `$e.run('document/elements/copy')`

### User Action / Area of effect
    Copy an element.
     
### Effect
    Copy an element to browser stroage.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container to copy.
| _containers_ | `{Array.<Container>}` | **required**  | Containers to copy.
| _storageKey_ | `{String}`            | **optional**  | default: `{'clipboard'}`.

## Output
   * **Fails**: Throws error on fail.
   
## How to copy element?
```javascript
$e.run( 'document/elements/copy', {
    container: elementor.getContainer( 'COLUMN ID' ) // Replace 'COLUMN ID' with your column id.
} );
```

### [Back](../usability.index.md) 
