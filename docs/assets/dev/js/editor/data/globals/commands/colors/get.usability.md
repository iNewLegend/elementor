# Command
  `$e.data.get('globals/colors')`

### User Action / Area of effect
    Readonly data.
     
### Effect
    Get data from $e.data.cache or remote.

## Input
    No addtional inputs.

## Output
    Promise

## Example
```javascript
const promise = $e.data.get( 'globals/colors' );

promise.then( ( result ) => {
    console.log( result.data );
} );

/**
{
      "primary": {
         "id": "primary",
         "title": "Primary",
         "value": "#6EC1E4"
      },
      "secondary": {
         "id": "secondary",
         "title": "Secondary",
         "value": "#54595F"
      },
      "text": {
         "id": "text",
         "title": "Text",
         "value": "#7A7A7A"
      },
      "accent": {
         "id": "accent",
         "title": "Accent",
         "value": "#61CE70"
      }
   }
}
*/
```
### [Back](usability.index.md) 
