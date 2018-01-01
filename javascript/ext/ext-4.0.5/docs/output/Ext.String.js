Ext.data.JsonP.Ext_String({
  "static": false,
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ],
  "linenr": 1,
  "statics": {
    "css_var": [

    ],
    "cfg": [

    ],
    "css_mixin": [

    ],
    "event": [

    ],
    "method": [

    ],
    "property": [

    ]
  },
  "extends": null,
  "html_filename": "String.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "String.html#Ext-String",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [

    ],
    "css_mixin": [

    ],
    "event": [

    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 101,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-capitalize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "string",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "capitalize",
        "shortDoc": "Capitalize the given string ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Capitalize the given string</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 110,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-ellipsis",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The string to truncate</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "length",
            "doc": "<p>The maximum length to allow before truncating</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "word",
            "doc": "<p>True to try to find a common word break</p>\n"
          }
        ],
        "alias": null,
        "name": "ellipsis",
        "shortDoc": "Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The converted text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 140,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-escape",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "string",
            "doc": "<p>The string to escape</p>\n"
          }
        ],
        "alias": null,
        "name": "escape",
        "shortDoc": "Escapes the passed string for ' and \\ ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Escapes the passed string for ' and \\</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The escaped string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 131,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-escapeRegex",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "string",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "escapeRegex",
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 192,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-format",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "string",
            "doc": "<p>The tokenized string to be formatted</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value1",
            "doc": "<p>The value to replace token {0}</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value2",
            "doc": "<p>Etc...</p>\n"
          }
        ],
        "alias": null,
        "name": "format",
        "shortDoc": "Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = Ext.String.format('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\">Some text&lt;/div>'\n       </code></pre>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The formatted string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 41,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-htmlDecode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The string to decode</p>\n"
          }
        ],
        "alias": null,
        "name": "htmlDecode",
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and \") from their HTML character equivalents. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and \") from their HTML character equivalents.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The decoded text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 14,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-htmlEncode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The string to encode</p>\n"
          }
        ],
        "alias": null,
        "name": "htmlEncode",
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and \") to their HTML character equivalents for literal display in web pages. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and \") to their HTML character equivalents for literal display in web pages.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The encoded text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 170,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-leftPad",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "string",
            "doc": "<p>The original string</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "size",
            "doc": "<p>The total length of the output string</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "character",
            "doc": "<p>(optional) The character with which to pad the original string (defaults to empty string \" \")</p>\n"
          }
        ],
        "alias": null,
        "name": "leftPad",
        "shortDoc": "Pads the left side of a string with a specified character. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = Ext.String.leftPad('123', 5, '0');\n// s now contains the string: '00123'\n       </code></pre>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The padded string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 212,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-repeat",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "pattern",
            "doc": "<p>The pattern to repeat.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "count",
            "doc": "<p>The number of times to repeat the pattern (may be 0).</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "sep",
            "doc": "<p>An option string to separate each pattern.</p>\n"
          }
        ],
        "alias": null,
        "name": "repeat",
        "shortDoc": "Returns a string with a specified number of repititions a given string pattern. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Returns a string with a specified number of repititions a given string pattern.\nThe pattern be separated by a different string.</p>\n\n<pre><code> var s = Ext.String.repeat('---', 4); // = '------------'\n var t = Ext.String.repeat('--', 3, '/'); // = '--/--/--'\n</code></pre>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 149,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-toggle",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "string",
            "doc": "<p>The current string</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to compare to the current string</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "other",
            "doc": "<p>The new value to use if the string already equals the first value passed in</p>\n"
          }
        ],
        "alias": null,
        "name": "toggle",
        "shortDoc": "Utility function that allows you to easily switch a string between two alternating values. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Utility function that allows you to easily switch a string between two alternating values.  The passed value\nis compared to the current string, and if they are equal, the other value that was passed in is returned.  If\nthey are already different, the first value passed in is returned.  Note that this method returns the new value\nbut does not change the current string.</p>\n\n<pre><code>    // alternate sort directions\n    sort = Ext.String.toggle(sort, 'ASC', 'DESC');\n\n    // instead of conditional logic:\n    sort = (sort == 'ASC' ? 'DESC' : 'ASC');\n       </code></pre>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The new value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 87,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-trim",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "string",
            "doc": "<p>The string to escape</p>\n"
          }
        ],
        "alias": null,
        "name": "trim",
        "shortDoc": "Trims whitespace from either end of a string, leaving spaces within the string intact. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:\n@example\nvar s = '  foo bar  ';\nalert('-' + s + '-');         //alerts \"- foo bar -\"\nalert('-' + Ext.String.trim(s) + '-');  //alerts \"-foo bar-\"</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The trimmed string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 72,
        "owner": "Ext.String",
        "html_filename": "String.html",
        "href": "String.html#Ext-String-method-urlAppend",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "url",
            "doc": "<p>The URL to append to.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "string",
            "doc": "<p>The content to append to the URL.</p>\n"
          }
        ],
        "alias": null,
        "name": "urlAppend",
        "shortDoc": "Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
        "doc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>(String) The resulting URL</p>\n"
        }
      }
    ],
    "property": [

    ]
  },
  "deprecated": null,
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.String",
  "mixins": [

  ],
  "code_type": "assignment",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/String.js",
  "doc": "<p>A collection of useful static methods to deal with strings</p>\n",
  "alternateClassNames": [

  ]
});