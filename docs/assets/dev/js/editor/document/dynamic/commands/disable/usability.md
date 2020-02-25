# Command
    $e.run('document/dynamic/disable')

### User Action / Area of effect
    Disable dynamic option.
     
### Effect
    Request dynamic item dis-appears.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container to disable.
| _containers_ | `{Array.<Container>}` | **required**  | Containers to disable.
| _settings_   | `{Object}`            | **required**  | Dynamic settings to disable <TODO EXPLAIN WHY>

## Output
   * **Fails**: Throws error on fail.
   
## How to disable dynamic option? 
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
    postDateTag = elementor.dynamicTags.tagDataToTagText( elementor.helpers.getUniqueID(), 'post-date', new Backbone.Model( {} ));
  
    $e.run( 'document/dynamic/enable', {
        settings: {
            title: postDateTag,
        },
        container: eWidget,             // Heading widget container.
    } );
    ```
* Now we can post-date disable it.
    ```javascript
    $e.run( 'document/dynamic/disable', {
        settings: {
            title: true,
        },
        container: eWidget,
    } );
    ```
* And the result dynamic date dis-appears.

### [Back](../usability.index.md) 
