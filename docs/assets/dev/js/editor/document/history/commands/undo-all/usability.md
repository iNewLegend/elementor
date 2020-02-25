# Command
    $e.run('document/history/undo-all')

### User Action / Area of effect
    Undo all History item(s)
     
### Effect
    Undo all history item(s), change the editor preview depends on the item(s).

## Output
   * **Fails**: Throws error on fail.
   
## How to undo history item? 
* Create a 5 section(s).
```javascript
for( i = 0 ; i < 5 ; ++i ) {
    $e.run( 'document/elements/create', {
        model: { elType: 'section' },
        container: elementor.getContainer( 'document' ),
    } );
}
```
* Undo all section(s) that were created.
```javascript
$e.run( 'document/history/undo-all' );
```
* And the result section(s) is deleted.

### [Back](../usability.index.md) 
