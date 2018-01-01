Ext.data.JsonP.Ext_Number({
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
  "html_filename": "Number3.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Number3.html#Ext-Number",
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
        "linenr": 13,
        "owner": "Ext.Number",
        "html_filename": "Number3.html",
        "href": "Number3.html#Ext-Number-method-constrain",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "number",
            "doc": "<p>The number to check</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "min",
            "doc": "<p>The minimum number in the range</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "max",
            "doc": "<p>The maximum number in the range</p>\n"
          }
        ],
        "alias": null,
        "name": "constrain",
        "shortDoc": "Checks whether or not the passed number is within a desired range. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Number.js",
        "doc": "<p>Checks whether or not the passed number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The constrained value if outside the range, otherwise the current value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 76,
        "owner": "Ext.Number",
        "html_filename": "Number3.html",
        "href": "Number3.html#Ext-Number-method-from",
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
            "name": "value",
            "doc": "\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "defaultValue",
            "doc": "<p>The value to return if the original value is non-numeric</p>\n"
          }
        ],
        "alias": null,
        "name": "from",
        "shortDoc": "Validate that a value is numeric and convert it to a number if necessary. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Number.js",
        "doc": "<p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<p>Ext.Number.from('1.23', 1); // returns 1.23\nExt.Number.from('abc', 1); // returns 1</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>value, if numeric, defaultValue otherwise</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 34,
        "owner": "Ext.Number",
        "html_filename": "Number3.html",
        "href": "Number3.html#Ext-Number-method-snap",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The unsnapped value.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "increment",
            "doc": "<p>The increment by which the value must move.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "minValue",
            "doc": "<p>The minimum value to which the returned value must be constrained. Overrides the increment..</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "maxValue",
            "doc": "<p>The maximum value to which the returned value must be constrained. Overrides the increment..</p>\n"
          }
        ],
        "alias": null,
        "name": "snap",
        "shortDoc": "Snaps the passed number between stopping points based upon a passed increment value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Number.js",
        "doc": "<p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The value of the nearest snap target.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 61,
        "owner": "Ext.Number",
        "html_filename": "Number3.html",
        "href": "Number3.html#Ext-Number-method-toFixed",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The number to format</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "precision",
            "doc": "<p>The number of digits to show after the decimal point</p>\n"
          }
        ],
        "alias": null,
        "name": "toFixed",
        "shortDoc": "Formats a number using fixed-point notation ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Number.js",
        "doc": "<p>Formats a number using fixed-point notation</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
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
  "name": "Ext.Number",
  "mixins": [

  ],
  "code_type": "nop",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Number.js",
  "doc": "<p>A collection of useful static methods to deal with numbers</p>\n",
  "alternateClassNames": [

  ]
});