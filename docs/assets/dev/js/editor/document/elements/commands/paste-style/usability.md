# Command
    `$e.run('document/elements/paste-style')`

### User Action / Area of effect
    Paste style to an element.
     
### Effect
    Copied element(s) style appears in requested element(s).

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container target.
| _containers_ | `{Array.<Container>}` | **required**  | Containers target.
| _storageKey_ | `{String}`            | **optional**  | default: `{'clipboard'}`.

## Output
   * **Fails**: Throws error on fail.
   
## How to copy and paste style to an element? 
To copy & paste style to an element we first need to have one with non **default** style.
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
* Copy the widget we just created.
    ```javascript
    $e.run( 'document/elements/copy', {
        container: eWidget,
    } );
    ```
* Create another widget, here we will paste style to.
    ```javascript
    // Create heading widget.
    eTargetWidget = $e.run( 'document/elements/create', {
        model: {
            elType: 'widget',
            widgetType: 'heading'
        }, 
        container: eSection.children[ 0 ],      // first children of section means the column.
    } );
    ```
* Paste style to element ( new target widget ).
    ```javascript
    $e.run( 'document/elements/paste-style', {
        container: eTargetWidget,
    } );
    ```
   _and the result new **widget** ( eTargetWidget ) will have the same text color as first created **widget**._

### [Back](../usability.index.md) 
