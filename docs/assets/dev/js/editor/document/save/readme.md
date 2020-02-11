
## Component -- `$e.components.get('document/save')`

*  **Name**: Save.
*  **Description**: Provide a way to save the document...

## Component `document/save/` -- Commands
| Command                                                                | Access                                             | Description         
|------------------------------------------------------------------------|----------------------------------------------------|-----------------------------------------
| [Auto](#command----erundocumentsaveauto)                               | `$e.run('document/save/auto')`                     | Auto save.
| [Default](#command----erundocumentsavedefault)                         | `$e.run('document/save/default')`                  | Default save.
| [Discard](#command----erundocumentsavediscard)                         | `$e.run('document/save/discard')`                  | Discard.
| [Draft](#command----erundocumentsavedraft)                             | `$e.run('document/save/draft')`                    | Save with draft status.
| [Pending](#command----erundocumentsavepending)                         | `$e.run('document/save/pending')`                  | Save with pending status.
| [Publish](#command----erundocumentsavepublish)                         | `$e.run('document/save/publish')`                  | Save with publish status.
| [Update](#command----erundocumentsaveupdate)                           | `$e.run('document/save/update')`                   | Save & Update document.

## Component `document/save/` -- Internal Commands
| Command                                                                | Access                                             | Description         
|------------------------------------------------------------------------|----------------------------------------------------|-----------------------------------------
| [Save](#command----einternaldocumentsavesave)                          | `$e.internal('document/save/save')`                | Save.
| [Set-Is-Modified](#command----einternaldocumentsaveset-is-modified)    | `$e.internal('document/save/set-is-modifed')`      | Set editor save status.

## _Command_ -- `$e.run('document/save/auto')`
*  **Name**: Auto.
*  **Description**: Auto save.
*  **Returns**: `{Promise}`

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _document_   | `{Document}`          | **optional**  | default: `{elementor.documents.getCurrent()}`.
    | _force_      | `{Boolean}`           | **optional**  | default: `{false}`.

## _Command_ -- `$e.run('document/save/default')`
*  **Name**: Default.
*  **Description**: Default save.
*  **Returns**: `{Promise}`

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _document_   | `{Document}`          | **optional**  | default: `{elementor.documents.getCurrent()}`.

## _Command_ -- `$e.run('document/save/discard')`
*  **Name**: Discard.
*  **Description**: Discard all changes.
*  **Returns**: `{Promise}`

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _document_   | `{Document}`          | **optional**  | default: `{elementor.documents.getCurrent()}`.


## _Command_ -- `$e.run('document/save/draft')`
*  **Name**: Draft.
*  **Description**: Save draft.
*  **Returns**: `{Promise}`

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _document_   | `{Document}`          | **optional**  | default: `{elementor.documents.getCurrent()}`.

## _Command_ -- `$e.run('document/save/pending')`
*  **Name**: Pending.
*  **Description**: Save pending.
*  **Returns**: `{Promise}`

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _document_   | `{Document}`          | **optional**  | default: `{elementor.documents.getCurrent()}`.
    | _status_     | `{String}`            | **optional**  | default: `{'pending'}`.

## _Command_ -- `$e.run('document/save/publish')`
*  **Name**: Publish.
*  **Description**: Save publish.
*  **Returns**: `{Promise}`

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _document_   | `{Document}`          | **optional**  | default: `{elementor.documents.getCurrent()}`.
    | _status_     | `{String}`            | **optional**  | default: `{'publish'}`.

## _Command_ -- `$e.run('document/save/publish')`
*  **Name**: Update.
*  **Description**: Save update.
*  **Returns**: `{Promise}`

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _document_   | `{Document}`          | **optional**  | default: `{elementor.documents.getCurrent()}`.


## _Command_ -- `$e.internal('document/save/save')`
*  **Name**: Save.
*  **Description**: Save.
*  **Returns**: `{Promise}`

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _status_     | `{String}`            | **optional**  | default: `{'draft'}`.
    | _force_      | `{Boolean}`           | **optional**  | default: `{false}`.
    | _onSuccess_  | `{function()}`        | **optional**  | default: `{null}`.
    | _document_   | `{Document}`          | **optional**  | default: `{elementor.documents.getCurrent()}`.

## _Command_ -- `$e.internal('document/save/set-is-modified')`
*  **Name**: Set-Is-Modified.
*  **Description**: Set modified status.
*  **Returns**: `{void}`

    | Property     | Type                  | Requirement   | Description |
    |---           |---                    |---            |---|
    | _status_     | `{boolean}`           | **require**   | Status to apply.

### [Back](../readme.md) 
