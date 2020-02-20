# Command
  `$e.run('document/elements/reset-style')`

### User Action / Area of effect
    Reset style of an element.
     
### Effect
    Requested element(s) style back to defaults.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container target.
| _containers_ | `{Array.<Container>}` | **required**  | Containers target.
| _storageKey_ | `{String}`            | **optional**  | default: `{'clipboard'}`.

## Output
   * **Fails**: Throws error on fail.
   
## How to reset style of an element? 
To reset style to an element we first need to have one with non **default** style.
* So the following code will create a section, column, and simple heading widget at the column.
    ```javascript
    // Create section with one column
    eSection = $e.run( 'document/elements/create', { 
        model: { elType: 'section' },
        columns: 1,
        container: elementor.getContainer( 'document' )
    }  )

    // Create heading widget.
    eWidget = $e.run( 'document/elements/create', {
        model: {
            elType: 'widget',
            widgetType: 'heading'
        }, 
        container: eSection.children[ 0 ],      // first children of section means the column.
    } );
    ```
* Now change the style of widget we just created, the command will change the color of heading text to red.
    ```javascript
    $e.run( 'document/elements/settings', {
        settings: {
            title_color: 'red',
        },
        container: eWidget,
    } );
    ```
* Reset style of element ( our widget ).
    ```javascript
    $e.run( 'document/elements/reset-style', {
        container: eWidget,
    } );
    ```
   _and the result new **widget** ( eWidget ) will have text color as it was when it was created._
