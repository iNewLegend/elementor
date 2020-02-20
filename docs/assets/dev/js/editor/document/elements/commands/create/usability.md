# Command
    `$e.run('document/elements/create')`

### User Action / Area of effect
    Create an element.
     
### Effect
    Requested element(s) appears in requested element-container(s).

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container target.
| _containers_ | `{Array.<Container>}` | **required**  | Containers target.
| _model_      | `{Object}`            | **required**  | Model to create.
| _options_    | `{Object}`            | **optional**  | 

**_options:_**

| Property    | Type                              | Default   | Description                            |
|-------------|-----------------------------------|-----------|----------------------------------------|
| at          | `{Number}`                        | `{null}`  | Position (null means last). 
| clone       | `{Boolean}`                       | `{false}` | Generate unique id for the model.
| edit        | `{Boolean}`                       | `{false}` | Is turn edit panel for the new element.
| onBeforeAdd | `{function()}`                    |           | Run callback before add.
| onAfterAdd  | `{function( newModel, newView )}` |           | Run callback after add.
| trigger     | `{Boolean}`                       | `{false}` | *Deprecated*.
    
    
## Output
   * **Fails**: Throws error on fail.
   * **Success**: Returns new created element container `{Container | Array.<Container>}`.
   
## How to create widget? 
To create widget you will be first need a column - and to have column you need a section.

* So let create the section with one column that later will contain our widget:

    ```javascript
    // Create a section with one column and return the section container.
    eSection = $e.run( 'document/elements/create', {
        model: { elType: 'section' },                         // Model to create.
        columns: 1,                                           // Number of columns to create.
        container: elementor.getContainer( 'document' ),      // A container where to create the element.
    } );
    ```
    _the result will be a new section with 1 column_.
* After we have our section with column, we finally can create a widget,
to create the widget, you need to pass the column container:
there is **two** ways to get the container.
    ```javascript
    container = elementor.getContainer( 'COLUMN ID' ) // Replace 'COLUMN ID' with your column id.
    ```
    OR
    ```javascript
    container = eSection.children[ 0 ];
    ```
    Now create the heading widget.
    ```javascript
    eWidget = $e.run( 'document/elements/create', {
        model: {
            elType: 'widget',
            widgetType: 'heading',
        },
        container,
    } );
    ```
    _and the result will be a **section** that have one **column** and that column have heading **widget** in it._

### [Back](../usability.index.md) 
