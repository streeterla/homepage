Ext.data.JsonP.Ext_CompositeElement({
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
  "extends": "Ext.CompositeElementLite",
  "html_filename": "CompositeElement2.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "CompositeElement2.html#Ext-CompositeElement",
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
        "linenr": 74,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-add",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "HTMLElement[]/Ext.CompositeElement",
            "properties": [

            ],
            "optional": false,
            "name": "els",
            "doc": "<p>Either an Array of DOM elements to add, or another Composite object who's elements should be added.</p>\n"
          }
        ],
        "alias": null,
        "name": "add",
        "shortDoc": "Adds elements to this Composite object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Adds elements to this Composite object.</p>\n",
        "return": {
          "type": "Ext.CompositeElement",
          "properties": null,
          "name": "return",
          "doc": "<p>This Composite object.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 245,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-clear",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clear",
        "shortDoc": "Removes all elements. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Removes all elements.</p>\n",
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
        "linenr": 35,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite-more.html",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-contains",
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
            "name": "el",
            "doc": "<p>{String/HTMLElement/Ext.Element/Number} The id of an element, or an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>, or an HtmlElement to find within the composite collection.</p>\n"
          }
        ],
        "alias": null,
        "name": "contains",
        "shortDoc": "Returns true if this composite contains the passed element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "doc": "<p>Returns true if this composite contains the passed element</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>Boolean</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 144,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-each",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to call. The function is passed the following parameters:<ul>\n<li><b>el</b> : Element<div class=\"sub-desc\">The current Element in the iteration.\n<b>This is the flyweight (shared) <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> instance, so if you require a\na reference to the dom node, use el.dom.</b></div></li>\n<li><b>c</b> : Composite<div class=\"sub-desc\">This Composite object.</div></li>\n<li><b>idx</b> : Number<div class=\"sub-desc\">The zero-based index in the iteration.</div></li>\n</ul></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<i>this</i> reference) in which the function is executed. (defaults to the Element)</p>\n"
          }
        ],
        "alias": null,
        "name": "each",
        "shortDoc": "Calls the passed function for each element in this composite. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Calls the passed function for each element in this composite.</p>\n\n",
        "return": {
          "type": "Ext.CompositeElement",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 174,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-fill",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "HTMLElement[]/Ext.CompositeElement",
            "properties": [

            ],
            "optional": false,
            "name": "els",
            "doc": "<p>Either an array of DOM elements, or another Composite from which to fill this Composite.</p>\n"
          }
        ],
        "alias": null,
        "name": "fill",
        "shortDoc": "Clears this Composite and adds the elements passed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Clears this Composite and adds the elements passed.</p>\n",
        "return": {
          "type": "Ext.CompositeElement",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 186,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-filter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Function",
            "properties": [

            ],
            "optional": false,
            "name": "selector",
            "doc": "<p>A string CSS selector or a comparison function.\nThe comparison function will be called with the following arguments:<ul>\n<li><code>el</code> : <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class=\"sub-desc\">The current DOM element.</div></li>\n<li><code>index</code> : Number<div class=\"sub-desc\">The current index within the collection.</div></li>\n</ul></p>\n"
          }
        ],
        "alias": null,
        "name": "filter",
        "shortDoc": "Filters this composite to only elements that match the passed selector. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Filters this composite to only elements that match the passed selector.</p>\n",
        "return": {
          "type": "Ext.CompositeElement",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 19,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite-more.html",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-first",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "first",
        "shortDoc": "Returns the first Element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "doc": "<p>Returns the first Element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 67,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-getCount",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getCount",
        "shortDoc": "Returns the number of elements in this Composite. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Returns the number of elements in this Composite.</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>Number</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 213,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-indexOf",
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
            "name": "el",
            "doc": "<p>{Mixed} The id of an element, or an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>, or an HtmlElement to find within the composite collection.</p>\n"
          }
        ],
        "alias": null,
        "name": "indexOf",
        "shortDoc": "Find the index of the passed element within the composite collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Find the index of the passed element within the composite collection.</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>Number The index of the passed <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> in the composite collection, or -1 if not found.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 114,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-item",
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
            "name": "index",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "item",
        "shortDoc": "Returns a flyweight Element of the dom element object at the specified index ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Returns a flyweight Element of the dom element object at the specified index</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 27,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite-more.html",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-last",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "last",
        "shortDoc": "Returns the last Element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "doc": "<p>Returns the last Element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 44,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite-more.html",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-removeElement",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element/Number",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nor an array of any of those.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "removeDom",
            "doc": "<p>(optional) True to also remove the element from the document</p>\n"
          }
        ],
        "alias": null,
        "name": "removeElement",
        "shortDoc": "Removes the specified element(s). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "doc": "<p>Removes the specified element(s).</p>\n",
        "return": {
          "type": "Ext.CompositeElement",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 222,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-replaceElement",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element/Number",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nto replace.</p>\n"
          },
          {
            "type": "String/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "replacement",
            "doc": "<p>The id of an element or the Element itself.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "domReplace",
            "doc": "<p>(Optional) True to remove and replace the element in the document too.</p>\n"
          }
        ],
        "alias": null,
        "name": "replaceElement",
        "shortDoc": "Replaces the specified element with the passed element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Replaces the specified element with the passed element.</p>\n",
        "return": {
          "type": "Ext.CompositeElement",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "HTMLElement",
        "inheritable": false,
        "properties": null,
        "linenr": 20,
        "owner": "Ext.CompositeElementLite",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-property-elements",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "elements",
        "shortDoc": "The Array of DOM elements which this CompositeElement encapsulates. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>The Array of DOM elements which this CompositeElement encapsulates. Read-only.</p>\n\n\n<p>This will not <i>usually</i> be accessed in developers' code, but developers wishing\nto augment the capabilities of the CompositeElementLite class may use it when adding\nmethods to the class.</p>\n\n\n<p>For example to add the <code>nextAll</code> method to the class to <b>add</b> all\nfollowing siblings of selected elements, the code would be</p>\n\n\n<p><code></p>\n\n<pre>Ext.override(Ext.CompositeElementLite, {\n    nextAll: function() {\n        var els = this.elements, i, l = els.length, n, r = [], ri = -1;\n\n//      Loop through all elements in this Composite, accumulating\n//      an Array of all siblings.\n        for (i = 0; i < l; i++) {\n            for (n = els[i].nextSibling; n; n = n.nextSibling) {\n                r[++ri] = n;\n            }\n        }\n\n//      Add all found siblings to this Composite\n        return this.add(r);\n    }\n});</pre>\n\n\n<p></code></p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [
    "Ext.CompositeElementLite"
  ],
  "alias": null,
  "name": "Ext.CompositeElement",
  "mixins": [

  ],
  "code_type": "assignment",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElement.js",
  "doc": "<p>This class encapsulates a <i>collection</i> of DOM elements, providing methods to filter\nmembers, or to perform collective actions upon the whole set.</p>\n\n\n<p>Although they are not listed, this class supports all of the methods of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> and\n<a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a>. The methods from these classes will be performed on all the elements in this collection.</p>\n\n\n<p>All methods return <i>this</i> and can be chained.</p>\n\n\n<p>Usage:</p>\n\n<pre><code>var els = Ext.select(\"#some-el div.some-class\", true);\n// or select directly from an existing element\nvar el = Ext.get('some-el');\nel.select('div.some-class', true);\n\nels.setWidth(100); // all elements become 100 width\nels.hide(true); // all elements fade out and hide\n// or\nels.setWidth(100).hide(true);\n</code></pre>\n\n",
  "alternateClassNames": [

  ]
});