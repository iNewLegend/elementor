# Command
  `$e.run('document/elements/paste')`

### User Action / Area of effect
     Paste an element.
     
### Effect
    Copied element(s) appears in requested element-container(s).

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container target.
| _containers_ | `{Array.<Container>}` | **required**  | Containers target.
| _storageKey_ | `{String}`            | **optional**  | default: `{'clipboard'}`.

## Output
   * **Fails**: Throws error on fail.
   * **Success**: Returns new pasted element container `{Container | Array.<Container>}`.
   
## How to copy and paste an element? 
To copy paste element we first need to have one. then we can paste.
* So the following code will create a section, column, and simple heading widget at the column.
    ```javascript
        // Create section with one column
        eSection = $e.run( 'document/elements/create', { 
            model: { elType: 'section' },
            columns: 1,
            container: elementor.getContainer( 'document' )
        }  )
    
        // Create heading widget.
        $e.run( 'document/elements/create', {
            model: {
                elType: 'widget',
                widgetType: 'heading'
            }, 
            container: eSection.children[ 0 ],      // first children of section means the column.
        } );
    ```
* Copy the section we just created.
    ```javascript
        $e.run( 'document/elements/copy', {
            container: eSection,
        } );
    ```
* Paste the element ( section ) to document.
    ```javascript
        $e.run( 'document/elements/paste', {
            container: elementor.getContainer('document' ),
        } );
    ```
   _and the result new **section** with the same structure appears below the requested **section**._
