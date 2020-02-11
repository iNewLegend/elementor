
## Component -- `$e.components.get('document/save')`

*  **Name**: Save.
*  **Description**: Provide a way to save the document...

## Component `document/save/` -- Commands
| Command                                                                | Access                                             | Description         
|------------------------------------------------------------------------|----------------------------------------------------|-----------------------------------------
| [Auto](#)                                                              | `$e.run('document/save/auto')`                     | desc.
| [Default](#)                                                           | `$e.run('document/save/default')`                  | desc.
| [Discard](#)                                                           | `$e.run('document/save/discard')`                  | desc.
| [Draft](#)                                                             | `$e.run('document/save/draft')`                    | desc.
| [Pending](#)                                                           | `$e.run('document/save/pending')`                  | desc.
| [Publish](#)                                                           | `$e.run('document/save/publish')`                  | desc.
| [Update](#)                                                            | `$e.run('document/save/udate')`                    | desc.

## Component `document/save/` -- Internal Commands
| Command                                                                | Access                                             | Description         
|------------------------------------------------------------------------|----------------------------------------------------|-----------------------------------------
| [Save](#)                                                              | `$e.internal('document/save/save')`                | desc.
| [Set-Is-Modified](#)                                                   | `$e.internal('document/save/set-is-modifed')`      | desc.

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
