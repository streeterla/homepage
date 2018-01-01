Ext.data.JsonP.Ext_util_Sorter({
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
  "html_filename": "Sorter.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Sorter.html#Ext-util-Sorter",
  "subclasses": [
    "Ext.util.Grouper"
  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 87,
        "owner": "Ext.util.Sorter",
        "html_filename": "Sorter.html",
        "href": "Sorter.html#Ext-util-Sorter-cfg-direction",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "direction",
        "shortDoc": "The direction to sort by. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sorter.js",
        "doc": "<p>The direction to sort by. Defaults to ASC</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 59,
        "owner": "Ext.util.Sorter",
        "html_filename": "Sorter.html",
        "href": "Sorter.html#Ext-util-Sorter-cfg-property",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "property",
        "shortDoc": "The property to sort by. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sorter.js",
        "doc": "<p>The property to sort by. Required unless <a href=\"#/api/Ext.util.Sorter-cfg-sorterFn\" rel=\"Ext.util.Sorter-cfg-sorterFn\" class=\"docClass\">sorterFn</a> is provided.\nThe property is extracted from the object directly and compared for sorting using the built in\ncomparison operators.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 76,
        "owner": "Ext.util.Sorter",
        "html_filename": "Sorter.html",
        "href": "Sorter.html#Ext-util-Sorter-cfg-root",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "root",
        "shortDoc": "Optional root property. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sorter.js",
        "doc": "<p>Optional root property. This is mostly useful when sorting a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n"
      },
      {
        "static": false,
        "type": "Function",
        "inheritable": false,
        "properties": null,
        "linenr": 65,
        "owner": "Ext.util.Sorter",
        "html_filename": "Sorter.html",
        "href": "Sorter.html#Ext-util-Sorter-cfg-sorterFn",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "sorterFn",
        "shortDoc": "A specific sorter function to execute. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sorter.js",
        "doc": "<p>A specific sorter function to execute. Can be passed instead of <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">property</a>.\nThis sorter function allows for any kind of custom/complex comparisons.\nThe sorterFn receives two arguments, the objects being compared. The function should return:</p>\n\n<ul>\n<li>-1 if o1 is \"less than\" o2</li>\n<li>0 if o1 is \"equal\" to o2</li>\n<li>1 if o1 is \"greater than\" o2</li>\n</ul>\n\n"
      },
      {
        "static": false,
        "type": "Function",
        "inheritable": false,
        "properties": null,
        "linenr": 81,
        "owner": "Ext.util.Sorter",
        "html_filename": "Sorter.html",
        "href": "Sorter.html#Ext-util-Sorter-cfg-transform",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "transform",
        "shortDoc": "A function that will be run on each value before\nit is compared in the sorter. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sorter.js",
        "doc": "<p>A function that will be run on each value before\nit is compared in the sorter. The function will receive a single argument,\nthe value.</p>\n"
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
        "linenr": 152,
        "owner": "Ext.util.Sorter",
        "html_filename": "Sorter.html",
        "href": "Sorter.html#Ext-util-Sorter-method-setDirection",
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
            "name": "direction",
            "doc": "<p>The direction to sort in. Should be either 'ASC' or 'DESC'.</p>\n"
          }
        ],
        "alias": null,
        "name": "setDirection",
        "shortDoc": "Set the sorting direction for this sorter. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sorter.js",
        "doc": "<p>Set the sorting direction for this sorter.</p>\n",
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
        "linenr": 162,
        "owner": "Ext.util.Sorter",
        "html_filename": "Sorter.html",
        "href": "Sorter.html#Ext-util-Sorter-method-toggle",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "toggle",
        "shortDoc": "Toggles the sorting direction for this sorter. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sorter.js",
        "doc": "<p>Toggles the sorting direction for this sorter.</p>\n",
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
        "linenr": 171,
        "owner": "Ext.util.Sorter",
        "html_filename": "Sorter.html",
        "href": "Sorter.html#Ext-util-Sorter-method-updateSortFunction",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(Optional) A new sorter function for this sorter. If not specified it will use the\ndefault sorting function.</p>\n"
          }
        ],
        "alias": null,
        "name": "updateSortFunction",
        "shortDoc": "Update the sort function for this sorter. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sorter.js",
        "doc": "<p>Update the sort function for this sorter.</p>\n",
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
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.util.Sorter",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sorter.js",
  "doc": "<p>Represents a single sorter that can be applied to a Store. The sorter is used\nto compare two values against each other for the purpose of ordering them. Ordering\nis achieved by specifying either:\n- <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">A sorting property</a>\n- <a href=\"#/api/Ext.util.Sorter-cfg-sorterFn\" rel=\"Ext.util.Sorter-cfg-sorterFn\" class=\"docClass\">A sorting function</a></p>\n\n<p>As a contrived example, we can specify a custom sorter that sorts by rank:</p>\n\n<pre><code>Ext.define('Person', {\n    extend: 'Ext.data.Model',\n    fields: ['name', 'rank']\n});\n\nExt.create('Ext.data.Store', {\n    model: 'Person',\n    proxy: 'memory',\n    sorters: [{\n        sorterFn: function(o1, o2){\n            var getRank = function(o){\n                var name = o.get('rank');\n                if (name === 'first') {\n                    return 1;\n                } else if (name === 'second') {\n                    return 2;\n                } else {\n                    return 3;\n                }\n            },\n            rank1 = getRank(o1),\n            rank2 = getRank(o2);\n\n            if (rank1 === rank2) {\n                return 0;\n            }\n\n            return rank1 &lt; rank2 ? -1 : 1;\n        }\n    }],\n    data: [{\n        name: 'Person1',\n        rank: 'second'\n    }, {\n        name: 'Person2',\n        rank: 'third'\n    }, {\n        name: 'Person3',\n        rank: 'first'\n    }] \n});\n</code></pre>\n",
  "alternateClassNames": [

  ]
});