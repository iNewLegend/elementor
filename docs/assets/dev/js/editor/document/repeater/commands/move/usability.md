# Command
    $e.run('document/repeater/move')

### User Action / Area of effect
    Move repeater item.
     
### Effect
    Requested item removes and re-appears at requested index.

## Input
| Property      | Type                  | Requirement   | Description |
|---            |---                    |---            |---|
| _container_   | `{Container}`         | **require**   | Widget container.
| _containers_  | `{Array.<Container>}` | **require**   | Widgets containers.
| _name_        | `{String}`            | **require**   | Name of the repeater.
| _sourceIndex_ | `{Number}`            | **require**   | Source index of the repeater item.
| _targetIndex_ | `{Number}`            | **require**   | Target index of the repeater item.

## Output
   * **Fails**: Throws error on fail.
   * **Success**: Returns moved item `{Container | Array.<Container>}`.
   
## How to move repeater item? 
* Create a section that will be used to place **tabs** widget:
   ```javascript
   // Create a section with one column and return the section container.
   eSection = $e.run( 'document/elements/create', {
       model: { elType: 'section' },                         // Model to create.
       columns: 1,                                           // Number of columns to create.
       container: elementor.getContainer( 'document' ),      // A container where to create the element.
   } );
   // Save the column for later use.
   eColumn = eSection.children[ 0 ];
   ```
* Let create **tabs** widget ( Widget with repeater ):
    ```javascript
    eTabsWidget = $e.run( 'document/elements/create', {
        model: {
            elType: 'widget',
            widgetType: 'tabs',
        },
        container: eColumn,
    } );
    ```
* Now let move tab:
    ```javascript
    $e.run( 'document/repeater/move', {
        sourceIndex: 0,                     // Position of tab#1.
        targetIndex: 1,                     // Position of tab#2.
        name: 'tabs',                       // Repeater name.
        container: eTabsWidget,             // Tabs widget container.
    } );
    ```
* And the result tab1 appears after tab2 ( swap positions ).

### [Back](../usability.index.md) 
