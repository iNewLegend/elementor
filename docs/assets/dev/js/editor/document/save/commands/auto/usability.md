# Command
  `$e.run('document/save/auto')`

### User Action / Area of effect
    Auto save elementor JSON model.
     
### Effect
    Save current document, to database.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _document_   | `{Document}`          | **optional**  | default: `{elementor.documents.getCurrent()}`.
| _force_      | `{Boolean}`           | **optional**  | default: `{false}`.

## Output
   * **Fails**: Throws error on fail.
   * **Success**: `{Promise}`.

### [Back](../usability.index.md) 
