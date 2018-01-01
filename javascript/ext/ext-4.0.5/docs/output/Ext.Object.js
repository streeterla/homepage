Ext.data.JsonP.Ext_Object({
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
  "html_filename": "Object.html",
  "allMixins": [

  ],
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "href": "Object.html#Ext-Object",
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
        "linenr": 275,
        "owner": "Ext.Object",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-Object-method-each",
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
            "name": "object",
            "doc": "<p>The object to iterate</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The callback function. Passed arguments for each iteration are:</p>\n\n<ul>\n<li>{String} <code>key</code></li>\n<li>{Mixed} <code>value</code></li>\n<li>{Object} <code>object</code> The object itself</li>\n</ul>\n\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n"
          }
        ],
        "alias": null,
        "name": "each",
        "shortDoc": "Iterate through an object and invoke the given callback function for each iteration. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>Iterate through an object and invoke the given callback function for each iteration. The iteration can be stop\nby returning <code>false</code> in the callback function. For example:</p>\n\n<pre><code>var person = {\n    name: 'Jacky'\n    hairColor: 'black'\n    loves: ['food', 'sleeping', 'wife']\n};\n\nExt.Object.each(person, function(key, value, myself) {\n    console.log(key + \":\" + value);\n\n    if (key === 'hairColor') {\n        return false; // stop the iteration\n    }\n});\n</code></pre>\n",
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
        "linenr": 156,
        "owner": "Ext.Object",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-Object-method-fromQueryString",
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
            "name": "queryString",
            "doc": "<p>The query string to decode</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "recursive",
            "doc": "<p>(Optional) Whether or not to recursively decode the string. This format is supported by\nPHP / Ruby on Rails servers and similar. Defaults to false</p>\n"
          }
        ],
        "alias": null,
        "name": "fromQueryString",
        "shortDoc": "Converts a query string back into an object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>Converts a query string back into an object.</p>\n\n<ul>\n<li><p>Non-recursive:</p>\n\n<p>  Ext.Object.fromQueryString(foo=1&amp;bar=2); // returns {foo: 1, bar: 2}\n  Ext.Object.fromQueryString(foo=&amp;bar=2); // returns {foo: null, bar: 2}\n  Ext.Object.fromQueryString(some%20price=%24300); // returns {'some price': '$300'}\n  Ext.Object.fromQueryString(colors=red&amp;colors=green&amp;colors=blue); // returns {colors: ['red', 'green', 'blue']}</p></li>\n<li><p>Recursive:</p>\n\n<p>  Ext.Object.fromQueryString(\"username=Jacky&amp;dateOfBirth[day]=1&amp;dateOfBirth[month]=2&amp;dateOfBirth[year]=1911&amp;hobbies[0]=coding&amp;hobbies[1]=eating&amp;hobbies[2]=sleeping&amp;hobbies[3][0]=nested&amp;hobbies[3][1]=stuff\", true);</p>\n\n<p>  // returns\n  {</p>\n\n<pre><code>  username: 'Jacky',\n  dateOfBirth: {\n      day: '1',\n      month: '2',\n      year: '1911'\n  },\n  hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]\n</code></pre>\n\n<p>  }</p></li>\n</ul>\n\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 388,
        "owner": "Ext.Object",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-Object-method-getKey",
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
            "name": "object",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to find</p>\n"
          }
        ],
        "alias": null,
        "name": "getKey",
        "shortDoc": "Returns the first matching key corresponding to the given value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>Returns the first matching key corresponding to the given value.\nIf no matching value is found, null is returned.</p>\n\n<pre><code>var person = {\n    name: 'Jacky',\n    loves: 'food'\n};\n\nalert(Ext.Object.getKey(sencha, 'loves')); // alerts 'food'\n</code></pre>\n",
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
        "linenr": 438,
        "owner": "Ext.Object",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-Object-method-getKeys",
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
            "name": "object",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getKeys",
        "shortDoc": "Gets all keys of the given object as an array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>Gets all keys of the given object as an array.</p>\n\n<pre><code>var values = Ext.Object.getKeys({\n    name: 'Jacky',\n    loves: 'food'\n}); // ['name', 'loves']\n</code></pre>\n",
        "return": {
          "type": "String[]",
          "properties": null,
          "name": "return",
          "doc": "<p>An array of keys from the object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 463,
        "owner": "Ext.Object",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-Object-method-getSize",
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
            "name": "object",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getSize",
        "shortDoc": "Gets the total number of this object's own properties\n\nvar size = Ext.Object.getSize({\n    name: 'Jacky',\n    loves: ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>Gets the total number of this object's own properties</p>\n\n<pre><code>var size = Ext.Object.getSize({\n    name: 'Jacky',\n    loves: 'food'\n}); // size equals 2\n</code></pre>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>size</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 413,
        "owner": "Ext.Object",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-Object-method-getValues",
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
            "name": "object",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getValues",
        "shortDoc": "Gets all values of the given object as an array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>Gets all values of the given object as an array.</p>\n\n<pre><code>var values = Ext.Object.getValues({\n    name: 'Jacky',\n    loves: 'food'\n}); // ['Jacky', 'food']\n</code></pre>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>An array of values from the object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 313,
        "owner": "Ext.Object",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-Object-method-merge",
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
            "name": "object",
            "doc": "<p>,...</p>\n"
          }
        ],
        "alias": null,
        "name": "merge",
        "shortDoc": "Merges any number of objects recursively without referencing them or their children. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>Merges any number of objects recursively without referencing them or their children.</p>\n\n<pre><code>var extjs = {\n    companyName: 'Ext JS',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer'],\n    isSuperCool: true\n    office: {\n        size: 2000,\n        location: 'Palo Alto',\n        isFun: true\n    }\n};\n\nvar newStuff = {\n    companyName: 'Sencha Inc.',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],\n    office: {\n        size: 40000,\n        location: 'Redwood City'\n    }\n};\n\nvar sencha = Ext.Object.merge(extjs, newStuff);\n\n// extjs and sencha then equals to\n{\n    companyName: 'Sencha Inc.',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],\n    isSuperCool: true\n    office: {\n        size: 30000,\n        location: 'Redwood City'\n        isFun: true\n    }\n}\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>merged The object that is created as a result of merging all the objects passed in.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 15,
        "owner": "Ext.Object",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-Object-method-toQueryObjects",
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
            "name": "name",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "recursive",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "toQueryObjects",
        "shortDoc": "Convert a name - value pair to an array of objects with support for nested structures; useful to construct\nquery stri...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>Convert a <code>name</code> - <code>value</code> pair to an array of objects with support for nested structures; useful to construct\nquery strings. For example:</p>\n\n<pre><code>var objects = Ext.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);\n\n// objects then equals:\n[\n    { name: 'hobbies', value: 'reading' },\n    { name: 'hobbies', value: 'cooking' },\n    { name: 'hobbies', value: 'swimming' },\n];\n\nvar objects = Ext.Object.toQueryObjects('dateOfBirth', {\n    day: 3,\n    month: 8,\n    year: 1987,\n    extra: {\n        hour: 4\n        minute: 30\n    }\n}, true); // Recursive\n\n// objects then equals:\n[\n    { name: 'dateOfBirth[day]', value: 3 },\n    { name: 'dateOfBirth[month]', value: 8 },\n    { name: 'dateOfBirth[year]', value: 1987 },\n    { name: 'dateOfBirth[extra][hour]', value: 4 },\n    { name: 'dateOfBirth[extra][minute]', value: 30 },\n];\n</code></pre>\n",
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
        "linenr": 95,
        "owner": "Ext.Object",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-Object-method-toQueryString",
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
            "name": "object",
            "doc": "<p>The object to encode</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "recursive",
            "doc": "<p>(optional) Whether or not to interpret the object in recursive format.\n(PHP / Ruby on Rails servers and similar). Defaults to false</p>\n"
          }
        ],
        "alias": null,
        "name": "toQueryString",
        "shortDoc": "Takes an object and converts it to an encoded query string\n\n\nNon-recursive:\n\n  Ext.Object.toQueryString({foo: 1, bar:...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>Takes an object and converts it to an encoded query string</p>\n\n<ul>\n<li><p>Non-recursive:</p>\n\n<p>  Ext.Object.toQueryString({foo: 1, bar: 2}); // returns \"foo=1&amp;bar=2\"\n  Ext.Object.toQueryString({foo: null, bar: 2}); // returns \"foo=&amp;bar=2\"\n  Ext.Object.toQueryString({'some price': '$300'}); // returns \"some%20price=%24300\"\n  Ext.Object.toQueryString({date: new Date(2011, 0, 1)}); // returns \"date=%222011-01-01T00%3A00%3A00%22\"\n  Ext.Object.toQueryString({colors: ['red', 'green', 'blue']}); // returns \"colors=red&amp;colors=green&amp;colors=blue\"</p></li>\n<li><p>Recursive:</p>\n\n<p>  Ext.Object.toQueryString({</p>\n\n<pre><code>  username: 'Jacky',\n  dateOfBirth: {\n      day: 1,\n      month: 2,\n      year: 1911\n  },\n  hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]\n</code></pre>\n\n  }, true); // returns the following string (broken down and url-decoded for ease of reading purpose):\n\n<pre><code>        // username=Jacky\n        //    &amp;dateOfBirth[day]=1&amp;dateOfBirth[month]=2&amp;dateOfBirth[year]=1911\n        //    &amp;hobbies[0]=coding&amp;hobbies[1]=eating&amp;hobbies[2]=sleeping&amp;hobbies[3][0]=nested&amp;hobbies[3][1]=stuff\n</code></pre></li>\n</ul>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>queryString</p>\n"
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
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.Object",
  "mixins": [

  ],
  "code_type": "nop",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
  "doc": "<p>A collection of useful static methods to deal with objects</p>\n",
  "alternateClassNames": [

  ]
});