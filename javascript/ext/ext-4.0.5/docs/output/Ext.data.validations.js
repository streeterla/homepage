Ext.data.JsonP.Ext_data_validations({
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
  "extends": "Object",
  "html_filename": "validations.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "validations.html#Ext-data-validations",
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
        "linenr": 113,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-method-exclusion",
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
            "name": "config",
            "doc": "<p>Config object</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to validate</p>\n"
          }
        ],
        "alias": null,
        "name": "exclusion",
        "shortDoc": "Validates that the given value is present in the configured list. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'exclusion', field: 'username', list: ['Admin', 'Operator']}]\n</code></pre>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the value is not present in the list</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 85,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-method-format",
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
            "name": "config",
            "doc": "<p>Config object</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to validate</p>\n"
          }
        ],
        "alias": null,
        "name": "format",
        "shortDoc": "Returns true if the given value passes validation against the configured matcher regex. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>Returns true if the given value passes validation against the configured <code>matcher</code> regex.\nFor example:</p>\n\n<pre><code>validations: [{type: 'format', field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}]\n</code></pre>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the value passes the format validation</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 99,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-method-inclusion",
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
            "name": "config",
            "doc": "<p>Config object</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to validate</p>\n"
          }
        ],
        "alias": null,
        "name": "inclusion",
        "shortDoc": "Validates that the given value is present in the configured list. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'inclusion', field: 'gender', list: ['Male', 'Female']}]\n</code></pre>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the value is present in the list</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 59,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-method-length",
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
            "name": "config",
            "doc": "<p>Config object</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to validate</p>\n"
          }
        ],
        "alias": null,
        "name": "length",
        "shortDoc": "Returns true if the given value is between the configured min and max values. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>Returns true if the given value is between the configured min and max values.\nFor example:</p>\n\n<pre><code>validations: [{type: 'length', field: 'name', min: 2}]\n</code></pre>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the value passes validation</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 41,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-method-presence",
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
            "name": "config",
            "doc": "<p>Config object</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to validate</p>\n"
          }
        ],
        "alias": null,
        "name": "presence",
        "shortDoc": "Validates that the given value is present. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>Validates that the given value is present.\nFor example:</p>\n\n<pre><code>validations: [{type: 'presence', field: 'age'}]\n</code></pre>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if validation passed</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 35,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-property-exclusionMessage",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "exclusionMessage",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>The default error message used when an exclusion validation fails.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 23,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-property-formatMessage",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "formatMessage",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>The default error message used when a format validation fails.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 29,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-property-inclusionMessage",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "inclusionMessage",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>The default error message used when an inclusion validation fails.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 17,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-property-lengthMessage",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "lengthMessage",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>The default error message used when a length validation fails.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 11,
        "owner": "Ext.data.validations",
        "html_filename": "validations.html",
        "href": "validations.html#Ext-data-validations-property-presenceMessage",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "presenceMessage",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
        "doc": "<p>The default error message used when a presence validation fails.</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": "Ed Spencer",
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.data.validations",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/validations.js",
  "doc": "<p>This singleton contains a set of validation functions that can be used to validate any type of data. They are most\noften used in <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>, where they are automatically set up and executed.</p>\n",
  "alternateClassNames": [

  ]
});