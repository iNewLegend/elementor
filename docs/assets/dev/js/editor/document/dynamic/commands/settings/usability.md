# Command
    $e.run('document/dynamic/settings')

### User Action / Area of effect
    Change dynamic option.
     
### Effect
    Request dynamic item changes.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container to enable.
| _containers_ | `{Array.<Container>}` | **required**  | Containers to enable.
| _settings_   | `{Object}`            | **required**  | Dynamic settings to enable

## Output
   * **Fails**: Throws error on fail.
   
## How to change dynamic option? 
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
* Now change post-date format to human readable.
    ```javascript
    postDateTag = elementor.dynamicTags.tagDataToTagText( elementor.helpers.getUniqueID(), 'post-date', new Backbone.Model( { format: 'human'} ));
    
    // Change dynamic settings.
    $e.run( 'document/dynamic/settings', {
          container: eWidget,
          settings: {
              title: postDateTag,
          },
    } );
    ```
* And the result is that heading widget have now dynamic title date with human readable format.

### [Back](../usability.index.md) 
