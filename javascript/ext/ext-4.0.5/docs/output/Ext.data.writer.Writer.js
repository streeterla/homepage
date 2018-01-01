Ext.data.JsonP.Ext_data_writer_Writer({
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
  "html_filename": "Writer.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Writer.html#Ext-data-writer-Writer",
  "subclasses": [
    "Ext.data.writer.Json",
    "Ext.data.writer.Xml"
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
        "linenr": 29,
        "owner": "Ext.data.writer.Writer",
        "html_filename": "Writer.html",
        "href": "Writer.html#Ext-data-writer-Writer-cfg-nameProperty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "nameProperty",
        "shortDoc": "This property is used to read the key for each value that will be sent to the server. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
        "doc": "<p>This property is used to read the key for each value that will be sent to the server.\nFor example:</p>\n\n<pre><code>Ext.define('Person', {\n    extend: 'Ext.data.Model',\n    fields: [{\n        name: 'first',\n        mapping: 'firstName'\n    }, {\n        name: 'last',\n        mapping: 'lastName'\n    }, {\n        name: 'age'\n    }]\n});\nnew Ext.data.writer.Writer({\n    writeAllFields: true,\n    nameProperty: 'mapping'\n});\n\n// This will be sent to the server\n{\n    firstName: 'first name value',\n    lastName: 'last name value',\n    age: 1\n}\n\n</code></pre>\n\n\n<p>Defaults to <tt>name</tt>. If the value is not present, the field name will always be used.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 22,
        "owner": "Ext.data.writer.Writer",
        "html_filename": "Writer.html",
        "href": "Writer.html#Ext-data-writer-Writer-cfg-writeAllFields",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "writeAllFields",
        "shortDoc": "True to write all fields from the record to the server. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
        "doc": "<p>True to write all fields from the record to the server. If set to false it\nwill only send the fields that were modified. Defaults to <tt>true</tt>. Note that any fields that have\n<a href=\"#/api/Ext.data.Field-cfg-persist\" rel=\"Ext.data.Field-cfg-persist\" class=\"docClass\">Ext.data.Field.persist</a> set to false will still be ignored.</p>\n"
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
        "linenr": 62,
        "owner": "Ext.data.writer.Writer",
        "html_filename": "Writer.html",
        "href": "Writer.html#Ext-data-writer-Writer-method-constructor",
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
        "shortDoc": "Creates new Writer. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
        "doc": "<p>Creates new Writer.</p>\n",
        "return": {
          "type": "Object",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 88,
        "owner": "Ext.data.writer.Writer",
        "html_filename": "Writer.html",
        "href": "Writer.html#Ext-data-writer-Writer-method-getRecordData",
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
            "name": "record",
            "doc": "<p>The record that we are writing to the server.</p>\n"
          }
        ],
        "alias": null,
        "name": "getRecordData",
        "shortDoc": "Formats the data for each record before sending it to the server. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
        "doc": "<p>Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data in a way that differs from the default.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object literal of name/value keys to be written to the server.\nBy default this method returns the data property on the record.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 70,
        "owner": "Ext.data.writer.Writer",
        "html_filename": "Writer.html",
        "href": "Writer.html#Ext-data-writer-Writer-method-write",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Request",
            "properties": [

            ],
            "optional": false,
            "name": "request",
            "doc": "<p>The request object</p>\n"
          }
        ],
        "alias": null,
        "name": "write",
        "shortDoc": "Prepares a Proxy's Ext.data.Request object ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
        "doc": "<p>Prepares a Proxy's <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object</p>\n",
        "return": {
          "type": "Ext.data.Request",
          "properties": null,
          "name": "return",
          "doc": "<p>The modified request object</p>\n"
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
  "name": "Ext.data.writer.Writer",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
  "doc": "<p>Base Writer class used by most subclasses of <a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a>. This class is\nresponsible for taking a set of <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> objects and a <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a>\nobject and modifying that request based on the Operations.</p>\n\n\n\n\n<p>For example a <a href=\"#/api/Ext.data.writer.Json\" rel=\"Ext.data.writer.Json\" class=\"docClass\">Ext.data.writer.Json</a> would format the Operations and their <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> \ninstances based on the config options passed to the JsonWriter's constructor.</p>\n\n\n\n\n<p>Writers are not needed for any kind of local storage - whether via a\n<a href=\"#/api/Ext.data.proxy.WebStorage\" rel=\"Ext.data.proxy.WebStorage\" class=\"docClass\">Web Storage proxy</a> (see <a href=\"#/api/Ext.data.proxy.LocalStorage\" rel=\"Ext.data.proxy.LocalStorage\" class=\"docClass\">localStorage</a>\nand <a href=\"#/api/Ext.data.proxy.SessionStorage\" rel=\"Ext.data.proxy.SessionStorage\" class=\"docClass\">sessionStorage</a>) or just in memory via a\n<a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">MemoryProxy</a>.</p>\n\n",
  "alternateClassNames": [
    "Ext.data.DataWriter",
    "Ext.data.Writer"
  ]
});