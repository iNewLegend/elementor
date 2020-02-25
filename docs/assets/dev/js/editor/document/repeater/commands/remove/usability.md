# Command
    $e.run('document/repeater/remove')

### User Action / Area of effect
    Remove repeater item.
     
### Effect
    Requested item dis-appears.

## Input
| Property      | Type                  | Requirement   | Description |
|---            |---                    |---            |---|
| _container_   | `{Container}`         | **require**   | Widget container.
| _containers_  | `{Array.<Container>}` | **require**   | Widgets containers.
| _name_        | `{String}`            | **require**   | Name of the repeater.
| _index_       | `{Number}`            | **require**   | Index of the repeater item to remove.

## Output
   * **Fails**: Throws error on fail.
   * **Success**: Returns removed item `{Container | Array.<Container>}`.
   
## How to remove repeater item? 
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
    $e.run( 'document/repeater/remove', {
        index: 0,                           // Position of tab#1.
        name: 'tabs',                       // Repeater name.
        container: eTabsWidget,             // Tabs widget container.
    } );
    ```
* And the result tab1 deleted.

### [Back](../usability.index.md) 
