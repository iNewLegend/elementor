# Command
  `$e.run('document/elements/empty')`

### User Action / Area of effect
     Delete all the elements from the document.
     
### Effect
    All element(s) in document dis-appears.

## Input
| Property | Type        | Requirement       | Description |
|---       |---          |---                |---|
| _force_  | `{Boolean}` | **optional**      | default: `{false}`, if true will delete all elements without confirmation.

## Output
   * **Fails**: Throws error on fail.
   
## How to delete all elements?
* Simple run this command:
    ```javascript
      $e.run( 'document/elements/empty', { force: true } );
    ```
