# Command
    $e.run('document/dynamic/enable')

### User Action / Area of effect
    Enable dynamic option.
     
### Effect
    Request dynamic item appears.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container to enable.
| _containers_ | `{Array.<Container>}` | **required**  | Containers to enable.
| _settings_   | `{Object}`            | **required**  | Dynamic settings to enable

## Output
   * **Fails**: Throws error on fail.
   
## How to enable dynamic option? 
* Create a widget first:
   ```javascript
   // Create a section with one column and return the section container.
   eSection = $e.run( 'document/elements/create', {
       model: { elType: 'section' },                         // Model to create.
       columns: 1,                                           // Number of columns to create.
       container: elementor.getContainer( 'document' ),      // A container where to create the element.
   } );
   // Create a widget.
   eWidget = $e.run( 'document/elements/create', {
        model: {
            elType: 'widget',
            widgetType: 'heading',
        },
        container: eColumn = eSection.children[ 0 ],
    } );
    ```
* Now enable dynamic post-date for that widget.
    ```javascript
    $e.run( 'document/dynamic/enable', {
        settings: {
            title: '[elementor-tag id="3d0ffad" name="post-date" settings="%7B%7D"]',
        },
        container: eWidget,             // Heading widget container.
    } );
    ```
* And the result dynamic date appears.

### [Back](../usability.index.md) 
