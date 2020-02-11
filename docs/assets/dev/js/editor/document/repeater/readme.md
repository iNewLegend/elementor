
## Component -- `$e.components.get('document/repeater')`

*  **Name**: Repeater.
*  **Description**: Provide a way to manage repeater items.

## Component `document/repeater/` -- Commands
| Command                                                                | Access                                             | Description         
|------------------------------------------------------------------------|----------------------------------------------------|-----------------------------------------
| [Duplicate](#)                                                         | `$e.run('document/repeater/duplicate')`            | 
| [Insert](#)                                                            | `$e.run('document/repeater/insert')`               | 
| [Move](#)                                                              | `$e.run('document/repeater/move')`                 | 
| [Remove](#)                                                            | `$e.run('document/repeater/remove')`               | 
| [Settings](#)                                                          | `$e.run('document/repeater/settings')`             | 

## _Command_ -- `$e.run('document/repeater/duplicate')`
*  **Name**: Duplicate.
*  **Description**: Duplicate repeater item.
*  **Returns**: `{Container | Array.<Container>}` *Duplicated container(s)*.
*  **Arguments**: 

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _container_  | `{Container}`         | **require**   | Widget container.
    | _containers_ | `{Array.<Container>}` | **require**   | Widgets containers.
    | _index_      | `{Number}`            | **require**   | Index of repeater item.
    | _name_       | `{String}`            | **require**   | Name of the repeater.
    
    **_options:_**
   
    | Property    | Type                              | Default   | Description                            |
    |-------------|-----------------------------------|-----------|----------------------------------------|
    | at          | `{Number}`                        | `{null}`  | Position (null means last). 

## _Command_ -- `$e.run('document/repeater/insert')`
*  **Name**: Insert.
*  **Description**: Insert repeater item.
*  **Returns**: `{Container | Array.<Container>}` *Inserted container(s)*.
*  **Arguments**: 

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

## _Command_ -- `$e.run('document/repeater/move')`
*  **Name**: Move.
*  **Description**: Move repeater item.
*  **Returns**: `{Container | Array.<Container>}` *Moved container(s)*.
*  **Arguments**: 

    | Property      | Type                  | Requirement   | Description |
    |---            |---                    |---            |---|
    | _container_   | `{Container}`         | **require**   | Widget container.
    | _containers_  | `{Array.<Container>}` | **require**   | Widgets containers.
    | _name_        | `{String}`            | **require**   | Name of the repeater.
    | _sourceIndex_ | `{Number}`            | **require**   | Source index of the repeater item.
    | _targetIndex_ | `{Number}`            | **require**   | Target index of the repeater item.
