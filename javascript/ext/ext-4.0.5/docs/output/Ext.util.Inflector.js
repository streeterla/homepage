Ext.data.JsonP.Ext_util_Inflector({
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
  "html_filename": "Inflector.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Inflector.html#Ext-util-Inflector",
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
        "linenr": 234,
        "owner": "Ext.util.Inflector",
        "html_filename": "Inflector.html",
        "href": "Inflector.html#Ext-util-Inflector-method-classify",
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
            "name": "word",
            "doc": "<p>The word to classify</p>\n"
          }
        ],
        "alias": null,
        "name": "classify",
        "shortDoc": "Returns the correct Model name for a given string. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
        "doc": "<p>Returns the correct <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> name for a given string. Mostly used internally by the data\npackage</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The classified version of the word</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 166,
        "owner": "Ext.util.Inflector",
        "html_filename": "Inflector.html",
        "href": "Inflector.html#Ext-util-Inflector-method-clearPlurals",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearPlurals",
        "shortDoc": "Removes all registered pluralization rules ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
        "doc": "<p>Removes all registered pluralization rules</p>\n",
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
        "linenr": 159,
        "owner": "Ext.util.Inflector",
        "html_filename": "Inflector.html",
        "href": "Inflector.html#Ext-util-Inflector-method-clearSingulars",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearSingulars",
        "shortDoc": "Removes all registered singularization rules ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
        "doc": "<p>Removes all registered singularization rules</p>\n",
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
        "linenr": 173,
        "owner": "Ext.util.Inflector",
        "html_filename": "Inflector.html",
        "href": "Inflector.html#Ext-util-Inflector-method-isTransnumeral",
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
            "name": "word",
            "doc": "<p>The word to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isTransnumeral",
        "shortDoc": "Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
        "doc": "<p>Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. sheep, fish)</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the word is transnumeral</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 244,
        "owner": "Ext.util.Inflector",
        "html_filename": "Inflector.html",
        "href": "Inflector.html#Ext-util-Inflector-method-ordinalize",
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
            "doc": "<p>The number to ordinalize</p>\n"
          }
        ],
        "alias": null,
        "name": "ordinalize",
        "shortDoc": "Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
        "doc": "<p>Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. 21 -> 21st, 22 -> 22nd, 23 -> 23rd, 24 -> 24th etc</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The ordinalized number</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 150,
        "owner": "Ext.util.Inflector",
        "html_filename": "Inflector.html",
        "href": "Inflector.html#Ext-util-Inflector-method-plural",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "RegExp",
            "properties": [

            ],
            "optional": false,
            "name": "matcher",
            "doc": "<p>The matcher regex</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "replacer",
            "doc": "<p>The replacement string, which can reference matches from the matcher argument</p>\n"
          }
        ],
        "alias": null,
        "name": "plural",
        "shortDoc": "Adds a new pluralization rule to the Inflector. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
        "doc": "<p>Adds a new pluralization rule to the Inflector. See the intro docs for more information</p>\n",
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
        "linenr": 182,
        "owner": "Ext.util.Inflector",
        "html_filename": "Inflector.html",
        "href": "Inflector.html#Ext-util-Inflector-method-pluralize",
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
            "name": "word",
            "doc": "<p>The word to pluralize</p>\n"
          }
        ],
        "alias": null,
        "name": "pluralize",
        "shortDoc": "Returns the pluralized form of a word (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
        "doc": "<p>Returns the pluralized form of a word (e.g. Ext.util.Inflector.pluralize('word') returns 'words')</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The pluralized form of the word</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 141,
        "owner": "Ext.util.Inflector",
        "html_filename": "Inflector.html",
        "href": "Inflector.html#Ext-util-Inflector-method-singular",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "RegExp",
            "properties": [

            ],
            "optional": false,
            "name": "matcher",
            "doc": "<p>The matcher regex</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "replacer",
            "doc": "<p>The replacement string, which can reference matches from the matcher argument</p>\n"
          }
        ],
        "alias": null,
        "name": "singular",
        "shortDoc": "Adds a new singularization rule to the Inflector. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
        "doc": "<p>Adds a new singularization rule to the Inflector. See the intro docs for more information</p>\n",
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
        "linenr": 208,
        "owner": "Ext.util.Inflector",
        "html_filename": "Inflector.html",
        "href": "Inflector.html#Ext-util-Inflector-method-singularize",
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
            "name": "word",
            "doc": "<p>The word to singularize</p>\n"
          }
        ],
        "alias": null,
        "name": "singularize",
        "shortDoc": "Returns the singularized form of a word (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
        "doc": "<p>Returns the singularized form of a word (e.g. Ext.util.Inflector.singularize('words') returns 'word')</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The singularized form of the word</p>\n"
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
  "name": "Ext.util.Inflector",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Inflector.js",
  "doc": "<p>General purpose inflector class that <a href=\"#/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">pluralizes</a>, <a href=\"#/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">singularizes</a> and\n<a href=\"#/api/Ext.util.Inflector-method-ordinalize\" rel=\"Ext.util.Inflector-method-ordinalize\" class=\"docClass\">ordinalizes</a> words. Sample usage:</p>\n\n\n\n\n<pre><code>//turning singular words into plurals\nExt.util.Inflector.pluralize('word'); //'words'\nExt.util.Inflector.pluralize('person'); //'people'\nExt.util.Inflector.pluralize('sheep'); //'sheep'\n\n//turning plurals into singulars\nExt.util.Inflector.singularize('words'); //'word'\nExt.util.Inflector.singularize('people'); //'person'\nExt.util.Inflector.singularize('sheep'); //'sheep'\n\n//ordinalizing numbers\nExt.util.Inflector.ordinalize(11); //\"11th\"\nExt.util.Inflector.ordinalize(21); //\"21th\"\nExt.util.Inflector.ordinalize(1043); //\"1043rd\"\n</code></pre>\n\n\n\n\n<p><u>Customization</u></p>\n\n\n\n\n<p>The Inflector comes with a default set of US English pluralization rules. These can be augmented with additional\nrules if the default rules do not meet your application's requirements, or swapped out entirely for other languages.\nHere is how we might add a rule that pluralizes \"ox\" to \"oxen\":</p>\n\n\n\n\n<pre><code>Ext.util.Inflector.plural(/^(ox)$/i, \"$1en\");\n</code></pre>\n\n\n\n\n<p>Each rule consists of two items - a regular expression that matches one or more rules, and a replacement string.\nIn this case, the regular expression will only match the string \"ox\", and will replace that match with \"oxen\".\nHere's how we could add the inverse rule:</p>\n\n\n\n\n<pre><code>Ext.util.Inflector.singular(/^(ox)en$/i, \"$1\");\n</code></pre>\n\n\n\n\n<p>Note that the ox/oxen rules are present by default.</p>\n\n",
  "alternateClassNames": [

  ]
});