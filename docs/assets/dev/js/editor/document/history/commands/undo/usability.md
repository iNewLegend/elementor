# Command
    $e.run('document/history/undo')

### User Action / Area of effect
    Undo History item
     
### Effect
    Undo history item, change the editor preview depends on the item.

## Output
   * **Fails**: Throws error on fail.
   
## How to undo history item? 
* Create a section
```javascript
$e.run( 'document/elements/create', {
    model: { elType: 'section' },
    container: elementor.getContainer( 'document' ),
} );
```
* Undo section creation
```javascript
$e.run( 'document/history/undo' );
```
* And the result section is deleted.

### [Back](../usability.index.md) 
