# Globals/ - Usability index
*  **Name**: Globals.
*  **Description**: Globals data manipulation.

## Component `globals` -- `$e.data` Commands
| Command                                                | Type     | Access                                  | Description         
|--------------------------------------------------------|----------|-----------------------------------------|--------------------
| [Index](commands/index/usability.md)                   | `get`    | `$e.data.get('globals/index')`          | Get all *globals* data. 
| |
| [Colors](#)                  | `create` | `$e.data.create('globals/colors')`      | Create color. 
|                                                        | `get`    | `$e.data.get('globals/colors')`         | Get colors. 
| |
| [Typography](#)              | `create` | `$e.data.create('globals/colors')`      | Create typography. 
|                                                        | `get`    | `$e.data.get('globals/colors')`         | Get typography. 

## All **globals** components
| Component Name                                       | Access Component                          | Description         
|------------------------------------------------------|-------------------------------------------|--------------------
| [Colors](colors/commands/usability.index.md)         | `$e.components.get('globals/colors')`     | Globals colors. 
| [Typography](typography/commands/usability.index.md) | `$e.components.get('globals/typography')` | Globals typography.
