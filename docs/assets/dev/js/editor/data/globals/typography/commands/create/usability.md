# Command
    $e.run('globas/typography/create')

### Important
    This is [USER] command is just warrper for `$e.data.create( 'globals/typography/create` )`.
    The command validate the stting exist at contrainr.controls. and mapping the data for 'globals/typography/create' [DATA] command.
    The command uses control group prefix to find out all controls that releated to group prefix.
    The command generate id.
 
### User Action / Area of effect
    Create global typography.
     
### Effect
    Create global typography from selected setting, manipluate cache and server data.

## Input
| Property     | Type                  | Requirement   | Description |
|---           |---                    |---            |---|
| _container_  | `{Container}`         | **required**  | Container target.
| _containers_ | `{Array.<Container>}` | **required**  | Containers target.
| _setting_    | `{String}`            | **required**  | The setting name.
| _title_      | `{String}`            | **required**  | Title for the global typography.
    
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
* Probably this widget comes with default globals, just to be sure we are working with local typography
let use `unlink` command: 
- NOTIE: if its already global it won't work - it will save empty value.
```javascript
$e.run( 'document/globals/unlink', {
    container: eWidget,
    globalValue: 'globals/typography?id=primary',   // which global value.
    setting: 'typography_typography',               // which setting to delete.
    options: { external: true }                     // to rerender the panel.
} );
```
* Now after ( unlink ) we are sure `typography_typography` is reflects the actually typography we want.
let change `typography_font_size` to `55px` on that widget using `settings` command.
```javascript
$e.run( 'document/elements/settings', {
    settings: {
        typography_font_size: {
            size: 55,
            sizes: [],
            unit: "px"
        },
    },
    container: eWidget,
} );
```
* Run create command ( which will create new typography for us ):
```javascript
// Create global typography.
result = await $e.run( 'globals/typography/create', {
    container: eWidget,
    setting: 'typography_typography',
    title: 'test',
} );
```
* Validate the results, validate if the result is the same `typography_font_size`, as we set step before.
```javascript
// Get data using $e.data.get
getResult = await $e.data.get( `globals/typography?id=${ result.data.id }`);

// Result should be '{unit: "px", size: 55, sizes: Array(0)}'.
console.log( getResult.data.value.typography_font_size );
```
### [Back](../usability.index.md) 
