# Command
    $e.run('document/history/do')

### User Action / Area of effect
    Do history item ( Undo or Redo ).
     
### Effect
    Change the preview depends on the history item.

## Input
| Property     | Type                  | Requirement    | Description |
|---           |---                    |---             |---|
| _index_         | `{Number}`         | **optional**   | Index of history item.

## Output
   * **Fails**: Throws error on fail.
   
## How to do history item? 
* Create a section
```javascript
$e.run( 'document/elements/create', {
    model: { elType: 'section' },
    container: elementor.getContainer( 'document' ),
} );
```
* Do 'Editing started' item.
```javascript
$e.run( 'document/history/do', { index: 1 } );  // Editing started.
```
* And the result section is deleted.

### [Back](../usability.index.md) 
