Ext.data.JsonP.Ext_Array({
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
  "html_filename": "Array2.html",
  "allMixins": [

  ],
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "href": "Array2.html#Ext-Array",
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
        "linenr": 489,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-clean",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "clean",
        "shortDoc": "Filter through an array and remove empty item as defined in Ext.isEmpty\n\nSee filter ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Filter through an array and remove empty item as defined in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">Ext.isEmpty</a></p>\n\n<p>See <a href=\"#/api/Ext.Array-method-filter\" rel=\"Ext.Array-method-filter\" class=\"docClass\">filter</a></p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>results</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 622,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-clone",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array</p>\n"
          }
        ],
        "alias": null,
        "name": "clone",
        "shortDoc": "Clone a flat array without referencing the previous one. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Clone a flat array without referencing the previous one. Note that this is different\nfrom Ext.clone since it doesn't handle recursive cloning. It's simply a convenient, easy-to-remember method\nfor Array.prototype.slice.call(array)</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The clone array</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 305,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-contains",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array to check</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to look for</p>\n"
          }
        ],
        "alias": null,
        "name": "contains",
        "shortDoc": "Checks whether or not the given array contains the specified item ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Checks whether or not the given <code>array</code> contains the specified <code>item</code></p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the array contains the item, false otherwise</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 707,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-difference",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "arrayA",
            "doc": "\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "arrayB",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "difference",
        "shortDoc": "Perform a set difference A-B by subtracting all items in array B from array A. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Perform a set difference A-B by subtracting all items in array B from array A.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>difference</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 186,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-each",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList/Object",
            "properties": [

            ],
            "optional": false,
            "name": "iterable",
            "doc": "<p>The value to be iterated. If this\nargument is not iterable, the callback function is called once.</p>\n"
          },
          {
            "type": "Function",
            "properties": [
              {
                "type": "Object",
                "tagname": "param",
                "name": "item",
                "doc": "<p>The item at the current <code>index</code> in the passed <code>array</code></p>\n"
              },
              {
                "type": "Number",
                "tagname": "param",
                "name": "index",
                "doc": "<p>The current <code>index</code> within the <code>array</code></p>\n"
              },
              {
                "type": "Array",
                "tagname": "param",
                "name": "allItems",
                "doc": "<p>The <code>array</code> itself which was passed as the first argument</p>\n"
              },
              {
                "type": "Boolean",
                "tagname": "param",
                "name": "return",
                "doc": "<p>Return false to stop iteration.</p>\n"
              }
            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The callback function. If it returns false, the iteration stops and this method returns\nthe current <code>index</code>.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "reverse",
            "doc": "<p>(Optional) Reverse the iteration order (loop from the end to the beginning)\nDefaults false</p>\n"
          }
        ],
        "alias": null,
        "name": "each",
        "shortDoc": "Iterates an array or an iterable value and invoke the given callback function for each item. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Iterates an array or an iterable value and invoke the given callback function for each item.</p>\n\n<pre><code>var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];\n\nExt.Array.each(countries, function(name, index, countriesItSelf) {\n    console.log(name);\n});\n\nvar sum = function() {\n    var sum = 0;\n\n    Ext.Array.each(arguments, function(value) {\n        sum += value;\n    });\n\n    return sum;\n};\n\nsum(1, 2, 3); // returns 6\n</code></pre>\n\n<p>The iteration can be stopped by returning false in the function callback.</p>\n\n<pre><code>Ext.Array.each(countries, function(name, index, countriesItSelf) {\n    if (name === 'Singapore') {\n        return false; // break here\n    }\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-each\" rel=\"Ext-method-each\" class=\"docClass\">Ext.each</a> is alias for <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a></p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>See description for the <code>fn</code> parameter.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 916,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-erase",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array on which to replace.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index in the array at which to operate.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "removeCount",
            "doc": "<p>The number of items to remove at index.</p>\n"
          }
        ],
        "alias": null,
        "name": "erase",
        "shortDoc": "Removes items from an array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Removes items from an array. This is functionally equivalent to the splice method\nof Array, but works around bugs in IE8's splice method and does not copy the\nremoved elements in order to return them (because very often they are ignored).</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The array passed.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 426,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-every",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>Callback function for each item</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>Callback function scope</p>\n"
          }
        ],
        "alias": null,
        "name": "every",
        "shortDoc": "Executes the specified function for each array element until the function returns a falsy value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Executes the specified function for each array element until the function returns a falsy value.\nIf such an item is found, the function will return false immediately.\nOtherwise, it will return true.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if no false value is returned by the callback function.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 537,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-filter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>Callback function for each item</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>Callback function scope</p>\n"
          }
        ],
        "alias": null,
        "name": "filter",
        "shortDoc": "Creates a new array with all of the elements of this array for which\nthe provided filtering function returns true. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Creates a new array with all of the elements of this array for which\nthe provided filtering function returns true.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>results</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 794,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-flatten",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array to flatten</p>\n"
          }
        ],
        "alias": null,
        "name": "flatten",
        "shortDoc": "Recursively flattens into 1-d Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Recursively flattens into 1-d Array. Injects Arrays inline.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The 1-d array.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 254,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-forEach",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array to iterate</p>\n"
          },
          {
            "type": "Function",
            "properties": [
              {
                "type": "Object",
                "tagname": "param",
                "name": "item",
                "doc": "<p>The item at the current <code>index</code> in the passed <code>array</code></p>\n"
              },
              {
                "type": "Number",
                "tagname": "param",
                "name": "index",
                "doc": "<p>The current <code>index</code> within the <code>array</code></p>\n"
              },
              {
                "type": "Array",
                "tagname": "param",
                "name": "allItems",
                "doc": "<p>The <code>array</code> itself which was passed as the first argument</p>\n"
              }
            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The callback function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The execution scope (<code>this</code>) in which the specified function is executed.</p>\n"
          }
        ],
        "alias": null,
        "name": "forEach",
        "shortDoc": "Iterates an array and invoke the given callback function for each item. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Iterates an array and invoke the given callback function for each item. Note that this will simply\ndelegate to the native Array.prototype.forEach method if supported. It doesn't support stopping the\niteration by returning false in the callback function like <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">each</a>. However, performance\ncould be much better in modern browsers comparing with <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">each</a></p>\n",
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
        "linenr": 564,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-from",
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
            "name": "value",
            "doc": "<p>The value to convert to an array if it's not already is an array</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "newReference",
            "doc": "<p>(Optional) True to clone the given array and return a new reference if necessary,\ndefaults to false</p>\n"
          }
        ],
        "alias": null,
        "name": "from",
        "shortDoc": "Converts a value to an array if it's not already an array; returns:\n\n\nAn empty array if given value is undefined or n...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Converts a value to an array if it's not already an array; returns:</p>\n\n<ul>\n<li>An empty array if given value is <code>undefined</code> or <code>null</code></li>\n<li>Itself if given value is already an array</li>\n<li>An array copy if given value is <a href=\"#/api/Ext-method-isIterable\" rel=\"Ext-method-isIterable\" class=\"docClass\">iterable</a> (arguments, NodeList and alike)</li>\n<li>An array with one item which is the given value, otherwise</li>\n</ul>\n\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>array</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 610,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-include",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to include</p>\n"
          }
        ],
        "alias": null,
        "name": "include",
        "shortDoc": "Push an item into the array only if the array doesn't contain it yet ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Push an item into the array only if the array doesn't contain it yet</p>\n",
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
        "linenr": 280,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-indexOf",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array to check</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to look for</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "from",
            "doc": "<p>(Optional) The index at which to begin the search</p>\n"
          }
        ],
        "alias": null,
        "name": "indexOf",
        "shortDoc": "Get the index of the provided item in the given array, a supplement for the\nmissing arrayPrototype.indexOf in Interne...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Get the index of the provided <code>item</code> in the given <code>array</code>, a supplement for the\nmissing arrayPrototype.indexOf in Internet Explorer.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The index of item in the array (or -1 if it is not found)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 929,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-insert",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array on which to replace.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index in the array at which to operate.</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "items",
            "doc": "<p>The array of items to insert at index.</p>\n"
          }
        ],
        "alias": null,
        "name": "insert",
        "shortDoc": "Inserts items in to an array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Inserts items in to an array.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The array passed.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 656,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-intersect",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array1",
            "doc": "\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array2",
            "doc": "\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "etc",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "intersect",
        "shortDoc": "Merge multiple arrays into one with unique items that exist in all of the arrays. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Merge multiple arrays into one with unique items that exist in all of the arrays.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>intersect</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 402,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-map",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>Callback function for each item</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>Callback function scope</p>\n"
          }
        ],
        "alias": null,
        "name": "map",
        "shortDoc": "Creates a new array with the results of calling a provided function on every element in this array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Creates a new array with the results of calling a provided function on every element in this array.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>results</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 852,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-max",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array from which to select the maximum value.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "comparisonFn",
            "doc": "<p>(optional) a function to perform the comparision which determines maximization.\nIf omitted the \">\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n"
          }
        ],
        "alias": null,
        "name": "max",
        "shortDoc": "Returns the maximum value in the Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Returns the maximum value in the Array.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>maxValue The maximum value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 882,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-mean",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array to calculate the mean value of.</p>\n"
          }
        ],
        "alias": null,
        "name": "mean",
        "shortDoc": "Calculates the mean of all items in the array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Calculates the mean of all items in the array.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The mean.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 634,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-merge",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array1",
            "doc": "\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array2",
            "doc": "\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "etc",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "merge",
        "shortDoc": "Merge multiple arrays into one with unique items. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Merge multiple arrays into one with unique items.</p>\n\n<p><a href=\"#/api/Ext.Array-method-union\" rel=\"Ext.Array-method-union\" class=\"docClass\">union</a> is alias for <a href=\"#/api/Ext.Array-method-merge\" rel=\"Ext.Array-method-merge\" class=\"docClass\">merge</a></p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>merged</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 822,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-min",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array from which to select the minimum value.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "comparisonFn",
            "doc": "<p>(optional) a function to perform the comparision which determines minimization.\nIf omitted the \"&lt;\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n"
          }
        ],
        "alias": null,
        "name": "min",
        "shortDoc": "Returns the minimum value in the Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Returns the minimum value in the Array.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>minValue The minimum value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 380,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-pluck",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array of items to pluck the value from.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "propertyName",
            "doc": "<p>The property name to pluck from each element.</p>\n"
          }
        ],
        "alias": null,
        "name": "pluck",
        "shortDoc": "Plucks the value of a property from each item in the Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Plucks the value of a property from each item in the Array. Example:</p>\n\n<pre><code>Ext.Array.pluck(Ext.query(\"p\"), \"className\"); // [el1.className, el2.className, ..., elN.className]\n</code></pre>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The value from each item in the Array.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 593,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-remove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to remove</p>\n"
          }
        ],
        "alias": null,
        "name": "remove",
        "shortDoc": "Removes the specified item from the array if it exists ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Removes the specified item from the array if it exists</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The passed array itself</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 941,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-replace",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array on which to replace.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index in the array at which to operate.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "removeCount",
            "doc": "<p>The number of items to remove at index (can be 0).</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "insert",
            "doc": "<p>(optional) An array of items to insert at index.</p>\n"
          }
        ],
        "alias": null,
        "name": "replace",
        "shortDoc": "Replaces items in an array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Replaces items in an array. This is functionally equivalent to the splice method\nof Array, but works around bugs in IE8's splice method and is often more convenient\nto call because it accepts an array of items to insert rather than use a variadic\nargument list.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The array passed.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 732,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-slice",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array (or arguments object).</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "begin",
            "doc": "<p>The index at which to begin. Negative values are offsets from\nthe end of the array.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "end",
            "doc": "<p>The index at which to end. The copied items do not include\nend. Negative values are offsets from the end of the array. If end is omitted,\nall items up to the end of the array are copied.</p>\n"
          }
        ],
        "alias": null,
        "name": "slice",
        "shortDoc": "Returns a shallow copy of a part of an array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Returns a shallow copy of a part of an array. This is equivalent to the native\ncall \"Array.prototype.slice.call(array, begin, end)\". This is often used when \"array\"\nis \"arguments\" since the arguments object does not supply a slice method but can\nbe the context object to Array.prototype.slice.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The copied piece of the array.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 458,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-some",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>Callback function for each item</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>Callback function scope</p>\n"
          }
        ],
        "alias": null,
        "name": "some",
        "shortDoc": "Executes the specified function for each array element until the function returns a truthy value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Executes the specified function for each array element until the function returns a truthy value.\nIf such an item is found, the function will return true immediately. Otherwise, it will return false.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the callback function returns a truthy value.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 750,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-sort",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array to sort.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "sortFn",
            "doc": "<p>(optional) The comparison function.</p>\n"
          }
        ],
        "alias": null,
        "name": "sort",
        "shortDoc": "Sorts the elements of an Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Sorts the elements of an Array.\nBy default, this method sorts the elements alphabetically and ascending.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The sorted array.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 956,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-splice",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array on which to replace.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index in the array at which to operate.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "removeCount",
            "doc": "<p>The number of items to remove at index (can be 0).</p>\n"
          }
        ],
        "alias": null,
        "name": "splice",
        "shortDoc": "Replaces items in an array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Replaces items in an array. This is equivalent to the splice method of Array, but\nworks around bugs in IE8's splice method. The signature is exactly the same as the\nsplice method except that the array is the first argument. All arguments following\nremoveCount are inserted in the array at index.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>An array containing the removed items.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 892,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-sum",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array to calculate the sum value of.</p>\n"
          }
        ],
        "alias": null,
        "name": "sum",
        "shortDoc": "Calculates the sum of all items in the given array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Calculates the sum of all items in the given array.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The sum.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 328,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-toArray",
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
            "name": "iterable",
            "doc": "<p>the iterable object to be turned into a true Array.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "start",
            "doc": "<p>(Optional) a zero-based index that specifies the start of extraction. Defaults to 0</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "end",
            "doc": "<p>(Optional) a zero-based index that specifies the end of extraction. Defaults to the last\nindex of the iterable value</p>\n"
          }
        ],
        "alias": null,
        "name": "toArray",
        "shortDoc": "Converts any iterable (numeric indices and a length property) into a true array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Converts any iterable (numeric indices and a length property) into a true array.</p>\n\n<pre><code>function test() {\n    var args = Ext.Array.toArray(arguments),\n        fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);\n\n    alert(args.join(' '));\n    alert(fromSecondToLastArgs.join(' '));\n}\n\ntest('just', 'testing', 'here'); // alerts 'just testing here';\n                                 // alerts 'testing here';\n\nExt.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array\nExt.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']\nExt.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-toArray\" rel=\"Ext-method-toArray\" class=\"docClass\">Ext.toArray</a> is alias for <a href=\"#/api/Ext.Array-method-toArray\" rel=\"Ext.Array-method-toArray\" class=\"docClass\">Ext.Array.toArray</a></p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>array</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 978,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-union",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array1",
            "doc": "\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array2",
            "doc": "\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "etc",
            "doc": "\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "merge",
          "doc": null
        },
        "name": "union",
        "shortDoc": "Merge multiple arrays into one with unique items. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Merge multiple arrays into one with unique items.</p>\n\n<p><a href=\"#/api/Ext.Array-method-union\" rel=\"Ext.Array-method-union\" class=\"docClass\">union</a> is alias for <a href=\"#/api/Ext.Array-method-merge\" rel=\"Ext.Array-method-merge\" class=\"docClass\">merge</a></p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>merged</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 514,
        "owner": "Ext.Array",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-Array-method-unique",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "unique",
        "shortDoc": "Returns a new array with unique items ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Returns a new array with unique items</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>results</p>\n"
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
  "name": "Ext.Array",
  "mixins": [

  ],
  "code_type": "nop",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
  "doc": "<p>A set of useful static methods to deal with arrays; provide missing methods for older browsers.</p>\n",
  "alternateClassNames": [

  ]
});