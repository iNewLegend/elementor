# Command
  `$e.run('document/elements/delete')`

### User Action / Area of effect
    Delete an element.
     
### Effect
    Requested element(s) dis-appears in requested element-container(s).

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container to delete.
| _containers_ | `{Array.<Container>}` | **required**  | Containers to delete.

## Output
   * **Fails**: Throws error on fail.
   * **Success**: Returns deleted element container `{Container | Array.<Container>}`.
   
## How to delete element?
```javascript
$e.run( 'document/elements/delete', {
    container: elementor.getContainer( 'COLUMN ID' ) // Replace 'COLUMN ID' with your column id.
} );
```
