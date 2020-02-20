# Command
    `$e.run('document/elements/import')`

### User Action / Area of effect
    Import elements
     
### Effect
    Requested template appears in requested postion.

## Input
| Property  | Type               | Requirement       | Description |
|---        |---                 |---                |---|
| _model_   | `{Backbone.Model}` | **required**      | Template model.
| _data_    | `{Object}`         | **required**      | Data.
| _options_ | `{Object}`         | **optional**      | 

**_data:_**

| Property      | Type       | Default   | Description                            |
|---------------|------------|-----------|----------------------------------------|
| content       | `{Object}` |           | Template content. 
| page_settings | `{Object}` |           | Template page settings.

**_options:_**

| Property         | Type                              | Default   | Description                            |
|------------------|-----------------------------------|-----------|----------------------------------------|
| withPageSettings | `{Boolean}`                       | `{false}` | Should set page settings of `args.page_settings`.
| at               | `{Number}`                        | `{null}`  | Position ( Automatically increased ).
| clone            | `{Boolean}`                       | `{false}` | Generate unique id for the model.
| edit             | `{Boolean}`                       | `{false}` | Is turn edit panel for the new element.
| onBeforeAdd      | `{function()}`                    |           | Run callback before add.
| onAfterAdd       | `{function( newModel, newView )}` |           | Run callback after add.
| trigger          | `{Boolean}`                       | `{false}` | *Deprecated*.
    
## Output
   * **Fails**: Throws error on fail.
   * **Success**: Returns imported elements container `{Container | Array.<Container>}`.
   
