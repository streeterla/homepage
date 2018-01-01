Ext.data.JsonP.Ext_util_Filter({
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
  "html_filename": "Filter.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Filter.html#Ext-util-Filter",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 51,
        "owner": "Ext.util.Filter",
        "html_filename": "Filter.html",
        "href": "Filter.html#Ext-util-Filter-cfg-anyMatch",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "anyMatch",
        "shortDoc": "True to allow any match - no regex start/end line anchors will be added. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Filter.js",
        "doc": "<p>True to allow any match - no regex start/end line anchors will be added. Defaults to false</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 62,
        "owner": "Ext.util.Filter",
        "html_filename": "Filter.html",
        "href": "Filter.html#Ext-util-Filter-cfg-caseSensitive",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "caseSensitive",
        "shortDoc": "True to make the regex case sensitive (adds 'i' switch to regex). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Filter.js",
        "doc": "<p>True to make the regex case sensitive (adds 'i' switch to regex). Defaults to false.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 56,
        "owner": "Ext.util.Filter",
        "html_filename": "Filter.html",
        "href": "Filter.html#Ext-util-Filter-cfg-exactMatch",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "exactMatch",
        "shortDoc": "True to force exact match (^ and $ characters added to the regex). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Filter.js",
        "doc": "<p>True to force exact match (^ and $ characters added to the regex). Defaults to false.\nIgnored if anyMatch is true.</p>\n"
      },
      {
        "static": false,
        "type": "Function",
        "inheritable": false,
        "properties": null,
        "linenr": 46,
        "owner": "Ext.util.Filter",
        "html_filename": "Filter.html",
        "href": "Filter.html#Ext-util-Filter-cfg-filterFn",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "filterFn",
        "shortDoc": "A custom filter function which is passed each item in the Ext.util.MixedCollection\nin turn. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Filter.js",
        "doc": "<p>A custom filter function which is passed each item in the <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>\nin turn. Should return true to accept each item or false to reject it</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 42,
        "owner": "Ext.util.Filter",
        "html_filename": "Filter.html",
        "href": "Filter.html#Ext-util-Filter-cfg-property",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "property",
        "shortDoc": "The property to filter on. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Filter.js",
        "doc": "<p>The property to filter on. Required unless a <a href=\"#/api/Ext.util.Filter-cfg-filterFn\" rel=\"Ext.util.Filter-cfg-filterFn\" class=\"docClass\">filterFn</a> is passed</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 67,
        "owner": "Ext.util.Filter",
        "html_filename": "Filter.html",
        "href": "Filter.html#Ext-util-Filter-cfg-root",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "root",
        "shortDoc": "Optional root property. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Filter.js",
        "doc": "<p>Optional root property. This is mostly useful when filtering a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Filter-cfg-property\" rel=\"Ext.util.Filter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [

    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 72,
        "owner": "Ext.util.Filter",
        "html_filename": "Filter.html",
        "href": "Filter.html#Ext-util-Filter-method-constructor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "config",
            "doc": "<p>(optional) Config object</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates new Filter. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Filter.js",
        "doc": "<p>Creates new Filter.</p>\n",
        "return": {
          "type": "Object",
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
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.util.Filter",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Filter.js",
  "doc": "<p>Represents a filter that can be applied to a <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. Can either simply\nfilter on a property/value pair or pass in a filter function with custom logic. Filters are always used in the context\nof MixedCollections, though <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>s frequently create them when filtering and searching on their\nrecords. Example usage:</p>\n\n\n<pre><code>//set up a fictional MixedCollection containing a few people to filter on\nvar allNames = new Ext.util.MixedCollection();\nallNames.addAll([\n    {id: 1, name: 'Ed',    age: 25},\n    {id: 2, name: 'Jamie', age: 37},\n    {id: 3, name: 'Abe',   age: 32},\n    {id: 4, name: 'Aaron', age: 26},\n    {id: 5, name: 'David', age: 32}\n]);\n\nvar ageFilter = new Ext.util.Filter({\n    property: 'age',\n    value   : 32\n});\n\nvar longNameFilter = new Ext.util.Filter({\n    filterFn: function(item) {\n        return item.name.length > 4;\n    }\n});\n\n//a new MixedCollection with the 3 names longer than 4 characters\nvar longNames = allNames.filter(longNameFilter);\n\n//a new MixedCollection with the 2 people of age 24:\nvar youngFolk = allNames.filter(ageFilter);\n</code></pre>\n\n",
  "alternateClassNames": [

  ]
});