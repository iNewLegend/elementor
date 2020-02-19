# Command
  `$e.run('document/elements/duplicate')`

### User Action / Area of effect
    Duplicate an element.
     
### Effect
    Requested element appears below requested element.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container to duplicate.
| _containers_ | `{Array.<Container>}` | **required**  | Containers to duplicate.

## Output
   * **Fails**: Throws error on fail.
   * **Success**: Returns new duplicated element container `{Container | Array.<Container>}`.
   
## How to duplicate element? 
     Duplicate will work for section, columns & widgets.
   * Assuming we have section, and want to duplicate it, the section container is stored at variable:
   `eSection`
   ```javascript
    $e.run( 'document/elements/duplicate', { 
        container: eSection,
    } );
   ```
   _and the result new **section** with the same structure appears below the requested **section**._
