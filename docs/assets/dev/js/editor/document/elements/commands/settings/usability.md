# Command
    `$e.run('document/elements/settings')`

### User Action / Area of effect
    Change the settings of element / modify the elementor json model of element.
     
### Effect
    Modify the elementor json model of element, if the settings is part of html ( style ) etc..., its appears in preview.

## Input
| Property          | Type                  | Requirement   | Description |
|---                |---                    |---            |---|
| _container_       | `{Container}`         | **required**  | Container target.
| _containers_      | `{Array.<Container>}` | **required**  | Containers target.
| _settings_        | `{Object}`            | **required**  | Settings.
| _isMultiSettings_ | `{Boolean}`           | **optional**  | default: `{false}`, settings for multi containers (each container).
| _options_         | `{Object}`            | **optional**  |

**_options:_**

| Property         | Type        | Default   | Description                            |
|------------------|------------ |-----------|----------------------------------------|
| external         | `{Boolean}` | `{false}` | Re-render panel with new settings.
| debounce         | `{Boolean}` | `{true}`  | Enable\Disable debounce.
    
    
## Output
   * **Fails**: Throws error on fail.
   
## How to change settings of a widget? 
To create widget you will be first need a column - and to have column you need a section.

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
* Now change the settings of widget we just created, the command will change the color of heading text to red.
    ```javascript
    $e.run( 'document/elements/settings', {
        settings: {
            title_color: 'red',
        },
        container: eWidget,
    } );
    ```
