Ext.data.JsonP.Ext_data_writer_Json({
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
  "extends": "Ext.data.writer.Writer",
  "html_filename": "Json2.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Json2.html#Ext-data-writer-Json",
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
        "linenr": 33,
        "owner": "Ext.data.writer.Json",
        "html_filename": "Json2.html",
        "href": "Json2.html#Ext-data-writer-Json-cfg-allowSingle",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "allowSingle",
        "shortDoc": "False to ensure that records are always wrapped in an array, even if there is only\none record being sent. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Json.js",
        "doc": "<p>False to ensure that records are always wrapped in an array, even if there is only\none record being sent. When there is more than one record, they will always be encoded into an array.\nDefaults to <tt>true</tt>. Example:</p>\n\n<pre><code>// with allowSingle: true\n\"root\": {\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}\n\n// with allowSingle: false\n\"root\": [{\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}]\n</code></pre>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 25,
        "owner": "Ext.data.writer.Json",
        "html_filename": "Json2.html",
        "href": "Json2.html#Ext-data-writer-Json-cfg-encode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "encode",
        "shortDoc": "True to use Ext.encode() on the data before sending. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Json.js",
        "doc": "<p>True to use Ext.encode() on the data before sending. Defaults to <tt>false</tt>.\nThe encode option should only be set to true when a <a href=\"#/api/Ext.data.writer.Json-cfg-root\" rel=\"Ext.data.writer.Json-cfg-root\" class=\"docClass\">root</a> is defined, because the values will be\nsent as part of the request parameters as opposed to a raw post. The root will be the name of the parameter\nsent to the server.</p>\n"
      },
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
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 16,
        "owner": "Ext.data.writer.Json",
        "html_filename": "Json2.html",
        "href": "Json2.html#Ext-data-writer-Json-cfg-root",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "root",
        "shortDoc": "The key under which the records in this Writer will be placed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Json.js",
        "doc": "<p>The key under which the records in this Writer will be placed. Defaults to <tt>undefined</tt>.\nExample generated request, using root: 'records':</p>\n\n<pre><code>{'records': [{name: 'my record'}, {name: 'another record'}]}\n</code></pre>\n\n"
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
  "author": null,
  "superclasses": [
    "Ext.data.writer.Writer"
  ],
  "alias": null,
  "name": "Ext.data.writer.Json",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Json.js",
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in a JSON format.\nThe <a href=\"#/api/Ext.data.writer.Json-cfg-allowSingle\" rel=\"Ext.data.writer.Json-cfg-allowSingle\" class=\"docClass\">allowSingle</a> configuration can be set to false to force the records to always be\nencoded in an array, even if there is only a single record being sent.</p>\n",
  "alternateClassNames": [
    "Ext.data.JsonWriter"
  ]
});