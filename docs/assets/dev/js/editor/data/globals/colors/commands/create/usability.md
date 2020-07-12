# Command
    $e.run('globas/colors/create')

### Important
    This is [USER] command is just warrper for `$e.data.create( 'globals/colors/create` )`.
    The command validate the stting exist at contrainr.controls. and mapping the data for 'globals/colors/create' [DATA] command.
    The command generate id if not passed by args.id.
 
### User Action / Area of effect
    Create global color.
     
### Effect
    Create global color from selected setting, manipluate cache and server data.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container target.
| _containers_ | `{Array.<Container>}` | **required**  | Containers target.
| _setting_    | `{String}`            | **required**  | The setting name.
| _title_      | `{String}`            | **required**  | Title for the global color.
    
## Output
   * **Fails**: Throws error on invalid setting.
   * **Not fails**: `Promise`
   
## How to use? 
* First, we need to have a container( widget ) since that command ( wrapper ) requires that.
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
* Probably this widget comes with default globals, just to be sure we are working with local color
let use `unlink` command: 
- NOTIE: if its already global it won't work - it will save empty value.
```javascript
$e.run( 'document/globals/unlink', {
    container: eWidget,
    globalValue: 'globals/colors?id=primary',   // which global value.
    setting: 'title_color',                     // which setting to delete.
    options: { external: true }                 // to rerender the panel.
} );
```
* Now after ( unlink ) we are sure `title_color` is reflects the actually color we want.
let put a simple `red` color to the widget `title_color` using `settings` command.
```javascript
$e.run( 'document/elements/settings', {
    settings: {
        title_color: 'red',
    },
    container: eWidget,
} );
```
* Run create command ( which will create new global color for us ):
```javascript
// Create global color.
result = await $e.run( 'globals/colors/create', {
    container: eWidget,
    setting: 'title_color',
    title: 'test',
} );
```
* Validate the results, validate if the result is the same `red` color, we set before.
```javascript
// Get data using $e.data.get
getResult = await $e.data.get( `globals/colors?id=${ result.data.id }`);

// Result should be 'red'.
console.log( getResult.data.value );
```
### [Back](../usability.index.md) 
