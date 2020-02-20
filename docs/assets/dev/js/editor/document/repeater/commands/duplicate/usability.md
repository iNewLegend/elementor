# Command
    $e.run('document/repeater/duplicate')

### User Action / Area of effect
    Duplicate repeater item.
     
### Effect
    Requested item duplicated and appears below requested item.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **require**   | Widget container.
| _containers_ | `{Array.<Container>}` | **require**   | Widgets containers.
| _index_      | `{Number}`            | **require**   | Index of repeater item.
| _name_       | `{String}`            | **require**   | Name of the repeater.

**_options:_**

| Property    | Type                              | Default   | Description                            |
|-------------|-----------------------------------|-----------|----------------------------------------|
| at          | `{Number}`                        | `{null}`  | Position (null means last).            |

## Output
   * **Fails**: Throws error on fail.
   * **Success**: Returns duplicated item `{Container | Array.<Container>}`.
   
## How to duplicate repeater item? 
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
* Now let duplicate the second tab:
    ```javascript
    $e.run( 'document/repeater/duplicate', {
        index: 1,                           // Index of item to duplicate.
        name: 'tabs',                       // Repeater name.
        container: eTabsWidget,             // Tabs widget container.
    } );
    ```
* And the result **second** tab was duplicated.

### [Back](../usability.index.md) 
