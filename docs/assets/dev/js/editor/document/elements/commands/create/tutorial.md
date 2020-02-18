##  `$e.run('document/elements/create')`
### Create an element.

#### How to create widget? 
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
to create the widget, you need to pass the column id:

    ```javascript
        eWidget = $e.run( 'document/elements/create', {
            model: {
                elType: 'widget',
                widgetType: 'heading',
            },
            container: elementor.getContainer( 'COLUMN ID' ) // Replace 'COLUMN ID' with your column id.
        } );
    ```
    _and the result will be a **section** that have one **column** and that column have heading **widget** in it._
