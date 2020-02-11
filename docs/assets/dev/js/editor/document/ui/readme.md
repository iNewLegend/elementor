
## Component -- `$e.components.get('document/ui')`

*  **Name**: UI.
*  **Description**: Wrapper for some of the `document/elements` commands, that effect on current selected element.

## Component `document/ui/` -- Commands
| Command                                                                | Access                                             | Description         
|------------------------------------------------------------------------|----------------------------------------------------|-----------------------------------------
| [Copy](#command----erundocumentuicopy)                                 | `$e.run('document/ui/copy')`                       | Copy current selected element.
| [Delete](#command----erundocumentuidelete)                             | `$e.run('document/ui/delete')`                     | Delete current selected element..
| [Duplicate](#command----erundocumentuiduplicate)                       | `$e.run('document/ui/duplicate')`                  | Duplicate current selected element.
| [Paste](#command----erundocumentuipaste)                               | `$e.run('document/ui/paste')`                      | Paste to current selected element..
| [Paste-Style](#command----erundocumentuipaste-style)                   | `$e.run('document/ui/paste-style')`                | Paste style to current selected element..

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

### [Back](../readme.md) 
