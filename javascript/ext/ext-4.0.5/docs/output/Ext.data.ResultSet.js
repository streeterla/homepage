Ext.data.JsonP.Ext_data_ResultSet({
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
  "html_filename": "ResultSet.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "ResultSet.html#Ext-data-ResultSet",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 16,
        "owner": "Ext.data.ResultSet",
        "html_filename": "ResultSet.html",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-count",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "count",
        "shortDoc": "The number of records in this ResultSet. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/ResultSet.js",
        "doc": "<p>The number of records in this ResultSet. Note that total may differ from this number</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 9,
        "owner": "Ext.data.ResultSet",
        "html_filename": "ResultSet.html",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-loaded",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "loaded",
        "shortDoc": "True if the records have already been loaded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/ResultSet.js",
        "doc": "<p>True if the records have already been loaded. This is only meaningful when dealing with\nSQL-backed proxies</p>\n"
      },
      {
        "static": false,
        "type": "Ext.data.Model[]",
        "inheritable": false,
        "properties": null,
        "linenr": 35,
        "owner": "Ext.data.ResultSet",
        "html_filename": "ResultSet.html",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-records",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "records",
        "shortDoc": "The array of record instances. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/ResultSet.js",
        "doc": "<p>The array of record instances. Required</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 29,
        "owner": "Ext.data.ResultSet",
        "html_filename": "ResultSet.html",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-success",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "success",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/ResultSet.js",
        "doc": "<p>True if the ResultSet loaded successfully, false if any errors were encountered</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 22,
        "owner": "Ext.data.ResultSet",
        "html_filename": "ResultSet.html",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-total",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "total",
        "shortDoc": "The total number of records reported by the data source. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/ResultSet.js",
        "doc": "<p>The total number of records reported by the data source. This ResultSet may form a subset of\nthose records (see count)</p>\n"
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
        "linenr": 39,
        "owner": "Ext.data.ResultSet",
        "html_filename": "ResultSet.html",
        "href": "ResultSet.html#Ext-data-ResultSet-method-constructor",
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
            "doc": "<p>(optional) Config object.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates the resultSet ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/ResultSet.js",
        "doc": "<p>Creates the resultSet</p>\n",
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
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 46,
        "owner": "Ext.data.ResultSet",
        "html_filename": "ResultSet.html",
        "href": "ResultSet.html#Ext-data-ResultSet-property-totalRecords",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "totalRecords",
        "shortDoc": "DEPRECATED - will be removed in Ext JS 5.0. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/ResultSet.js",
        "doc": "<p>DEPRECATED - will be removed in Ext JS 5.0. This is just a copy of this.total - use that instead</p>\n"
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
  "name": "Ext.data.ResultSet",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/ResultSet.js",
  "doc": "<p>Simple wrapper class that represents a set of records returned by a Proxy.</p>\n\n",
  "alternateClassNames": [

  ]
});