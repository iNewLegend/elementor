# Command
    $e.run('document/repeater/insert')

### User Action / Area of effect
    Insert repeater item.
     
### Effect
    Requested model appears as new row item.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **require**   | Widget container.
| _containers_ | `{Array.<Container>}` | **require**   | Widgets containers.
| _model_      | `{Object}`            | **require**   | Model of item to create.
| _name_       | `{String}`            | **require**   | Name of the repeater.

**_options:_**

| Property    | Type                              | Default   | Description                            |
|-------------|-----------------------------------|-----------|----------------------------------------|
| at          | `{Number}`                        | `{null}`  | Position (null means last). 

## Output
   * **Fails**: Throws error on fail.
   * **Success**: Returns new create item `{Container | Array.<Container>}`.
   
## How to insert repeater item? 
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
* Now let insert new tab:
    ```javascript
    $e.run( 'document/repeater/insert', {
        model: {
            tab_title: 'test tab',
            tab_content: 'test content',
        },
        name: 'tabs',                       // Repeater name.
        container: eTabsWidget,             // Tabs widget container.
    } );
    ```
* And the result new tab was added.

### [Back](../usability.index.md) 
