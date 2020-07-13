# Command
  `$e.data.get('globals/colors')`

### User Action / Area of effect
    Readonly data.
     
### Effect
    Get data from $e.data.cache or remote.

## Input
* Query params

| Property          | Type                  | Requirement   | Description |
|---                |---                    |---            |---|
| _id_              | `{String}`            | **optional**  | ID for specific item.
   `$e.data.get('globals/colors?id={{ YOUR ID }}')`

## Output
    Promise

## Example all colors
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
## Example get primary color
```javascript
result = await $e.data.get( 'globals/colors?id=primary' );
console.log( result.data ); 

// {id: "primary", title: "Primary", value: "#6EC1E4"}.
```
### [Back](usability.index.md) 
