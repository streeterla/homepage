Ext.data.JsonP.Ext_data_writer_Xml({
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
  "html_filename": "Xml2.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Xml2.html#Ext-data-writer-Xml",
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
        "linenr": 31,
        "owner": "Ext.data.writer.Xml",
        "html_filename": "Xml2.html",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-defaultDocumentRoot",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "defaultDocumentRoot",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
        "doc": "<p>The root to be used if <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> is empty and a root is required\nto form a valid XML document.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 24,
        "owner": "Ext.data.writer.Xml",
        "html_filename": "Xml2.html",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-documentRoot",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "documentRoot",
        "shortDoc": "The name of the root element of the document. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
        "doc": "<p>The name of the root element of the document. Defaults to <tt>'xmlData'</tt>.\nIf there is more than 1 record and the root is not specified, the default document root will still be used\nto ensure a valid XML document is created.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 37,
        "owner": "Ext.data.writer.Xml",
        "html_filename": "Xml2.html",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-header",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "header",
        "shortDoc": "A header to use in the XML document (such as setting the encoding or version). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
        "doc": "<p>A header to use in the XML document (such as setting the encoding or version).\nDefaults to <tt>''</tt>.</p>\n"
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
        "linenr": 43,
        "owner": "Ext.data.writer.Xml",
        "html_filename": "Xml2.html",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-record",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "record",
        "shortDoc": "The name of the node to use for each record. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
        "doc": "<p>The name of the node to use for each record. Defaults to <tt>'record'</tt>.</p>\n"
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
    "Ext.data.writer.Writer"
  ],
  "alias": null,
  "name": "Ext.data.writer.Xml",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in an XML format.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> property is used to specify the root element in the XML document.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-record\" rel=\"Ext.data.writer.Xml-cfg-record\" class=\"docClass\">record</a> option is used to specify the element name for each record that will make\nup the XML document.</p>\n",
  "alternateClassNames": [
    "Ext.data.XmlWriter"
  ]
});