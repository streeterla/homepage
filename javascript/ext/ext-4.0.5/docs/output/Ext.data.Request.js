Ext.data.JsonP.Ext_data_Request({
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
  "html_filename": "Request.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Request.html#Ext-data-Request",
  "subclasses": [

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
        "linenr": 12,
        "owner": "Ext.data.Request",
        "html_filename": "Request.html",
        "href": "Request.html#Ext-data-Request-cfg-action",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "action",
        "shortDoc": "The name of the action this Request represents. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Request.js",
        "doc": "<p>The name of the action this Request represents. Usually one of 'create', 'read', 'update' or 'destroy'</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 22,
        "owner": "Ext.data.Request",
        "html_filename": "Request.html",
        "href": "Request.html#Ext-data-Request-cfg-method",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "method",
        "shortDoc": "The HTTP method to use on this Request (defaults to 'GET'). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Request.js",
        "doc": "<p>The HTTP method to use on this Request (defaults to 'GET'). Should be one of 'GET', 'POST', 'PUT' or 'DELETE'</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 17,
        "owner": "Ext.data.Request",
        "html_filename": "Request.html",
        "href": "Request.html#Ext-data-Request-cfg-params",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "params",
        "shortDoc": "HTTP request params. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Request.js",
        "doc": "<p>HTTP request params. The Proxy and its Writer have access to and can modify this object.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 27,
        "owner": "Ext.data.Request",
        "html_filename": "Request.html",
        "href": "Request.html#Ext-data-Request-cfg-url",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "url",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Request.js",
        "doc": "<p>The url to access on this Request</p>\n"
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
        "linenr": 32,
        "owner": "Ext.data.Request",
        "html_filename": "Request.html",
        "href": "Request.html#Ext-data-Request-method-constructor",
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
        "shortDoc": "Creates the Request object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Request.js",
        "doc": "<p>Creates the Request object.</p>\n",
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
  "author": "Ed Spencer",
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.data.Request",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Request.js",
  "doc": "<p>Simple class that represents a Request that will be made by any <a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a> subclass.\nAll this class does is standardize the representation of a Request as used by any ServerProxy subclass,\nit does not contain any actual logic or perform the request itself.</p>\n\n",
  "alternateClassNames": [

  ]
});