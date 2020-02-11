
## Component -- `$e.components.get('document/history')`

*  **Name**: History.
*  **Description**: Provide a way to manage history...
*  **Built in history types**:
```javascript
historyTypes = {
	"add": "Added",
	"change": "Edited",
	"disable": "Disabled",
	"duplicate": "Duplicate",
	"enable": "Enabled",
	"move": "Moved",
	"paste": "Pasted",
	"paste_style": "Style Pasted",
	"remove": "Removed",
	"reset_style": "Style Reset",
	"reset_settings": "Settings Reset"
}
```

## Component `document/history/` -- Commands
| Command                                                                | Access                                             | Description         
|------------------------------------------------------------------------|----------------------------------------------------|-----------------------------------------
| [Do](#command----erundocumenthistroydo)                                | `$e.run('document/history/do')`                    | Do history item.
| [Undo](#command----erundocumenthistroyundo)                            | `$e.run('document/history/undo')`                  | Undo history item.
| [Undo-All](#command----erundocumenthistroyundo-all)                    | `$e.run('document/history/undo-all')`              | Undo all history items.
| [Redo](#command----erundocumenthistroyredo)                            | `$e.run('document/history/redo')`                  | Redo history item.


## Component `document/history/` -- Internal Commands
| Command                                                                     | Access                                              | Description         
|-----------------------------------------------------------------------------|-----------------------------------------------------|-----------------------------------------
| [Add-Transaction](#command----einternaldocumenthistroyadd-transaction)      | `$e.internal('document/history/add-transaction')`   | Add transaction item.
| [Clear-Transaction](#command----einternaldocumenthistroyclear-transaction)  | `$e.internal('document/history/clear-transaction')` | Clear transaction.
| [Delete-Log](#command----einternaldocumenthistroydelete-log)                | `$e.internal('document/history/delete-log')`        | Delete log.
| [End-Log](#command----einternaldocumenthistroyend-log)                      | `$e.internal('document/history/end-log')`           | End log.
| [End-Transaction](#command----einternaldocumenthistroyend-transaction)      | `$e.internal('document/history/end-transaction')`   | End Transaction.
| [Log-Sub-Item](#command----einternaldocumenthistroylog-sub-item)            | `$e.internal('document/history/log-sub-item')`      | Lob sub item.
| [Start-Log](#command----einternaldocumenthistroystart-log)                  | `$e.internal('document/history/start-log')`         | Start log.

## _Command_ -- `$e.run('document/histroy/do')`
*  **Name**: Undo.
*  **Description**: Do history step.
*  **Returns**: `{void}`

    | Property     | Type                  | Requirement    | Description |
    |---           |---                    |---             |---|
    | _index_         | `{Number}`         | **optional**   | Index of history item.
* **Examples**:
    Assuming we have this scenario.
    
    | Editor | Preview    |
    |---:|:---|
    | ![edit-heading-with-dynamic-title-date](../../../../../../images/edocument-dynamic/edit-heading-with-dynamic-title-date.png) | ![widget-heading-with-dynamic-title-date](../../../../../../images/base/widget-heading.png) <br> ![widget-icon](../../../../../../images/base/widget-icon.png)

## _Command_ -- `$e.run('document/histroy/undo')`
*  **Name**: Undo.
*  **Description**: Undo history step.
*  **Returns**: `{void}`
*  **Arguments**: None.

## _Command_ -- `$e.run('document/histroy/undo-all')`
*  **Name**: Undo-All.
*  **Description**: Undo all history step.
*  **Returns**: `{void}`
*  **Arguments**: None.

## _Command_ -- `$e.run('document/histroy/redo')`
*  **Name**: Redo.
*  **Description**: Redo history step.
*  **Returns**: `{void}`
*  **Arguments**: None.

## _Command_ -- `$e.internal('document/histroy/add-transaction')`
*  **Name**: Add-Transaction.
*  **Description**: Add item to transactions.
*  **Returns**: `{void}`
*  **Arguments**: 

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _container_  | `{Container}`         | **require**   | Container log.
    | _containers_ | `{Array.<Container>}` | **require**   | Containers log.
    | _type_       | `{String}`            | **require**   | Type
    | _title_      | `{String}`            | **optional**  | Title.
    | _subTitle_   | `{String}`            | **optional**  | Sub title.
    | _restore_    | `{function()}`        | **optional**  | Restore function.

## _Command_ -- `$e.internal('document/histroy/clear-transaction')`
*  **Name**: Clear-Transaction.
*  **Description**: Clear transactions list.
*  **Returns**: `{void}`
*  **Arguments**: None.

## _Command_ -- `$e.internal('document/histroy/delete-log')`
*  **Name**: Delete-Log.
*  **Description**: Delete logged history.
*  **Returns**: `{void}`
*  **Arguments**: 

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _id_         | `{Number}`            | **required**  | Id of logged history to delete.

*  **Examples**:
     Look at [`$e.internal('document/histroy/start-log')`](#command----einternaldocumenthistroystart-log) example.

## _Command_ -- `$e.internal('document/histroy/end-log')`
*  **Name**: End-Log.
*  **Description**: End logged history.
*  **Returns**: `{void}`
*  **Arguments**: None.

## _Command_ -- `$e.internal('document/histroy/end-transaction')`
*  **Name**: End-Transaction.
*  **Description**: End transaction, will log the first and the last transaction, as new logged history.
title, subTitle will be taken from the first transaction item.
*  **Returns**: `{void}`
*  **Arguments**: None.

## _Command_ -- `$e.internal('document/histroy/log-sub-item')`
*  **Name**: Log-Sub-Item.
*  **Description**: Log sub item, Each history item can have sub items ( non visual at history panel ).
*  **Returns**: `{void}`
*  **Arguments**: 

    | Property     | Type                  | Requirement    | Description |
    |---           |---                    |---             |---|
    | _id_         | `{Number}`            | **optional**   | Id of history item, to be sub item of. default: `{elementor.documents.currentDocument.history.getCurrentId()}`.
    | _container_  | `{Container}`         | **optional**   | Container log.
    | _containers_ | `{Array.<Container>}` | **optional**   | Containers log.
    | _type_       | `{String}`            | **optional**   | Type
    | _title_      | `{String}`            | **optional**   | Title.
    | _subTitle_   | `{String}`            | **optional**   | Sub title.
    | _restore_    | `{function()}`        | **optional**   | Restore function.

## _Command_ -- `$e.internal('document/histroy/start-log')`
*  **Name**: Start-Log.
*  **Description**: Start log item.
*  **Returns**: `{Number}` *log id*.
*  **Arguments**: 

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _container_  | `{Container}`         | **require**   | Container log.
    | _containers_ | `{Array.<Container>}` | **require**   | Containers log.
    | _type_       | `{String}`            | **require**   | Type
    | _title_      | `{String}`            | **require**   | Title.
    | _subTitle_   | `{String}`            | **optional**  | Sub title.
    | _restore_    | `{function()}`        | **optional**  | Restore function.
*  **Examples**:
    ```javascript
    id = $e.internal( 'document/history/start-log', { 
      type: 'custom',
      title: 'My custom title'
    } );
    ```
    Result:
    
    ![history-with-custom-title](../../../../../../images/edocument-history/history-with-custom-title.png)
    ```javascript
    $e.internal( 'document/history/delete-log', { id } ); 
    ```
    Result:
    
    ![history-empty](../../../../../../images/edocument-history/history-empty.png)

### [Back](../readme.md) 
