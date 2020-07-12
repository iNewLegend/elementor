# Command
  `$e.data.get('globals/typography')`

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
const promise = $e.data.get( 'globals/typography' );

promise.then( ( result ) => {
    console.log( result.data );
} );

/**
    {
      "primary": {
         "title": "Primary",
         "id": "primary",
         "value": {
            "typography_typography": "custom",
            "typography_font_family": "Purple Purse",
            "typography_font_weight": "600",
            "typography_font_size": {
               "unit": "px",
               "size": "51",
               "sizes": []
            },
            "typography_font_size_tablet": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_font_size_mobile": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_text_transform": "",
            "typography_font_style": "",
            "typography_text_decoration": "",
            "typography_line_height": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_line_height_tablet": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_line_height_mobile": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing_tablet": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing_mobile": {
               "unit": "px",
               "size": "",
               "sizes": []
            }
         }
      },
      "secondary": {
         "title": "Secondary",
         "id": "secondary",
         "value": {
            "typography_typography": "custom",
            "typography_font_family": "Roboto Slab",
            "typography_font_weight": "400",
            "typography_font_size": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_font_size_tablet": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_font_size_mobile": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_text_transform": "",
            "typography_font_style": "",
            "typography_text_decoration": "",
            "typography_line_height": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_line_height_tablet": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_line_height_mobile": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing_tablet": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing_mobile": {
               "unit": "px",
               "size": "",
               "sizes": []
            }
         }
      },
      "text": {
         "title": "Text",
         "id": "text",
         "value": {
            "typography_typography": "custom",
            "typography_font_family": "Roboto",
            "typography_font_weight": "400",
            "typography_font_size": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_font_size_tablet": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_font_size_mobile": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_text_transform": "",
            "typography_font_style": "",
            "typography_text_decoration": "",
            "typography_line_height": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_line_height_tablet": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_line_height_mobile": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing_tablet": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing_mobile": {
               "unit": "px",
               "size": "",
               "sizes": []
            }
         }
      },
      "accent": {
         "title": "Accent",
         "id": "accent",
         "value": {
            "typography_typography": "custom",
            "typography_font_family": "Roboto",
            "typography_font_weight": "500",
            "typography_font_size": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_font_size_tablet": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_font_size_mobile": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_text_transform": "",
            "typography_font_style": "",
            "typography_text_decoration": "",
            "typography_line_height": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_line_height_tablet": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_line_height_mobile": {
               "unit": "em",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing_tablet": {
               "unit": "px",
               "size": "",
               "sizes": []
            },
            "typography_letter_spacing_mobile": {
               "unit": "px",
               "size": "",
               "sizes": []
            }
         }
      }
   }
*/
```
### [Back](usability.index.md) 
