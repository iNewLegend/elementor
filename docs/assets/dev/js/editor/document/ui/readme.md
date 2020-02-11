
## Component -- `$e.components.get('document/ui')`

*  **Name**: UI.
*  **Description**: 

## Component `document/ui/` -- Commands
| Command                                                                | Access                                             | Description         
|------------------------------------------------------------------------|----------------------------------------------------|-----------------------------------------
| [Copy](#)                                                              | `$e.run('document/ui/copy')`                       | Desc.
| [Delete](#)                                                            | `$e.run('document/ui/delete')`                     | Desc.
| [Duplicate](#)                                                         | `$e.run('document/ui/duplicate')`                  | Desc.
| [Paste](#)                                                             | `$e.run('document/ui/paste')`                      | Desc.
| [Paste-Style](#)                                                       | `$e.run('document/ui/paste-style')`                | Desc.

## _Command_ -- `$e.run('document/ui/copy')`
*  **Name**: Copy.
*  **Description**: Copy current selected element.
*  **Returns**: `{ false | Container | Array.<Container>}` *Copied container(s)*.

## _Command_ -- `$e.run('document/ui/delete')`
*  **Name**: Delete.
*  **Description**: Delete current selected element.
*  **Returns**: `{ false | Container | Array.<Container>}` *Deleted container(s)*.

## _Command_ -- `$e.run('document/ui/duplicate')`
*  **Name**: Duplicate.
*  **Description**: Duplicate current selected element.
*  **Returns**: `{ false | Container | Array.<Container>}` *Duplicated container(s)*.

## _Command_ -- `$e.run('document/ui/paste')`
*  **Name**: Paste.
*  **Description**: Paste to current selected element.
*  **Returns**: `{ false | Container | Array.<Container>}` *Pasted container(s)*.

## _Command_ -- `$e.run('document/ui/paste-style')`
*  **Name**: Paste-Style.
*  **Description**: Paste style to current selected element.
*  **Returns**: `{ false | Container | Array.<Container>}` *Pasted container(s)*.
