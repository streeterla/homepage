Ext.data.JsonP.Ext_JSON({
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
  "html_filename": "JSON3.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "JSON3.html#Ext-JSON",
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
        "linenr": 129,
        "owner": "Ext.JSON",
        "html_filename": "JSON3.html",
        "href": "JSON3.html#Ext-JSON-method-decode",
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
            "name": "json",
            "doc": "<p>The JSON string</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "safe",
            "doc": "<p>(optional) Whether to return null or throw an exception if the JSON is invalid.</p>\n"
          }
        ],
        "alias": null,
        "name": "decode",
        "shortDoc": "Decodes (parses) a JSON string to an object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
        "doc": "<p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The resulting object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 112,
        "owner": "Ext.JSON",
        "html_filename": "JSON3.html",
        "href": "JSON3.html#Ext-JSON-method-encode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>The variable to encode</p>\n"
          }
        ],
        "alias": null,
        "name": "encode",
        "shortDoc": "Encodes an Object, Array or other value ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
        "doc": "<p>Encodes an Object, Array or other value</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The JSON string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 91,
        "owner": "Ext.JSON",
        "html_filename": "JSON3.html",
        "href": "JSON3.html#Ext-JSON-method-encodeDate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Date",
            "properties": [

            ],
            "optional": false,
            "name": "d",
            "doc": "<p>The Date to encode</p>\n"
          }
        ],
        "alias": null,
        "name": "encodeDate",
        "shortDoc": "Encodes a Date. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
        "doc": "<p>Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.\n<b>The returned value includes enclosing double quotation marks.</b></p>\n\n\n<p>The default return format is \"yyyy-mm-ddThh:mm:ss\".</p>\n\n\n<p>To override this:</p>\n\n\n<pre><code>Ext.JSON.encodeDate = function(d) {\n    return Ext.Date.format(d, '\"Y-m-d\"');\n};\n     </code></pre>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The string literal to use in a JSON string.</p>\n"
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
  "name": "Ext.JSON",
  "mixins": [

  ],
  "code_type": "assignment",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
  "doc": "<p>Modified version of Douglas Crockford\"s json.js that doesn\"t\nmess with the Object prototype\nhttp://www.json.org/js.html</p>\n",
  "alternateClassNames": [

  ]
});