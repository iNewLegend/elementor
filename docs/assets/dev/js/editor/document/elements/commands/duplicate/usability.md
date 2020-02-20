# Command
    $e.run('document/elements/duplicate')

### User Action / Area of effect
    Duplicate an element.
     
### Effect
    Requested element duplicated and appears below requested element.

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
   * Create a section that later will be duplicated:
       ```javascript
       // Create a section with one column and return the section container.
       eSection = $e.run( 'document/elements/create', {
           model: { elType: 'section' },                         // Model to create.
           columns: 1,                                           // Number of columns to create.
           container: elementor.getContainer( 'document' ),      // A container where to create the element.
       } );
       ```
   * Now duplicate the section we just created:
     ```javascript
     $e.run( 'document/elements/duplicate', { 
         container: eSection,
     } );
     ```
   _and the result new **section** with the same structure appears below the requested **section**._

### [Back](../usability.index.md) 
