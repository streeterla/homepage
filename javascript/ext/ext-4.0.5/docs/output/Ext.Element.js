Ext.data.JsonP.Ext_Element({
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
      {
        "static": true,
        "inheritable": false,
        "linenr": 1014,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-fly",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The dom node or id</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "named",
            "doc": "<p>(optional) Allows for creation of named reusable flyweights to prevent conflicts (e.g.\ninternally Ext uses \"_global\")</p>\n"
          }
        ],
        "alias": null,
        "name": "fly",
        "shortDoc": "Gets the globally shared flyweight Element, with the passed node as the active element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference\nto this element - the dom node can be overwritten by other code. <a href=\"#/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">Ext.fly</a> is alias for\n<a href=\"#/api/Ext.Element-method-fly\" rel=\"Ext.Element-method-fly\" class=\"docClass\">fly</a>.</p>\n\n<p>Use this to make one-time references to DOM elements which are not going to be accessed again either by\napplication code, or by Ext's classes. If accessing an element which will be processed regularly, then <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> will be more appropriate to take advantage of the caching provided by the <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>\nclass.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The shared Element object (or null if no matching element was found)</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 165,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-fromPoint",
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
            "name": "x",
            "doc": "<p>The x coordinate</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "y",
            "doc": "<p>The y coordinate</p>\n"
          }
        ],
        "alias": null,
        "name": "fromPoint",
        "shortDoc": "Returns the top Element that is located at the passed coordinates ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Returns the top Element that is located at the passed coordinates</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The found Element</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 802,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-get",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id of the node, a DOM Node or an existing Element.</p>\n"
          }
        ],
        "alias": null,
        "name": "get",
        "shortDoc": "Retrieves Ext.Element objects. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Retrieves <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> objects. <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> is an alias for <a href=\"#/api/Ext.Element-method-get\" rel=\"Ext.Element-method-get\" class=\"docClass\">get</a>.</p>\n\n<p><strong>This method does not retrieve <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>s.</strong> This method retrieves <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>\nobjects which encapsulate DOM elements. To retrieve a Component by its ID, use <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n<p>Uses simple caching to consistently return the same object. Automatically fixes if an object was recreated with\nthe same id via AJAX or DOM.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element object (or null if no matching element was found)</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 103,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-getDocumentHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getDocumentHeight",
        "shortDoc": "Retrieves the document height ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Retrieves the document height</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>documentHeight</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 112,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-getDocumentWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getDocumentWidth",
        "shortDoc": "Retrieves the document width ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Retrieves the document width</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>documentWidth</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 151,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-getOrientation",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getOrientation",
        "shortDoc": "Retrieves the current orientation of the window. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Retrieves the current orientation of the window. This is calculated by\ndeterming if the height is greater than the width.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>Orientation of window: 'portrait' or 'landscape'</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 139,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-getViewSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getViewSize",
        "shortDoc": "Retrieves the viewport size of the window. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Retrieves the viewport size of the window.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>object containing width and height properties</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 121,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-getViewportHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getViewportHeight",
        "shortDoc": "Retrieves the viewport height of the window. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Retrieves the viewport height of the window.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>viewportHeight</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 130,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-getViewportWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getViewportWidth",
        "shortDoc": "Retrieves the viewport width of the window. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Retrieves the viewport width of the window.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>viewportWidth</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 85,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-normalize",
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
            "name": "prop",
            "doc": "<p>The property to normalize</p>\n"
          }
        ],
        "alias": null,
        "name": "normalize",
        "shortDoc": "Normalizes CSS property keys from dash delimited to camel case JavaScript Syntax. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Normalizes CSS property keys from dash delimited to camel case JavaScript Syntax.\nFor example:</p>\n\n<ul>\n <li>border-width -> borderWidth</li>\n <li>padding-top -> paddingTop</li>\n</ul>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The normalized string</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 18,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-parseBox",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "box",
            "doc": "<p>The encoded margins</p>\n"
          }
        ],
        "alias": null,
        "name": "parseBox",
        "shortDoc": "Parses a number or string representing margin sizes into an object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object with margin sizes for top, right, bottom and left</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 176,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-parseStyles",
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
            "name": "styles",
            "doc": "<p>A CSS string</p>\n"
          }
        ],
        "alias": null,
        "name": "parseStyles",
        "shortDoc": "Converts a CSS string into an object with a property for each style. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Converts a CSS string into an object with a property for each style.</p>\n\n<p>\nThe sample code below would return an object with 2 properties, one\nfor background-color and one for color.</p>\n\n\n<pre><code>var css = 'background-color: red;color: blue; ';\nconsole.log(Ext.Element.parseStyles(css));\n</code></pre>\n\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>styles</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 61,
        "owner": "Ext.Element",
        "html_filename": "Element.static.html",
        "href": "Element.static.html#Ext-Element-method-unitizeBox",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "box",
            "doc": "<p>The encoded margins</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "units",
            "doc": "<p>The type of units to add</p>\n"
          }
        ],
        "alias": null,
        "name": "unitizeBox",
        "shortDoc": "Parses a number or string representing margin sizes into an object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
        "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>An string with unitized (px if units is not specified) metrics for top, right, bottom and left</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": true,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 10,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-property-DISPLAY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "DISPLAY",
        "shortDoc": "Visibility mode constant for use with setVisibilityMode. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Visibility mode constant for use with <a href=\"#/api/Ext.Element-method-setVisibilityMode\" rel=\"Ext.Element-method-setVisibilityMode\" class=\"docClass\">setVisibilityMode</a>. Use display to hide element</p>\n"
      },
      {
        "static": true,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 17,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-property-OFFSETS",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "OFFSETS",
        "shortDoc": "Visibility mode constant for use with setVisibilityMode. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Visibility mode constant for use with <a href=\"#/api/Ext.Element-method-setVisibilityMode\" rel=\"Ext.Element-method-setVisibilityMode\" class=\"docClass\">setVisibilityMode</a>. Use offsets (x and y positioning offscreen)\nto hide element.</p>\n"
      },
      {
        "static": true,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 4,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-property-VISIBILITY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "VISIBILITY",
        "shortDoc": "Visibility mode constant for use with setVisibilityMode. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Visibility mode constant for use with <a href=\"#/api/Ext.Element-method-setVisibilityMode\" rel=\"Ext.Element-method-setVisibilityMode\" class=\"docClass\">setVisibilityMode</a>. Use visibility to hide element</p>\n"
      },
      {
        "static": true,
        "type": "String",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 28,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-property-visibilityCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "visibilityCls",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Defaults to 'x-hide-nosize'</p>\n"
      }
    ]
  },
  "extends": null,
  "html_filename": "Element-more.html",
  "allMixins": [

  ],
  "docauthor": null,
  "xtype": null,
  "href": "Element-more.html#Ext-Element",
  "subclasses": [
    "Ext.Layer"
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
      {
        "static": false,
        "inheritable": false,
        "linenr": 320,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMActivate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMActivate",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Fires when an element is activated, for instance, through a mouse click or a keypress.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 358,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMAttrModified",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMAttrModified",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Fires when an attribute has been modified.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 364,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMCharacterDataModified",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMCharacterDataModified",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Fires when the character data has been modified.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 308,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMFocusIn",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMFocusIn",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Similar to HTML focus event, but can be applied to any focusable element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 314,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMFocusOut",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMFocusOut",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Similar to HTML blur event, but can be applied to any focusable element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 334,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMNodeInserted",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMNodeInserted",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Fires when a node has been added as a child of another node.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 352,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMNodeInsertedIntoDocument",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMNodeInsertedIntoDocument",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Fires when a node is being inserted into a document.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 340,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMNodeRemoved",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMNodeRemoved",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Fires when a descendant node of the element is removed.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 346,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMNodeRemovedFromDocument",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMNodeRemovedFromDocument",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Fires when a node is being removed from a document.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 328,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-DOMSubtreeModified",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "DOMSubtreeModified",
        "shortDoc": "Where supported. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Where supported. Fires when the subtree is modified.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 244,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-abort",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "abort",
        "shortDoc": "Fires when an object/image is stopped from loading before completely loaded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when an object/image is stopped from loading before completely loaded.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 300,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-blur",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "blur",
        "shortDoc": "Fires when an element loses focus either via the pointing device or by tabbing navigation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when an element loses focus either via the pointing device or by tabbing navigation.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 276,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-change",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "change",
        "shortDoc": "Fires when a control loses the input focus and its value has been modified since gaining focus. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a control loses the input focus and its value has been modified since gaining focus.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 147,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-click",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "click",
        "shortDoc": "Fires when a mouse click is detected within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a mouse click is detected within the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 153,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-contextmenu",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "contextmenu",
        "shortDoc": "Fires when a right click is detected within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a right click is detected within the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 159,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-dblclick",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "dblclick",
        "shortDoc": "Fires when a mouse double click is detected within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a mouse double click is detected within the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 250,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-error",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "error",
        "shortDoc": "Fires when an object/image/frame cannot be loaded properly. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when an object/image/frame cannot be loaded properly.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 294,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-focus",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "focus",
        "shortDoc": "Fires when an element receives focus either via the pointing device or by tab navigation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when an element receives focus either via the pointing device or by tab navigation.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 215,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-keydown",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "keydown",
        "shortDoc": "Fires when a keydown is detected within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a keydown is detected within the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 209,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-keypress",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "keypress",
        "shortDoc": "Fires when a keypress is detected within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a keypress is detected within the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 221,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-keyup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "keyup",
        "shortDoc": "Fires when a keyup is detected within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a keyup is detected within the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 230,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-load",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "load",
        "shortDoc": "Fires when the user agent finishes loading all content within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when the user agent finishes loading all content within the element. Only supported by window, frames,\nobjects and images.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 165,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-mousedown",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mousedown",
        "shortDoc": "Fires when a mousedown is detected within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a mousedown is detected within the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 195,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-mouseenter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mouseenter",
        "shortDoc": "Fires when the mouse enters the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when the mouse enters the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 201,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-mouseleave",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mouseleave",
        "shortDoc": "Fires when the mouse leaves the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when the mouse leaves the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 183,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-mousemove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mousemove",
        "shortDoc": "Fires when a mousemove is detected with the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a mousemove is detected with the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 189,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-mouseout",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mouseout",
        "shortDoc": "Fires when a mouseout is detected with the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a mouseout is detected with the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 177,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-mouseover",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mouseover",
        "shortDoc": "Fires when a mouseover is detected within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a mouseover is detected within the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 171,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-mouseup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mouseup",
        "shortDoc": "Fires when a mouseup is detected within the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a mouseup is detected within the element.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 288,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-reset",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "reset",
        "shortDoc": "Fires when a form is reset. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a form is reset.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 256,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-resize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "resize",
        "shortDoc": "Fires when a document view is resized. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a document view is resized.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 262,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-scroll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "scroll",
        "shortDoc": "Fires when a document view is scrolled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a document view is scrolled.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 270,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-select",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "select",
        "shortDoc": "Fires when a user selects some text in a text field, including input and textarea. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a user selects some text in a text field, including input and textarea.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 282,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-submit",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "submit",
        "shortDoc": "Fires when a form is submitted. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when a form is submitted.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 237,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-event-unload",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "t",
            "doc": "<p>The target of the event.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "unload",
        "shortDoc": "Fires when the user agent removes all content from a window or frame. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Fires when the user agent removes all content from a window or frame. For elements, it fires when the target\nelement or any of its content has been removed.</p>\n"
      }
    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 1,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-constructor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "element",
            "doc": "\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "forceNew",
            "doc": "<p>(optional) By default the constructor checks to see if there is already an instance of this\nelement in the cache and if there is it returns the same instance. This will skip that check (useful for extending\nthis class).</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates new Element directly. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Creates new Element directly.</p>\n",
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
        "linenr": 74,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-addCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": false,
            "name": "className",
            "doc": "<p>The CSS classes to add separated by space, or an array of classes</p>\n"
          }
        ],
        "alias": null,
        "name": "addCls",
        "shortDoc": "Adds one or more CSS classes to the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 926,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-addClsOnClick",
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
            "name": "className",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "addClsOnClick",
        "shortDoc": "Sets up event handlers to add and remove a css class when the mouse is down and then up on this element (a click effect) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Sets up event handlers to add and remove a css class when the mouse is down and then up on this element (a click effect)</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 909,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-addClsOnFocus",
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
            "name": "className",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "addClsOnFocus",
        "shortDoc": "Sets up event handlers to add and remove a css class when this element has the focus ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Sets up event handlers to add and remove a css class when this element has the focus</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 891,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-addClsOnOver",
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
            "name": "className",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "addClsOnOver",
        "shortDoc": "Sets up event handlers to add and remove a css class when the mouse is over this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Sets up event handlers to add and remove a css class when the mouse is over this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 5,
        "owner": "Ext.Element",
        "html_filename": "Element.keys.html",
        "href": "Element.keys.html#Ext-Element-method-addKeyListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Number/Number[]/Object",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>Either a string with the keys to listen for, the numeric key code, array of key codes or an object with the following options:\n<code>{key: (number or array), shift: (true/false), ctrl: (true/false), alt: (true/false)}</code></p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to call</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the specified function is executed. Defaults to this Element.</p>\n"
          }
        ],
        "alias": null,
        "name": "addKeyListener",
        "shortDoc": "Convenience method for constructing a KeyMap ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.keys.js",
        "doc": "<p>Convenience method for constructing a KeyMap</p>\n",
        "return": {
          "type": "Ext.util.KeyMap",
          "properties": null,
          "name": "return",
          "doc": "<p>The KeyMap created</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 34,
        "owner": "Ext.Element",
        "html_filename": "Element.keys.html",
        "href": "Element.keys.html#Ext-Element-method-addKeyMap",
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
            "name": "config",
            "doc": "<p>The KeyMap config. See <a href=\"#/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a> for more details</p>\n"
          }
        ],
        "alias": null,
        "name": "addKeyMap",
        "shortDoc": "Creates a KeyMap for this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.keys.js",
        "doc": "<p>Creates a KeyMap for this element</p>\n",
        "return": {
          "type": "Ext.util.KeyMap",
          "properties": null,
          "name": "return",
          "doc": "<p>The KeyMap created</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 427,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-addListener",
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
            "name": "eventName",
            "doc": "<p>The name of event to handle.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The handler function the event invokes. This function is passed the following parameters:</p>\n\n<ul>\n<li><p><strong>evt</strong> : EventObject</p>\n\n<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</p></li>\n<li><p><strong>el</strong> : HtmlElement</p>\n\n<p>The DOM element which was the target of the event. Note that this may be filtered by using the delegate option.</p></li>\n<li><p><strong>o</strong> : Object</p>\n\n<p>The options object from the addListener call.</p></li>\n</ul>\n\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<strong>this</strong> reference) in which the handler function is executed. <strong>If\nomitted, defaults to this Element.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) An object containing handler configuration properties. This may contain any of\nthe following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> Object :</p>\n\n<p>The scope (<strong>this</strong> reference) in which the handler function is executed. <strong>If omitted, defaults to this\nElement.</strong></p></li>\n<li><p><strong>delegate</strong> String:</p>\n\n<p>A simple selector to filter the target or look for a descendant of the target. See below for additional details.</p></li>\n<li><p><strong>stopEvent</strong> Boolean:</p>\n\n<p>True to stop the event. That is stop propagation, and prevent the default action.</p></li>\n<li><p><strong>preventDefault</strong> Boolean:</p>\n\n<p>True to prevent the default action</p></li>\n<li><p><strong>stopPropagation</strong> Boolean:</p>\n\n<p>True to prevent event propagation</p></li>\n<li><p><strong>normalized</strong> Boolean:</p>\n\n<p>False to pass a browser event to the handler function instead of an <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a></p></li>\n<li><p><strong>target</strong> Ext.Element:</p>\n\n<p>Only call the handler if the event was fired on the target Element, <em>not</em> if the event was bubbled up from a\nchild node.</p></li>\n<li><p><strong>delay</strong> Number:</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> Boolean:</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> Number:</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>In the following examples, the shorthand form <a href=\"#/api/Ext.Element-method-on\" rel=\"Ext.Element-method-on\" class=\"docClass\">on</a> is used rather than the more verbose addListener. The\ntwo are equivalent. Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener that auto stops the event and adds a custom argument (forumId) to the options\nobject. The options object is available as the third parameter in the handler function.</p>\n\n<p>Code:</p>\n\n<pre><code>el.on('click', this.onClick, this, {\n    single: true,\n    delay: 100,\n    stopEvent : true,\n    forumId: 4\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple handlers.</p>\n\n<p>Code:</p>\n\n<pre><code>el.on({\n    'click' : {\n        fn: this.onClick,\n        scope: this,\n        delay: 100\n    },\n    'mouseover' : {\n        fn: this.onMouseOver,\n        scope: this\n    },\n    'mouseout' : {\n        fn: this.onMouseOut,\n        scope: this\n    }\n});\n</code></pre>\n\n<p>Or a shorthand syntax:</p>\n\n<p>Code:</p>\n\n<pre><code>el.on({\n    'click' : this.onClick,\n    'mouseover' : this.onMouseOver,\n    'mouseout' : this.onMouseOut,\n    scope: this\n});\n</code></pre>\n\n<p><strong>delegate</strong></p>\n\n<p>This is a configuration option that you can pass along when registering a handler for an event to assist with\nevent delegation. Event delegation is a technique that is used to reduce memory consumption and prevent exposure\nto memory-leaks. By registering an event for a container element as opposed to each element within a container.\nBy setting this configuration option to a simple selector, the target element will be filtered to look for a\ndescendant of the target. For example:</p>\n\n<pre><code>// using this markup:\n&lt;div id='elId'&gt;\n    &lt;p id='p1'&gt;paragraph one&lt;/p&gt;\n    &lt;p id='p2' class='clickable'&gt;paragraph two&lt;/p&gt;\n    &lt;p id='p3'&gt;paragraph three&lt;/p&gt;\n&lt;/div&gt;\n\n// utilize event delegation to registering just one handler on the container element:\nel = Ext.get('elId');\nel.on(\n    'click',\n    function(e,t) {\n        // handle click\n        console.info(t.id); // 'p2'\n    },\n    this,\n    {\n        // filter the target element to be a descendant with the class 'clickable'\n        delegate: '.clickable'\n    }\n);\n</code></pre>\n"
          }
        ],
        "alias": null,
        "name": "addListener",
        "shortDoc": "Appends an event handler to this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Appends an event handler to this element.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 48,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-adjustWidth",
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
            "name": "width",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "adjustWidth",
        "shortDoc": "TODO: Look at this ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>TODO: Look at this</p>\n",
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
        "linenr": 246,
        "owner": "Ext.Element",
        "html_filename": "Element.alignment.html",
        "href": "Element.alignment.html#Ext-Element-method-alignTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "element",
            "doc": "<p>The element to align to.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "position",
            "doc": "<p>(optional) The position to align to (defaults to \"tl-bl?\")</p>\n"
          },
          {
            "type": "Number[]",
            "properties": [

            ],
            "optional": true,
            "name": "offsets",
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "alignTo",
        "shortDoc": "Aligns this element with another element relative to the specified anchor points. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
        "doc": "<p>Aligns this element with another element relative to the specified anchor points. If the other element is the\ndocument it aligns it to the viewport.\nThe position parameter is optional, and can be specified in any one of the following formats:</p>\n\n<ul>\n  <li><b>Blank</b>: Defaults to aligning the element's top-left corner to the target's bottom-left corner (\"tl-bl\").</li>\n  <li><b>One anchor (deprecated)</b>: The passed anchor position is used as the target element's anchor point.\n      The element being aligned will position its top-left corner (tl) to that point.  <i>This method has been\n      deprecated in favor of the newer two anchor syntax below</i>.</li>\n  <li><b>Two anchors</b>: If two values from the table below are passed separated by a dash, the first value is used as the\n      element's anchor point, and the second value is used as the target's anchor point.</li>\n</ul>\n\n\n<p>In addition to the anchor points, the position parameter also supports the \"?\" character.  If \"?\" is passed at the end of\nthe position string, the element will attempt to align as specified, but the position will be adjusted to constrain to\nthe viewport if necessary.  Note that the element being aligned might be swapped to align to a different position than\nthat specified in order to enforce the viewport constraints.\nFollowing are all of the supported anchor positions:</p>\n\n<pre>Value  Description\n-----  -----------------------------\ntl     The top left corner (default)\nt      The center of the top edge\ntr     The top right corner\nl      The center of the left edge\nc      In the center of the element\nr      The center of the right edge\nbl     The bottom left corner\nb      The center of the bottom edge\nbr     The bottom right corner\n</pre>\n\n\n<p>Example Usage:</p>\n\n<pre><code>// align el to other-el using the default positioning (\"tl-bl\", non-constrained)\nel.alignTo(\"other-el\");\n\n// align the top left corner of el with the top right corner of other-el (constrained to viewport)\nel.alignTo(\"other-el\", \"tr?\");\n\n// align the bottom right corner of el with the center left edge of other-el\nel.alignTo(\"other-el\", \"br-l?\");\n\n// align the center of el with the bottom left corner of other-el and\n// adjust the x position by -6 pixels (and the y position by 0)\nel.alignTo(\"other-el\", \"c-bl\", [-6, 0]);\n</code></pre>\n\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 47,
        "owner": "Ext.Element",
        "html_filename": "Element.alignment.html",
        "href": "Element.alignment.html#Ext-Element-method-anchorTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "element",
            "doc": "<p>The element to align to.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "position",
            "doc": "<p>The position to align to.</p>\n"
          },
          {
            "type": "Number[]",
            "properties": [

            ],
            "optional": true,
            "name": "offsets",
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) True for the default animation or a standard Element animation config object</p>\n"
          },
          {
            "type": "Boolean/Number",
            "properties": [

            ],
            "optional": true,
            "name": "monitorScroll",
            "doc": "<p>(optional) True to monitor body scroll and reposition. If this parameter\nis a number, it is used as the buffer delay (defaults to 50ms).</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "callback",
            "doc": "<p>(optional) The function to call after the animation finishes</p>\n"
          }
        ],
        "alias": null,
        "name": "anchorTo",
        "shortDoc": "Anchors an element to another element and realigns it when the window is resized. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
        "doc": "<p>Anchors an element to another element and realigns it when the window is resized.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 5,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-appendChild",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id of the node, a DOM Node or an existing Element.</p>\n"
          }
        ],
        "alias": null,
        "name": "appendChild",
        "shortDoc": "Appends the passed element(s) to this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Appends the passed element(s) to this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 15,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-appendTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The new parent element.\nThe id of the node, a DOM Node or an existing Element.</p>\n"
          }
        ],
        "alias": null,
        "name": "appendTo",
        "shortDoc": "Appends this element to the passed element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Appends this element to the passed element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 736,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-applyStyles",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object/Function",
            "properties": [

            ],
            "optional": false,
            "name": "styles",
            "doc": "<p>A style specification string, e.g. \"width:100px\", or object in the form {width:\"100px\"}, or\na function which returns such a specification.</p>\n"
          }
        ],
        "alias": null,
        "name": "applyStyles",
        "shortDoc": "More flexible version of setStyle for setting style properties. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>More flexible version of <a href=\"#/api/Ext.Element-method-setStyle\" rel=\"Ext.Element-method-setStyle\" class=\"docClass\">setStyle</a> for setting style properties.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 406,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-blur",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "blur",
        "shortDoc": "Tries to blur the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Tries to blur the element. Any exceptions are caught and ignored.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 768,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-boxWrap",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "class",
            "doc": "<p>(optional) A base CSS class to apply to the containing wrapper element\n(defaults to <tt>'x-box'</tt>). Note that there are a number of CSS rules that are dependent on\nthis name to make the overall effect work, so if you supply an alternate base class, make sure you\nalso supply all of the necessary rules.</p>\n"
          }
        ],
        "alias": null,
        "name": "boxWrap",
        "shortDoc": "Wraps the specified element with a special 9 element markup/CSS block that renders by default as\na gray container wit...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Wraps the specified element with a special 9 element markup/CSS block that renders by default as\na gray container with a gradient background, rounded corners and a 4-way shadow.</p>\n\n\n<p>This special markup is used throughout Ext when box wrapping elements (<a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a>,\n<a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> when <tt><a href=\"#/api/Ext.panel.Panel-cfg-frame\" rel=\"Ext.panel.Panel-cfg-frame\" class=\"docClass\">frame=true</a></tt>, <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>).  The markup\nis of this form:</p>\n\n\n<pre><code>    Ext.Element.boxMarkup =\n    &#39;&lt;div class=\"{0}-tl\">&lt;div class=\"{0}-tr\">&lt;div class=\"{0}-tc\">&lt;/div>&lt;/div>&lt;/div>\n     &lt;div class=\"{0}-ml\">&lt;div class=\"{0}-mr\">&lt;div class=\"{0}-mc\">&lt;/div>&lt;/div>&lt;/div>\n     &lt;div class=\"{0}-bl\">&lt;div class=\"{0}-br\">&lt;div class=\"{0}-bc\">&lt;/div>&lt;/div>&lt;/div>&#39;;\n</code></pre>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>    // Basic box wrap\n    Ext.get(\"foo\").boxWrap();\n\n    // You can also add a custom class and use CSS inheritance rules to customize the box look.\n    // 'x-box-blue' is a built-in alternative -- look at the related CSS definitions as an example\n    // for how to create a custom box wrap style.\n    Ext.get(\"foo\").boxWrap().addCls(\"x-box-blue\");\n</code></pre>\n\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The outermost wrapping element of the created box structure.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 375,
        "owner": "Ext.Element",
        "html_filename": "Element.alignment.html",
        "href": "Element.alignment.html#Ext-Element-method-center",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": true,
            "name": "centerIn",
            "doc": "<p>(optional) The element in which to center the element.</p>\n"
          }
        ],
        "alias": null,
        "name": "center",
        "shortDoc": "Centers the Element in either the viewport, or another Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
        "doc": "<p>Centers the Element in either the viewport, or another Element.</p>\n",
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
        "linenr": 88,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-child",
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
            "name": "selector",
            "doc": "<p>The CSS selector</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) True to return the DOM node instead of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "child",
        "shortDoc": "Selects a single direct child based on the passed CSS selector (the selector should not contain an id). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Selects a single <em>direct</em> child based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "return": {
          "type": "HTMLElement/Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The child <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (or DOM node if returnDom = true)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 78,
        "owner": "Ext.Element",
        "html_filename": "Element-more.html",
        "href": "Element-more.html#Ext-Element-method-clean",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "forceReclean",
            "doc": "<p>(optional) By default the element\nkeeps track if it has been cleaned already so\nyou can call this over and over. However, if you update the element and\nneed to force a reclean, you can pass true.</p>\n"
          }
        ],
        "alias": null,
        "name": "clean",
        "shortDoc": "Removes Empty, or whitespace filled text nodes. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
        "doc": "<p>Removes Empty, or whitespace filled text nodes. Combines adjacent text nodes.</p>\n",
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
        "linenr": 777,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-clearListeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": {
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "removeAllListeners",
          "doc": "Alias for {@link #removeAllListeners}."
        },
        "name": "clearListeners",
        "shortDoc": "Alias for removeAllListeners. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.Element-method-removeAllListeners\" rel=\"Ext.Element-method-removeAllListeners\" class=\"docClass\">removeAllListeners</a>.</p>\n\n<p>Removes all previous added listeners from this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 417,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-clearOpacity",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearOpacity",
        "shortDoc": "Clears any opacity settings from this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Clears any opacity settings from this element. Required in some cases for IE.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 220,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-clearPositioning",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "value",
            "doc": "<p>(optional) The value to use for the left,right,top,bottom, defaults to '' (empty string). You could use 'auto'.</p>\n"
          }
        ],
        "alias": null,
        "name": "clearPositioning",
        "shortDoc": "Clear positioning back to the default when the document was loaded ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Clear positioning back to the default when the document was loaded</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 670,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-clip",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clip",
        "shortDoc": "Store the current overflow setting and clip overflow on the element - use unclip to remove ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Store the current overflow setting and clip overflow on the element - use <tt><a href=\"#/api/Ext.Element-method-unclip\" rel=\"Ext.Element-method-unclip\" class=\"docClass\">unclip</a></tt> to remove</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 695,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-contains",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "HTMLElement/String",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The element to check</p>\n"
          }
        ],
        "alias": null,
        "name": "contains",
        "shortDoc": "Returns true if this element is an ancestor of the passed element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Returns true if this element is an ancestor of the passed element</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this element is an ancestor of el, else false</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 145,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-createChild",
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
            "name": "config",
            "doc": "<p>DomHelper element config object.  If no tag is specified (e.g., {tag:'input'}) then a div will be\nautomatically generated with the specified attributes.</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": true,
            "name": "insertBefore",
            "doc": "<p>(optional) a child element of this element</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) true to return the dom node instead of creating an Element</p>\n"
          }
        ],
        "alias": null,
        "name": "createChild",
        "shortDoc": "Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child e...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child element.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The new child element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 231,
        "owner": "Ext.Element",
        "html_filename": "Element-more.html",
        "href": "Element-more.html#Ext-Element-method-createProxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>The class name of the proxy element or a DomHelper config object</p>\n"
          },
          {
            "type": "String/HTMLElement",
            "properties": [

            ],
            "optional": true,
            "name": "renderTo",
            "doc": "<p>(optional) The element or element id to render the proxy to (defaults to document.body)</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "matchBox",
            "doc": "<p>(optional) True to align and size the proxy to this element now (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "createProxy",
        "shortDoc": "Creates a proxy element of this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
        "doc": "<p>Creates a proxy element of this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The new proxy element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 166,
        "owner": "Ext.Element",
        "html_filename": "Element.fx-more.html",
        "href": "Element.fx-more.html#Ext-Element-method-createShim",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "createShim",
        "shortDoc": "Creates an iframe shim for this element to keep selects and other windowed objects from\nshowing through. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
        "doc": "<p>Creates an iframe shim for this element to keep selects and other windowed objects from\nshowing through.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The new shim element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 784,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-destroy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "Removes this element's dom reference. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Removes this element's dom reference. Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a>. Alias to <a href=\"#/api/Ext.Element-method-remove\" rel=\"Ext.Element-method-remove\" class=\"docClass\">remove</a>.</p>\n",
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
        "linenr": 77,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-down",
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
            "name": "selector",
            "doc": "<p>The CSS selector</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) True to return the DOM node instead of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "down",
        "shortDoc": "Selects a single child at any depth below this element based on the passed CSS selector (the selector should not cont...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Selects a single child at any depth below this element based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "return": {
          "type": "HTMLElement/Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The child <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (or DOM node if returnDom = true)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 45,
        "owner": "Ext.Element",
        "html_filename": "Element.fx-more.html",
        "href": "Element.fx-more.html#Ext-Element-method-enableDisplayMode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "display",
            "doc": "<p>(optional) What to set display to when visible</p>\n"
          }
        ],
        "alias": null,
        "name": "enableDisplayMode",
        "shortDoc": "Convenience method for setVisibilityMode(Element.DISPLAY) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
        "doc": "<p>Convenience method for setVisibilityMode(Element.DISPLAY)</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 767,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-fadeIn",
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
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "fadeIn",
        "shortDoc": "Fade an element in (from transparent to opaque). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Fade an element in (from transparent to opaque). The ending opacity can be specified using the <code>opacity</code>\nconfig option. Usage:</p>\n\n<pre><code>// default: fade in from opacity 0 to 100%\nel.fadeIn();\n\n// custom: fade in from opacity 0 to 75% over 2 seconds\nel.fadeIn({ opacity: .75, duration: 2000});\n\n// common config options shown with default values\nel.fadeIn({\n    opacity: 1, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 794,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-fadeOut",
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
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "fadeOut",
        "shortDoc": "Fade an element out (from opaque to transparent). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Fade an element out (from opaque to transparent). The ending opacity can be specified using the <code>opacity</code>\nconfig option. Note that IE may require <code>useDisplay:true</code> in order to redisplay correctly.\nUsage:</p>\n\n<pre><code>// default: fade out from the element's current opacity to 0\nel.fadeOut();\n\n// custom: fade out from the element's current opacity to 25% over 2 seconds\nel.fadeOut({ opacity: .25, duration: 2000});\n\n// common config options shown with default values\nel.fadeOut({\n    opacity: 0, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: 500,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 5,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-findParent",
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
            "name": "selector",
            "doc": "<p>The simple selector to test</p>\n"
          },
          {
            "type": "Number/String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": true,
            "name": "maxDepth",
            "doc": "<p>(optional)\nThe max depth to search as a number or element (defaults to 50 || document.body)</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnEl",
            "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object instead of DOM node</p>\n"
          }
        ],
        "alias": null,
        "name": "findParent",
        "shortDoc": "Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
        "return": {
          "type": "HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The matching DOM node (or null if no match was found)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 34,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-findParentNode",
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
            "name": "selector",
            "doc": "<p>The simple selector to test</p>\n"
          },
          {
            "type": "Number/String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": true,
            "name": "maxDepth",
            "doc": "<p>(optional)\nThe max depth to search as a number or element (defaults to 10 || document.body)</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnEl",
            "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object instead of DOM node</p>\n"
          }
        ],
        "alias": null,
        "name": "findParentNode",
        "shortDoc": "Looks at parent nodes for a match of the passed simple selector (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Looks at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
        "return": {
          "type": "HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The matching DOM node (or null if no match was found)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 136,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-first",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "selector",
            "doc": "<p>(optional) Find the next sibling that matches the passed simple selector</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n"
          }
        ],
        "alias": null,
        "name": "first",
        "shortDoc": "Gets the first child, skipping text nodes ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Gets the first child, skipping text nodes</p>\n",
        "return": {
          "type": "Ext.Element/HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The first child or null</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 386,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-focus",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "defer",
            "doc": "<p>(optional) Milliseconds to defer the focus</p>\n"
          }
        ],
        "alias": null,
        "name": "focus",
        "shortDoc": "Tries to focus the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Tries to focus the element. Any exceptions are caught and ignored.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 506,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-frame",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "color",
            "doc": "<p>(optional) The color of the border. Should be a 6 char hex color without the leading #\n(defaults to light blue: 'C3DAF9').</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "count",
            "doc": "<p>(optional) The number of ripples to display (defaults to 1)</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "frame",
        "shortDoc": "Shows a ripple of exploding, attenuating borders to draw attention to an Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Shows a ripple of exploding, attenuating borders to draw attention to an Element. Usage:</p>\n\n<pre><code>// default: a single light blue ripple\nel.frame();\n\n// custom: 3 red ripples lasting 3 seconds total\nel.frame(\"#ff0000\", 3, { duration: 3 });\n\n// common config options shown with default values\nel.frame(\"#C3DAF9\", 1, {\n    duration: 1 //duration of each individual ripple.\n    // Note: Easing is not configurable and will be ignored if included\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 59,
        "owner": "Ext.Element",
        "html_filename": "Element.static-more.html",
        "href": "Element.static-more.html#Ext-Element-method-getActiveElement",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getActiveElement",
        "shortDoc": "Returns the active element in the DOM. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static-more.js",
        "doc": "<p>Returns the active element in the DOM. If the browser supports activeElement\non the document, this is returned. If not, the focus is tracked and the active\nelement is maintained internally.</p>\n",
        "return": {
          "type": "HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The active (focused) element in the document.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 138,
        "owner": "Ext.Element",
        "html_filename": "Element.alignment.html",
        "href": "Element.alignment.html#Ext-Element-method-getAlignToXY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "element",
            "doc": "<p>The element to align to.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "position",
            "doc": "<p>(optional) The position to align to (defaults to \"tl-bl?\")</p>\n"
          },
          {
            "type": "Number[]",
            "properties": [

            ],
            "optional": true,
            "name": "offsets",
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n"
          }
        ],
        "alias": null,
        "name": "getAlignToXY",
        "shortDoc": "Gets the x,y coordinates to align this element with another element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
        "doc": "<p>Gets the x,y coordinates to align this element with another element. See <a href=\"#/api/Ext.Element-method-alignTo\" rel=\"Ext.Element-method-alignTo\" class=\"docClass\">alignTo</a> for more info on the\nsupported position values.</p>\n",
        "return": {
          "type": "Number[]",
          "properties": null,
          "name": "return",
          "doc": "<p>[x, y]</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 5,
        "owner": "Ext.Element",
        "html_filename": "Element.alignment.html",
        "href": "Element.alignment.html#Ext-Element-method-getAnchorXY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "anchor",
            "doc": "<p>(optional) The specified anchor position (defaults to \"c\").  See <a href=\"#/api/Ext.Element-method-alignTo\" rel=\"Ext.Element-method-alignTo\" class=\"docClass\">alignTo</a>\nfor details on supported anchor positions.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "local",
            "doc": "<p>(optional) True to get the local (element top/left-relative) anchor position instead\nof page coordinates</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "size",
            "doc": "<p>(optional) An object containing the size to use for calculating anchor position\n{width: (target width), height: (target height)} (defaults to the element's current size)</p>\n"
          }
        ],
        "alias": null,
        "name": "getAnchorXY",
        "shortDoc": "Gets the x,y coordinates specified by the anchor position on the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
        "doc": "<p>Gets the x,y coordinates specified by the anchor position on the element.</p>\n",
        "return": {
          "type": "Number[]",
          "properties": null,
          "name": "return",
          "doc": "<p>[x, y] An array containing the element's x and y coordinates</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 714,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-getAttribute",
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
            "doc": "<p>The attribute name</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "namespace",
            "doc": "<p>(optional) The namespace in which to look for the attribute</p>\n"
          }
        ],
        "alias": null,
        "name": "getAttribute",
        "shortDoc": "Returns the value of an attribute from the element's underlying DOM node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Returns the value of an attribute from the element's underlying DOM node.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The attribute value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 704,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-getAttributeNS",
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
            "name": "namespace",
            "doc": "<p>The namespace in which to look for the attribute</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "name",
            "doc": "<p>The attribute name</p>\n"
          }
        ],
        "alias": null,
        "name": "getAttributeNS",
        "shortDoc": "Returns the value of a namespaced attribute from the element's underlying DOM node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Returns the value of a namespaced attribute from the element's underlying DOM node.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The attribute value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 650,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getBorderWidth",
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
            "name": "side",
            "doc": "<p>Can be t, l, r, b or any combination of those to add multiple values. For example,\npassing <tt>'lr'</tt> would get the border <b><u>l</u></b>eft width + the border <b><u>r</u></b>ight width.</p>\n"
          }
        ],
        "alias": null,
        "name": "getBorderWidth",
        "shortDoc": "Gets the width of the border(s) for the specified side(s) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Gets the width of the border(s) for the specified side(s)</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The width of the sides passed added together</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 186,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getBottom",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "local",
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n"
          }
        ],
        "alias": null,
        "name": "getBottom",
        "shortDoc": "Gets the bottom Y coordinate of the element (element Y position + element height) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Gets the bottom Y coordinate of the element (element Y position + element height)</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 327,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getBox",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "contentBox",
            "doc": "<p>(optional) If true a box for the content of the element is returned.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "local",
            "doc": "<p>(optional) If true the element's left and top are returned instead of page x/y.</p>\n"
          }
        ],
        "alias": null,
        "name": "getBox",
        "shortDoc": "Return an object defining the area of this Element which can be passed to setBox to\nset another Element's size/locati...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Return an object defining the area of this Element which can be passed to <a href=\"#/api/Ext.Element-method-setBox\" rel=\"Ext.Element-method-setBox\" class=\"docClass\">setBox</a> to\nset another Element's size/location to match this element.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>box An object in the format</p>\n\n<pre><code>{\n    x: &lt;Element's X position>,\n    y: &lt;Element's Y position>,\n    width: &lt;Element's width>,\n    height: &lt;Element's height>,\n    bottom: &lt;Element's lower bound>,\n    right: &lt;Element's rightmost bound>\n}\n</code></pre>\n\n\n<p>The returned object may also be addressed as an Array where index 0 contains the X position\nand index 1 contains the Y position. So the result may also be used for <a href=\"#/api/Ext.Element-method-setXY\" rel=\"Ext.Element-method-setXY\" class=\"docClass\">setXY</a></p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 875,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-getById",
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
            "name": "id",
            "doc": "<p>The id of the element to get.</p>\n"
          }
        ],
        "alias": null,
        "name": "getById",
        "shortDoc": "Retrieves Ext.Element objects like Ext.get but is optimized for sub-elements. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Retrieves <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> objects like <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> but is optimized for sub-elements.\nThis is helpful for performance, because in IE (prior to IE 9), <code>getElementById</code> uses\nan non-optimized search. In those browsers, starting the search for an element with a\nmatching ID at a parent of that element will greatly speed up the process.</p>\n\n<p>Unlike <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>, this method only accepts ID's. If the ID is not a child of\nthis element, it will still be found if it exists in the document, but will be slower\nthan calling <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> directly.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element object (or null if no matching element was found)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 367,
        "owner": "Ext.Element",
        "html_filename": "Element.alignment.html",
        "href": "Element.alignment.html#Ext-Element-method-getCenterXY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getCenterXY",
        "shortDoc": "Calculates the x, y to center this element on the screen ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
        "doc": "<p>Calculates the x, y to center this element on the screen</p>\n",
        "return": {
          "type": "Number[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The x, y values [x, y]</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 308,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getColor",
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
            "name": "attr",
            "doc": "<p>The css attribute</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "defaultValue",
            "doc": "<p>The default value to use when a valid color isn't found</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "prefix",
            "doc": "<p>(optional) defaults to #. Use an empty string when working with\ncolor anims.</p>\n"
          }
        ],
        "alias": null,
        "name": "getColor",
        "shortDoc": "Return the CSS color for the specified CSS attribute. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Return the CSS color for the specified CSS attribute. rgb, 3 digit (like #fff) and valid values\nare convert to standard 6 digit hex color.</p>\n",
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
        "linenr": 844,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getComputedHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getComputedHeight",
        "shortDoc": "Returns either the offsetHeight or the height of this element based on CSS height adjusted by padding or borders\nwhen...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns either the offsetHeight or the height of this element based on CSS height adjusted by padding or borders\nwhen needed to simulate offsetHeight when offsets aren't available. This may not work on display:none elements\nif a height has not been set using CSS.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 862,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getComputedWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getComputedWidth",
        "shortDoc": "Returns either the offsetWidth or the width of this element based on CSS width adjusted by padding or borders\nwhen ne...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns either the offsetWidth or the width of this element based on CSS width adjusted by padding or borders\nwhen needed to simulate offsetWidth when offsets aren't available. This may not work on display:none elements\nif a width has not been set using CSS.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 313,
        "owner": "Ext.Element",
        "html_filename": "Element.alignment.html",
        "href": "Element.alignment.html#Ext-Element-method-getConstrainVector",
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
            "name": "constrainTo",
            "doc": "<p>{Mixed} The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this element is to be constrained.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "proposedPosition",
            "doc": "<p>{Array} A proposed <code>[X, Y]</code> position to test for validity and to produce a vector for instead\nof using this Element's current position;</p>\n"
          }
        ],
        "alias": null,
        "name": "getConstrainVector",
        "shortDoc": "Returns the [X, Y] vector by which this element must be translated to make a best attempt\nto constrain within the pas...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
        "doc": "<p>Returns the <code>[X, Y]</code> vector by which this element must be translated to make a best attempt\nto constrain within the passed constraint. Returns <code>false</code> is this element does not need to be moved.</p>\n\n\n<p>Priority is given to constraining the top and left within the constraint.</p>\n\n\n<p>The constraint may either be an existing element into which this element is to be constrained, or\nan <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this element is to be constrained.</p>\n\n",
        "return": {
          "type": "Number[]/Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p><b>If</b> this element <i>needs</i> to be translated, an <code>[X, Y]</code>\nvector by which this element must be translated. Otherwise, <code>false</code>.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 881,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getFrameWidth",
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
            "name": "sides",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getFrameWidth",
        "shortDoc": "Returns the sum width of the padding and borders for the passed \"sides\". ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns the sum width of the padding and borders for the passed \"sides\". See getBorderWidth()</p>\n\n<pre><code>     for more information about the sides.\n</code></pre>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 466,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "contentHeight",
            "doc": "<p>(optional) true to get the height minus borders and padding</p>\n"
          }
        ],
        "alias": null,
        "name": "getHeight",
        "shortDoc": "Returns the offset height of the element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns the offset height of the element</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The element's height</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 158,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getLeft",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "local",
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n"
          }
        ],
        "alias": null,
        "name": "getLeft",
        "shortDoc": "Gets the left X coordinate ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Gets the left X coordinate</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 131,
        "owner": "Ext.Element",
        "html_filename": "Element-more.html",
        "href": "Element-more.html#Ext-Element-method-getLoader",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getLoader",
        "shortDoc": "Gets this element's ElementLoader ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
        "doc": "<p>Gets this element's <a href=\"#/api/Ext.ElementLoader\" rel=\"Ext.ElementLoader\" class=\"docClass\">ElementLoader</a></p>\n",
        "return": {
          "type": "Ext.ElementLoader",
          "properties": null,
          "name": "return",
          "doc": "<p>The loader</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1078,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getMargin",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "sides",
            "doc": "<p>(optional) Any combination of l, r, t, b to get the sum of those sides</p>\n"
          }
        ],
        "alias": null,
        "name": "getMargin",
        "shortDoc": "Returns an object with properties top, left, right and bottom representing the margins of this element unless sides i...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns an object with properties top, left, right and bottom representing the margins of this element unless sides is passed,\nthen it returns the calculated width of the sides (see getPadding)</p>\n",
        "return": {
          "type": "Object/Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 42,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getOffsetsTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "element",
            "doc": "<p>The element to get the offsets from.</p>\n"
          }
        ],
        "alias": null,
        "name": "getOffsetsTo",
        "shortDoc": "Returns the offsets of this element from the passed element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Returns the offsets of this element from the passed element. Both element must be part of the DOM tree and not have display:none to have page coordinates.</p>\n",
        "return": {
          "type": "Number[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The XY page offsets (e.g. [100, -200])</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 660,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getPadding",
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
            "name": "side",
            "doc": "<p>Can be t, l, r, b or any combination of those to add multiple values. For example,\npassing <tt>'lr'</tt> would get the padding <b><u>l</u></b>eft + the padding <b><u>r</u></b>ight.</p>\n"
          }
        ],
        "alias": null,
        "name": "getPadding",
        "shortDoc": "Gets the width of the padding(s) for the specified side(s) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Gets the width of the padding(s) for the specified side(s)</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The padding of the sides passed added together</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 474,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getPageBox",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "asRegion",
            "doc": "<p>(optional) If true an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> will be returned</p>\n"
          }
        ],
        "alias": null,
        "name": "getPageBox",
        "shortDoc": "Return an object defining the area of this Element which can be passed to setBox to\nset another Element's size/locati...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Return an object defining the area of this Element which can be passed to <a href=\"#/api/Ext.Element-method-setBox\" rel=\"Ext.Element-method-setBox\" class=\"docClass\">setBox</a> to\nset another Element's size/location to match this element.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>box An object in the format</p>\n\n<pre><code>{\n    x: &lt;Element's X position>,\n    y: &lt;Element's Y position>,\n    width: &lt;Element's width>,\n    height: &lt;Element's height>,\n    bottom: &lt;Element's lower bound>,\n    right: &lt;Element's rightmost bound>\n}\n</code></pre>\n\n\n<p>The returned object may also be addressed as an Array where index 0 contains the X position\nand index 1 contains the Y position. So the result may also be used for <a href=\"#/api/Ext.Element-method-setXY\" rel=\"Ext.Element-method-setXY\" class=\"docClass\">setXY</a></p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 238,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getPositioning",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getPositioning",
        "shortDoc": "Gets an object with all CSS positioning properties. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Gets an object with all CSS positioning properties. Useful along with setPostioning to get\nsnapshot before performing an update and then restoring the element.</p>\n",
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
        "linenr": 437,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getRegion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRegion",
        "shortDoc": "Returns the region of this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Returns the region of this element.\nThe element must be part of the DOM tree to have a region (display:none or elements not appended return false).</p>\n",
        "return": {
          "type": "Ext.util.Region",
          "properties": null,
          "name": "return",
          "doc": "<p>A Region containing \"top, left, bottom, right\" member data.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 167,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getRight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "local",
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n"
          }
        ],
        "alias": null,
        "name": "getRight",
        "shortDoc": "Gets the right X coordinate of the element (element X position + element width) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Gets the right X coordinate of the element (element X position + element width)</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 14,
        "owner": "Ext.Element",
        "html_filename": "Element.scroll.html",
        "href": "Element.scroll.html#Ext-Element-method-getScroll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getScroll",
        "shortDoc": "Returns the current scroll position of the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
        "doc": "<p>Returns the current scroll position of the element.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object containing the scroll position in the format {left: (scrollLeft), top: (scrollTop)}</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1041,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "contentSize",
            "doc": "<p>(optional) true to get the width/size minus borders and padding</p>\n"
          }
        ],
        "alias": null,
        "name": "getSize",
        "shortDoc": "Returns the size of the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns the size of the element.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 217,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getStyle",
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
            "name": "property",
            "doc": "<p>The style property whose value is returned.</p>\n"
          }
        ],
        "alias": null,
        "name": "getStyle",
        "shortDoc": "Normalizes currentStyle and computedStyle. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Normalizes currentStyle and computedStyle.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The current value of the style property for this element.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 999,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getStyleSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getStyleSize",
        "shortDoc": "Returns the dimensions of the element available to lay content out in. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns the dimensions of the element available to lay content out in.<p>\n\ngetStyleSize utilizes prefers style sizing if present, otherwise it chooses the larger of offsetHeight/clientHeight and offsetWidth/clientWidth.\nTo obtain the size excluding scrollbars, use getViewSize\n\nSizing of the document body is handled at the adapter level which handles special cases for IE and strict modes, etc.\n\n",
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
        "linenr": 747,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getStyles",
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
            "name": "style1",
            "doc": "<p>A style name</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "style2",
            "doc": "<p>A style name</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "etc",
            "doc": "<p>.</p>\n"
          }
        ],
        "alias": null,
        "name": "getStyles",
        "shortDoc": "Returns an object with properties matching the styles requested. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns an object with properties matching the styles requested.\nFor example, el.getStyles('color', 'font-size', 'width') might return\n{'color': '#FFFFFF', 'font-size': '13px', 'width': '100px'}.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The style object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 134,
        "owner": "Ext.Element",
        "html_filename": "TextMetrics.html",
        "href": "TextMetrics.html#Ext-Element-method-getTextWidth",
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
            "name": "text",
            "doc": "<p>The text to measure. Defaults to the innerHTML of the element.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "min",
            "doc": "<p>(optional) The minumum value to return.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "max",
            "doc": "<p>(optional) The maximum value to return.</p>\n"
          }
        ],
        "alias": null,
        "name": "getTextWidth",
        "shortDoc": "Returns the width in pixels of the passed text, or the width of the text in this Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
        "doc": "<p>Returns the width in pixels of the passed text, or the width of the text in this Element.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The text width in pixels.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 177,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getTop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "local",
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n"
          }
        ],
        "alias": null,
        "name": "getTop",
        "shortDoc": "Gets the top Y coordinate ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Gets the top Y coordinate</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 417,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-getValue",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "asNumber",
            "doc": "<p>true to parse the value as a number</p>\n"
          }
        ],
        "alias": null,
        "name": "getValue",
        "shortDoc": "Returns the value of the \"value\" attribute ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Returns the value of the \"value\" attribute</p>\n",
        "return": {
          "type": "String/Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 446,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getViewRegion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getViewRegion",
        "shortDoc": "Returns the content region of this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Returns the <b>content</b> region of this element. That is the region within the borders and padding.</p>\n",
        "return": {
          "type": "Ext.util.Region",
          "properties": null,
          "name": "return",
          "doc": "<p>A Region containing \"top, left, bottom, right\" member data.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 945,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getViewSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getViewSize",
        "shortDoc": "Returns the dimensions of the element available to lay content out in. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns the dimensions of the element available to lay content out in.<p>\n<p>If the element (or any ancestor element) has CSS style <code>display : none</code>, the dimensions will be zero.</p>\nexample:\n<pre><code>        var vpSize = Ext.getBody().getViewSize();\n\n        // all Windows created afterwards will have a default value of 90% height and 95% width\n        Ext.Window.override({\n            width: vpSize.width * 0.9,\n            height: vpSize.height * 0.95\n        });\n        // To handle window resizing you would have to hook onto onWindowResize.\n</code></pre>\n\ngetViewSize utilizes clientHeight/clientWidth which excludes sizing of scrollbars.\nTo obtain the size including scrollbars, use getStyleSize\n\nSizing of the document body is handled at the adapter level which handles special cases for IE and strict modes, etc.\n\n",
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
        "linenr": 514,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-getWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "contentWidth",
            "doc": "<p>(optional) true to get the width minus borders and padding</p>\n"
          }
        ],
        "alias": null,
        "name": "getWidth",
        "shortDoc": "Returns the offset width of the element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Returns the offset width of the element</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The element's width</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 18,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getX",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getX",
        "shortDoc": "Gets the current X position of the element based on page coordinates. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Gets the current X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The X position of the element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 34,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getXY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getXY",
        "shortDoc": "Gets the current position of the element based on page coordinates. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Gets the current position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "return": {
          "type": "Number[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The XY position of the element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 26,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-getY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getY",
        "shortDoc": "Gets the current Y position of the element based on page coordinates. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Gets the current Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The Y position of the element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 586,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-ghost",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "anchor",
            "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to bottom: 'b')</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "ghost",
        "shortDoc": "Slides the element while fading it out of view. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Slides the element while fading it out of view. An anchor point can be optionally passed to set the ending point\nof the effect. Usage:</p>\n\n<pre><code>// default: slide the element downward while fading out\nel.ghost();\n\n// custom: slide the element out to the right with a 2-second duration\nel.ghost('r', { duration: 2000 });\n\n// common config options shown with default values\nel.ghost('b', {\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 178,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-hasCls",
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
            "name": "className",
            "doc": "<p>The CSS class to check for</p>\n"
          }
        ],
        "alias": null,
        "name": "hasCls",
        "shortDoc": "Checks if the specified CSS class exists on this element's DOM node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Checks if the specified CSS class exists on this element's DOM node.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the class exists, else false</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 245,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-method-hide",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "hide",
        "shortDoc": "Hide this element - Uses display mode to determine whether to use \"display\" or \"visibility\". ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Hide this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.Element-method-setVisible\" rel=\"Ext.Element-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 671,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-highlight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "color",
            "doc": "<p>(optional) The highlight color. Should be a 6 char hex color without the leading #\n(defaults to yellow: 'ffff9c')</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "highlight",
        "shortDoc": "Highlights the Element by setting a color (applies to the background-color by default, but can be changed using\nthe \"...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Highlights the Element by setting a color (applies to the background-color by default, but can be changed using\nthe \"attr\" config option) and then fading back to the original color. If no original color is available, you\nshould provide the \"endColor\" config option which will be cleared after the animation. Usage:</p>\n\n<pre><code>// default: highlight background to yellow\nel.highlight();\n\n// custom: highlight foreground text to blue for 2 seconds\nel.highlight(\"0000ff\", { attr: 'color', duration: 2000 });\n\n// common config options shown with default values\nel.highlight(\"ffff9c\", {\n    attr: \"backgroundColor\", //can be any valid CSS property (attribute) that supports a color value\n    endColor: (current color) or \"ffffff\",\n    easing: 'easeIn',\n    duration: 1000\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 678,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-hover",
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
            "name": "overFn",
            "doc": "<p>The function to call when the mouse enters the Element.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "outFn",
            "doc": "<p>The function to call when the mouse leaves the Element.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the functions are executed. Defaults\nto the Element's DOM element.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) Options for the listener. See <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">the\noptions parameter</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "hover",
        "shortDoc": "Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 5,
        "owner": "Ext.Element",
        "html_filename": "Element.dd.html",
        "href": "Element.dd.html#Ext-Element-method-initDD",
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
            "name": "group",
            "doc": "<p>The group the DD object is member of</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>The DD config object</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "overrides",
            "doc": "<p>An object containing methods to override/implement on the DD object</p>\n"
          }
        ],
        "alias": null,
        "name": "initDD",
        "shortDoc": "Initializes a Ext.dd.DD drag drop object for this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.dd.js",
        "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DD\" rel=\"Ext.dd.DD\" class=\"docClass\">Ext.dd.DD</a> drag drop object for this element.</p>\n",
        "return": {
          "type": "Ext.dd.DD",
          "properties": null,
          "name": "return",
          "doc": "<p>The DD object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 17,
        "owner": "Ext.Element",
        "html_filename": "Element.dd.html",
        "href": "Element.dd.html#Ext-Element-method-initDDProxy",
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
            "name": "group",
            "doc": "<p>The group the DDProxy object is member of</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>The DDProxy config object</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "overrides",
            "doc": "<p>An object containing methods to override/implement on the DDProxy object</p>\n"
          }
        ],
        "alias": null,
        "name": "initDDProxy",
        "shortDoc": "Initializes a Ext.dd.DDProxy object for this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.dd.js",
        "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDProxy\" rel=\"Ext.dd.DDProxy\" class=\"docClass\">Ext.dd.DDProxy</a> object for this element.</p>\n",
        "return": {
          "type": "Ext.dd.DDProxy",
          "properties": null,
          "name": "return",
          "doc": "<p>The DDProxy object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 29,
        "owner": "Ext.Element",
        "html_filename": "Element.dd.html",
        "href": "Element.dd.html#Ext-Element-method-initDDTarget",
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
            "name": "group",
            "doc": "<p>The group the DDTarget object is member of</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>The DDTarget config object</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "overrides",
            "doc": "<p>An object containing methods to override/implement on the DDTarget object</p>\n"
          }
        ],
        "alias": null,
        "name": "initDDTarget",
        "shortDoc": "Initializes a Ext.dd.DDTarget object for this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.dd.js",
        "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDTarget\" rel=\"Ext.dd.DDTarget\" class=\"docClass\">Ext.dd.DDTarget</a> object for this element.</p>\n",
        "return": {
          "type": "Ext.dd.DDTarget",
          "properties": null,
          "name": "return",
          "doc": "<p>The DDTarget object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 38,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-insertAfter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The element to insert after.\nThe id of the node, a DOM Node or an existing Element.</p>\n"
          }
        ],
        "alias": null,
        "name": "insertAfter",
        "shortDoc": "Inserts this element after the passed element in the DOM ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Inserts this element after the passed element in the DOM</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 26,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-insertBefore",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The element before which this element will be inserted.\nThe id of the node, a DOM Node or an existing Element.</p>\n"
          }
        ],
        "alias": null,
        "name": "insertBefore",
        "shortDoc": "Inserts this element before the passed element in the DOM ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Inserts this element before the passed element in the DOM</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 50,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-insertFirst",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element/Object",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id or element to insert or a DomHelper config\nto create and insert</p>\n"
          }
        ],
        "alias": null,
        "name": "insertFirst",
        "shortDoc": "Inserts (or creates) an element (or DomHelper config) as the first child of this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Inserts (or creates) an element (or DomHelper config) as the first child of this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The new child</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 177,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-insertHtml",
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
            "name": "where",
            "doc": "<p>Where to insert the html in relation to this element - beforeBegin, afterBegin, beforeEnd, afterEnd.\nSee <a href=\"#/api/Ext.DomHelper-method-insertHtml\" rel=\"Ext.DomHelper-method-insertHtml\" class=\"docClass\">Ext.DomHelper.insertHtml</a> for details.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "html",
            "doc": "<p>The HTML fragment</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnEl",
            "doc": "<p>(optional) True to return an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "insertHtml",
        "shortDoc": "Inserts an html fragment into this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Inserts an html fragment into this element</p>\n",
        "return": {
          "type": "HTMLElement/Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The inserted node (or nearest related if more than 1 inserted)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 68,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-insertSibling",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element/Object/Array",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id, element to insert or a DomHelper config\nto create and insert <em>or</em> an array of any of those.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "where",
            "doc": "<p>(optional) 'before' or 'after' defaults to before</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) True to return the .;ll;l,raw DOM element instead of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n"
          }
        ],
        "alias": null,
        "name": "insertSibling",
        "shortDoc": "Inserts (or creates) the passed element (or DomHelper config) as a sibling of this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Inserts (or creates) the passed element (or DomHelper config) as a sibling of this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The inserted Element. If an array is passed, the last inserted element is returned.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 377,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-is",
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
            "name": "selector",
            "doc": "<p>The simple selector to test</p>\n"
          }
        ],
        "alias": null,
        "name": "is",
        "shortDoc": "Returns true if this element matches the passed simple selector (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Returns true if this element matches the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this element matches the selector, else false</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 656,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-isBorderBox",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isBorderBox",
        "shortDoc": "Tests various css rules/browsers to determine if this element uses a border box ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Tests various css rules/browsers to determine if this element uses a border box</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 37,
        "owner": "Ext.Element",
        "html_filename": "Element.fx-more.html",
        "href": "Element.fx-more.html#Ext-Element-method-isDisplayed",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isDisplayed",
        "shortDoc": "Returns true if display is not \"none\" ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
        "doc": "<p>Returns true if display is not \"none\"</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 148,
        "owner": "Ext.Element",
        "html_filename": "Element.fx-more.html",
        "href": "Element.fx-more.html#Ext-Element-method-isMasked",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isMasked",
        "shortDoc": "Returns true if this element is masked. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
        "doc": "<p>Returns true if this element is masked. Also re-centers any displayed message within the mask.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 5,
        "owner": "Ext.Element",
        "html_filename": "Element.scroll.html",
        "href": "Element.scroll.html#Ext-Element-method-isScrollable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isScrollable",
        "shortDoc": "Returns true if this element is scrollable. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
        "doc": "<p>Returns true if this element is scrollable.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 83,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-method-isVisible",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isVisible",
        "shortDoc": "Checks whether the element is currently visible using both visibility and display properties. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Checks whether the element is currently visible using both visibility and display properties.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the element is currently visible, else false</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 146,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-last",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "selector",
            "doc": "<p>(optional) Find the previous sibling that matches the passed simple selector</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n"
          }
        ],
        "alias": null,
        "name": "last",
        "shortDoc": "Gets the last child, skipping text nodes ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Gets the last child, skipping text nodes</p>\n",
        "return": {
          "type": "Ext.Element/HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The last child or null</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 121,
        "owner": "Ext.Element",
        "html_filename": "Element-more.html",
        "href": "Element-more.html#Ext-Element-method-load",
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
            "name": "options",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "load",
        "shortDoc": "Direct access to the Ext.ElementLoader Ext.ElementLoader.load method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
        "doc": "<p>Direct access to the <a href=\"#/api/Ext.ElementLoader\" rel=\"Ext.ElementLoader\" class=\"docClass\">Ext.ElementLoader</a> <a href=\"#/api/Ext.ElementLoader-method-load\" rel=\"Ext.ElementLoader-method-load\" class=\"docClass\">Ext.ElementLoader.load</a> method. The method takes the same object\nparameter as <a href=\"#/api/Ext.ElementLoader-method-load\" rel=\"Ext.ElementLoader-method-load\" class=\"docClass\">Ext.ElementLoader.load</a></p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 60,
        "owner": "Ext.Element",
        "html_filename": "Element.fx-more.html",
        "href": "Element.fx-more.html#Ext-Element-method-mask",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "msg",
            "doc": "<p>(optional) A message to display in the mask</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "msgCls",
            "doc": "<p>(optional) A css class to apply to the msg element</p>\n"
          }
        ],
        "alias": null,
        "name": "mask",
        "shortDoc": "Puts a mask over this element to disable user interaction. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
        "doc": "<p>Puts a mask over this element to disable user interaction. Requires core.css.\nThis method can only be applied to elements which accept child nodes.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The mask element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 7,
        "owner": "Ext.Element",
        "html_filename": "Element-more.html",
        "href": "Element-more.html#Ext-Element-method-monitorMouseLeave",
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
            "name": "delay",
            "doc": "<p>The delay <b>in milliseconds</b> to wait for possible mouse re-entry before calling the handler function.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The function to call if the mouse remains outside of this Element for the specified time.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope (<code>this</code> reference) in which the handler function executes. Defaults to this Element.</p>\n"
          }
        ],
        "alias": null,
        "name": "monitorMouseLeave",
        "shortDoc": "Monitors this Element for the mouse leaving. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
        "doc": "<p>Monitors this Element for the mouse leaving. Calls the function after the specified delay only if\nthe mouse was not moved back into the Element within the delay. If the mouse <i>was</i> moved\nback in, the function is not called.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The listeners object which was added to this element so that monitoring can be stopped. Example usage:</pre><code>\n// Hide the menu if the mouse moves out for 250ms or more\nthis.mouseLeaveMonitor = this.menuEl.monitorMouseLeave(250, this.hideMenu, this);</p>\n\n<p>...\n// Remove mouseleave monitor on menu destroy\nthis.menuEl.un(this.mouseLeaveMonitor);\n</code></pre></p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 390,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-move",
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
            "doc": "<p>Possible values are: \"l\" (or \"left\"), \"r\" (or \"right\"), \"t\" (or \"top\", or \"up\"), \"b\" (or \"bottom\", or \"down\").</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "distance",
            "doc": "<p>How far to move the element in pixels</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "move",
        "shortDoc": "Move this element relative to its current position. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Move this element relative to its current position.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 146,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-moveTo",
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
            "name": "x",
            "doc": "<p>X value for new position (coordinates are page-based)</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "y",
            "doc": "<p>Y value for new position (coordinates are page-based)</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "moveTo",
        "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 115,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-next",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "selector",
            "doc": "<p>(optional) Find the next sibling that matches the passed simple selector</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n"
          }
        ],
        "alias": null,
        "name": "next",
        "shortDoc": "Gets the next sibling, skipping text nodes ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Gets the next sibling, skipping text nodes</p>\n",
        "return": {
          "type": "Ext.Element/HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The next sibling or null</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 763,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-on",
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
            "name": "eventName",
            "doc": "<p>The name of event to handle.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The handler function the event invokes. This function is passed the following parameters:</p>\n\n<ul>\n<li><p><strong>evt</strong> : EventObject</p>\n\n<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</p></li>\n<li><p><strong>el</strong> : HtmlElement</p>\n\n<p>The DOM element which was the target of the event. Note that this may be filtered by using the delegate option.</p></li>\n<li><p><strong>o</strong> : Object</p>\n\n<p>The options object from the addListener call.</p></li>\n</ul>\n\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<strong>this</strong> reference) in which the handler function is executed. <strong>If\nomitted, defaults to this Element.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) An object containing handler configuration properties. This may contain any of\nthe following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> Object :</p>\n\n<p>The scope (<strong>this</strong> reference) in which the handler function is executed. <strong>If omitted, defaults to this\nElement.</strong></p></li>\n<li><p><strong>delegate</strong> String:</p>\n\n<p>A simple selector to filter the target or look for a descendant of the target. See below for additional details.</p></li>\n<li><p><strong>stopEvent</strong> Boolean:</p>\n\n<p>True to stop the event. That is stop propagation, and prevent the default action.</p></li>\n<li><p><strong>preventDefault</strong> Boolean:</p>\n\n<p>True to prevent the default action</p></li>\n<li><p><strong>stopPropagation</strong> Boolean:</p>\n\n<p>True to prevent event propagation</p></li>\n<li><p><strong>normalized</strong> Boolean:</p>\n\n<p>False to pass a browser event to the handler function instead of an <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a></p></li>\n<li><p><strong>target</strong> Ext.Element:</p>\n\n<p>Only call the handler if the event was fired on the target Element, <em>not</em> if the event was bubbled up from a\nchild node.</p></li>\n<li><p><strong>delay</strong> Number:</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> Boolean:</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> Number:</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>In the following examples, the shorthand form <a href=\"#/api/Ext.Element-method-on\" rel=\"Ext.Element-method-on\" class=\"docClass\">on</a> is used rather than the more verbose addListener. The\ntwo are equivalent. Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener that auto stops the event and adds a custom argument (forumId) to the options\nobject. The options object is available as the third parameter in the handler function.</p>\n\n<p>Code:</p>\n\n<pre><code>el.on('click', this.onClick, this, {\n    single: true,\n    delay: 100,\n    stopEvent : true,\n    forumId: 4\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple handlers.</p>\n\n<p>Code:</p>\n\n<pre><code>el.on({\n    'click' : {\n        fn: this.onClick,\n        scope: this,\n        delay: 100\n    },\n    'mouseover' : {\n        fn: this.onMouseOver,\n        scope: this\n    },\n    'mouseout' : {\n        fn: this.onMouseOut,\n        scope: this\n    }\n});\n</code></pre>\n\n<p>Or a shorthand syntax:</p>\n\n<p>Code:</p>\n\n<pre><code>el.on({\n    'click' : this.onClick,\n    'mouseover' : this.onMouseOver,\n    'mouseout' : this.onMouseOut,\n    scope: this\n});\n</code></pre>\n\n<p><strong>delegate</strong></p>\n\n<p>This is a configuration option that you can pass along when registering a handler for an event to assist with\nevent delegation. Event delegation is a technique that is used to reduce memory consumption and prevent exposure\nto memory-leaks. By registering an event for a container element as opposed to each element within a container.\nBy setting this configuration option to a simple selector, the target element will be filtered to look for a\ndescendant of the target. For example:</p>\n\n<pre><code>// using this markup:\n&lt;div id='elId'&gt;\n    &lt;p id='p1'&gt;paragraph one&lt;/p&gt;\n    &lt;p id='p2' class='clickable'&gt;paragraph two&lt;/p&gt;\n    &lt;p id='p3'&gt;paragraph three&lt;/p&gt;\n&lt;/div&gt;\n\n// utilize event delegation to registering just one handler on the container element:\nel = Ext.get('elId');\nel.on(\n    'click',\n    function(e,t) {\n        // handle click\n        console.info(t.id); // 'p2'\n    },\n    this,\n    {\n        // filter the target element to be a descendant with the class 'clickable'\n        delegate: '.clickable'\n    }\n);\n</code></pre>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "addListener",
          "doc": "Shorthand for {@link #addListener}."
        },
        "name": "on",
        "shortDoc": "Shorthand for addListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this element.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 105,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-parent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "selector",
            "doc": "<p>(optional) Find a parent node that matches the passed simple selector</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n"
          }
        ],
        "alias": null,
        "name": "parent",
        "shortDoc": "Gets the parent node for this element, optionally chaining up trying to match a selector ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Gets the parent node for this element, optionally chaining up trying to match a selector</p>\n",
        "return": {
          "type": "Ext.Element/HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The parent node or null</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 749,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-pause",
        "protected": false,
        "deprecated": {
          "text": "\n",
          "tagname": "deprecated",
          "version": "4.0",
          "doc": "Creates a pause before any subsequent queued effects begin. If there are no effects queued after the pause it will\nhave no effect. Usage:\n\n    el.pause(1);"
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "seconds",
            "doc": "<p>The length of time to pause (in seconds)</p>\n"
          }
        ],
        "alias": null,
        "name": "pause",
        "shortDoc": "Creates a pause before any subsequent queued effects begin. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Creates a pause before any subsequent queued effects begin. If there are no effects queued after the pause it will\nhave no effect. Usage:</p>\n\n<pre><code>el.pause(1);\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 196,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-position",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "pos",
            "doc": "<p>(optional) Positioning to use \"relative\", \"absolute\" or \"fixed\"</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "zIndex",
            "doc": "<p>(optional) The zIndex to apply</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "x",
            "doc": "<p>(optional) Set the page X position</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "y",
            "doc": "<p>(optional) Set the page Y position</p>\n"
          }
        ],
        "alias": null,
        "name": "position",
        "shortDoc": "Initializes positioning on this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Initializes positioning on this element. If a desired position is not passed, it will make the\nthe element positioned relative IF it is not already positioned.</p>\n",
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
        "linenr": 125,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-prev",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "selector",
            "doc": "<p>(optional) Find the previous sibling that matches the passed simple selector</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n"
          }
        ],
        "alias": null,
        "name": "prev",
        "shortDoc": "Gets the previous sibling, skipping text nodes ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Gets the previous sibling, skipping text nodes</p>\n",
        "return": {
          "type": "Ext.Element/HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The previous sibling or null</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 358,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-puff",
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
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "puff",
        "shortDoc": "Fades the element out while slowly expanding it in all directions. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Fades the element out while slowly expanding it in all directions. When the effect is completed, the element will\nbe hidden (visibility = 'hidden') but block elements will still take up space in the document. Usage:</p>\n\n<pre><code>// default\nel.puff();\n\n// common config options shown with default values\nel.puff({\n    easing: 'easeOut',\n    duration: 500,\n    useDisplay: false\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 617,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-purgeAllListeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "purgeAllListeners",
        "shortDoc": "Recursively removes all previous added listeners from this element and its children ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Recursively removes all previous added listeners from this element and its children</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 68,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-query",
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
            "name": "selector",
            "doc": "<p>The CSS selector</p>\n"
          }
        ],
        "alias": null,
        "name": "query",
        "shortDoc": "Selects child nodes based on the passed CSS selector (the selector should not contain an id). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Selects child nodes based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "return": {
          "type": "HTMLElement[]",
          "properties": null,
          "name": "return",
          "doc": "<p>An array of the matched nodes</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 145,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-radioCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": false,
            "name": "className",
            "doc": "<p>The CSS class to add, or an array of classes</p>\n"
          }
        ],
        "alias": null,
        "name": "radioCls",
        "shortDoc": "Adds one or more CSS classes to this element and removes the same class(es) from all siblings. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Adds one or more CSS classes to this element and removes the same class(es) from all siblings.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 65,
        "owner": "Ext.Element",
        "html_filename": "Element-more.html",
        "href": "Element-more.html#Ext-Element-method-relayEvent",
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
            "name": "eventName",
            "doc": "<p>The type of event to relay</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "object",
            "doc": "<p>Any object that extends <a href=\"#/api/Ext.util.Observable\" rel=\"Ext.util.Observable\" class=\"docClass\">Ext.util.Observable</a> that will provide the context\nfor firing the relayed event</p>\n"
          }
        ],
        "alias": null,
        "name": "relayEvent",
        "shortDoc": "Create an event handler on this element such that when the event fires and is handled by this element,\nit will be rel...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
        "doc": "<p>Create an event handler on this element such that when the event fires and is handled by this element,\nit will be relayed to another object (i.e., fired again as if it originated from that object instead).</p>\n",
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
        "linenr": 664,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-remove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "remove",
        "shortDoc": "Removes this element's dom reference. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Removes this element's dom reference. Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a></p>\n",
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
        "linenr": 608,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-removeAllListeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "removeAllListeners",
        "shortDoc": "Removes all previous added listeners from this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Removes all previous added listeners from this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 85,
        "owner": "Ext.Element",
        "html_filename": "Element.alignment.html",
        "href": "Element.alignment.html#Ext-Element-method-removeAnchor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "removeAnchor",
        "shortDoc": "Remove any anchor to this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
        "doc": "<p>Remove any anchor to this element. See <a href=\"#/api/Ext.Element-method-anchorTo\" rel=\"Ext.Element-method-anchorTo\" class=\"docClass\">anchorTo</a>.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 114,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-removeCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": false,
            "name": "className",
            "doc": "<p>The CSS classes to remove separated by space, or an array of classes</p>\n"
          }
        ],
        "alias": null,
        "name": "removeCls",
        "shortDoc": "Removes one or more CSS classes from the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Removes one or more CSS classes from the element.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 584,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-removeListener",
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
            "name": "eventName",
            "doc": "<p>The name of the event from which to remove the handler.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The handler function to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>If a scope (<strong>this</strong> reference) was specified when the listener was added, then this must\nrefer to the same object.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeListener",
        "shortDoc": "Removes an event handler from this element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Removes an event handler from this element.</p>\n\n<p><strong>Note</strong>: if a <em>scope</em> was explicitly specified when <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">adding</a> the listener,\nthe same scope must be specified here.</p>\n\n<p>Example:</p>\n\n<pre><code>el.removeListener('click', this.handlerFn);\n// or\nel.un('click', this.handlerFn);\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1050,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-repaint",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "repaint",
        "shortDoc": "Forces the browser to repaint this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Forces the browser to repaint this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 109,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-replace",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The element to replace.\nThe id of the node, a DOM Node or an existing Element.</p>\n"
          }
        ],
        "alias": null,
        "name": "replace",
        "shortDoc": "Replaces the passed element with this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Replaces the passed element with this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 203,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-replaceCls",
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
            "name": "oldClassName",
            "doc": "<p>The CSS class to replace</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "newClassName",
            "doc": "<p>The replacement CSS class</p>\n"
          }
        ],
        "alias": null,
        "name": "replaceCls",
        "shortDoc": "Replaces a CSS class on the element with another. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Replaces a CSS class on the element with another.  If the old name does not exist, the new name will simply be added.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 122,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-replaceWith",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element/Object",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The new element (id of the node, a DOM Node\nor an existing Element) or a DomHelper config of an element to create</p>\n"
          }
        ],
        "alias": null,
        "name": "replaceWith",
        "shortDoc": "Replaces this element with the passed element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Replaces this element with the passed element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 824,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-scale",
        "protected": false,
        "deprecated": {
          "text": "\n",
          "tagname": "deprecated",
          "version": "4.0",
          "doc": "Animates the transition of an element's dimensions from a starting height/width to an ending height/width. This\nmethod is a convenience implementation of {@link #shift}. Usage:\n\n    // change height and width to 100x100 pixels\n    el.scale(100, 100);\n\n    // common config options shown with default values.  The height and width will default to\n    // the element's existing values if passed as null.\n    el.scale(\n        [element's width],\n        [element's height], {\n            easing: 'easeOut',\n            duration: .35\n        }\n    );"
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "width",
            "doc": "<p>The new width (pass undefined to keep the original width)</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "<p>The new height (pass undefined to keep the original height)</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "scale",
        "shortDoc": "Animates the transition of an element's dimensions from a starting height/width to an ending height/width. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Animates the transition of an element's dimensions from a starting height/width to an ending height/width. This\nmethod is a convenience implementation of <a href=\"#/api/Ext.Element-method-shift\" rel=\"Ext.Element-method-shift\" class=\"docClass\">shift</a>. Usage:</p>\n\n<pre><code>// change height and width to 100x100 pixels\nel.scale(100, 100);\n\n// common config options shown with default values.  The height and width will default to\n// the element's existing values if passed as null.\nel.scale(\n    [element's width],\n    [element's height], {\n        easing: 'easeOut',\n        duration: .35\n    }\n);\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 128,
        "owner": "Ext.Element",
        "html_filename": "Element.scroll.html",
        "href": "Element.scroll.html#Ext-Element-method-scroll",
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
            "doc": "<p>Possible values are: \"l\" (or \"left\"), \"r\" (or \"right\"), \"t\" (or \"top\", or \"up\"), \"b\" (or \"bottom\", or \"down\").</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "distance",
            "doc": "<p>How far to scroll the element in pixels</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "scroll",
        "shortDoc": "Scrolls this element the specified direction. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
        "doc": "<p>Scrolls this element the specified direction. Does bounds checking to make sure the scroll is\nwithin this element's scrollable range.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns true if a scroll was triggered or false if the element\nwas scrolled as far as it could go.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 80,
        "owner": "Ext.Element",
        "html_filename": "Element.scroll.html",
        "href": "Element.scroll.html#Ext-Element-method-scrollIntoView",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": true,
            "name": "container",
            "doc": "<p>(optional) The container element to scroll (defaults to document.body).  Should be a\nstring (id), dom node, or <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "hscroll",
            "doc": "<p>(optional) False to disable horizontal scroll (defaults to true)</p>\n"
          }
        ],
        "alias": null,
        "name": "scrollIntoView",
        "shortDoc": "Scrolls this element into view within the passed container. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
        "doc": "<p>Scrolls this element into view within the passed container.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 49,
        "owner": "Ext.Element",
        "html_filename": "Element.scroll.html",
        "href": "Element.scroll.html#Ext-Element-method-scrollTo",
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
            "name": "side",
            "doc": "<p>Either \"left\" for scrollLeft values or \"top\" for scrollTop values.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The new scroll value</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "scrollTo",
        "shortDoc": "Scrolls this element the specified scroll point. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
        "doc": "<p>Scrolls this element the specified scroll point. It does NOT do bounds checking so if you scroll to a weird value it will try to do it. For auto bounds checking, use scroll().</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 59,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-select",
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
            "name": "selector",
            "doc": "<p>The CSS selector</p>\n"
          }
        ],
        "alias": null,
        "name": "select",
        "shortDoc": "Creates a Ext.CompositeElement for child nodes based on the passed CSS selector (the selector should not contain an id). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Creates a <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">Ext.CompositeElement</a> for child nodes based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "return": {
          "type": "Ext.CompositeElement/Ext.CompositeElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The composite element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 253,
        "owner": "Ext.Element",
        "html_filename": "Element.static-more.html",
        "href": "Element.static-more.html#Ext-Element-method-serializeForm",
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
            "name": "form",
            "doc": "<p>The form</p>\n"
          }
        ],
        "alias": null,
        "name": "serializeForm",
        "shortDoc": "Serializes a DOM form into a url encoded string ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.static-more.js",
        "doc": "<p>Serializes a DOM form into a url encoded string</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The url encoded form</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 117,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-set",
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
            "name": "o",
            "doc": "<p>The object with the attributes</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "useSet",
            "doc": "<p>(optional) false to override the default setAttribute to use expandos.</p>\n"
          }
        ],
        "alias": null,
        "name": "set",
        "shortDoc": "Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function)</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 103,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setBottom",
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
            "name": "bottom",
            "doc": "<p>The bottom CSS property value</p>\n"
          }
        ],
        "alias": null,
        "name": "setBottom",
        "shortDoc": "Sets the element's CSS bottom style. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the element's CSS bottom style.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 518,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setBounds",
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
            "name": "x",
            "doc": "<p>X value for new position (coordinates are page-based)</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "y",
            "doc": "<p>Y value for new position (coordinates are page-based)</p>\n"
          },
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "width",
            "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels)</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n</ul></div></p>\n"
          },
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels)</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setBounds",
        "shortDoc": "Sets the element's position and size in one shot. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the element's position and size in one shot. If animation is true then width, height, x and y will be animated concurrently.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 308,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setBox",
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
            "name": "box",
            "doc": "<p>The box to fill {x, y, width, height}</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "adjust",
            "doc": "<p>(optional) Whether to adjust for box-model issues automatically</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setBox",
        "shortDoc": "Sets the element's box. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the element's box. Use getBox() on another element to get a box obj. If animate is true then width, height, x and y will be animated concurrently.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 220,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-method-setDisplayed",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean/String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>Boolean value to display the element using its default display, or a string to set the display directly.</p>\n"
          }
        ],
        "alias": null,
        "name": "setDisplayed",
        "shortDoc": "Sets the CSS display property. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Sets the CSS display property. Uses originalDisplay if the specified value is a boolean true.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 611,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-setHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels.)</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setHeight",
        "shortDoc": "Set the height of this Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Set the height of this Element.</p>\n\n<pre><code>// change the height to 200px and animate with default configuration\nExt.fly('elementId').setHeight(200, true);\n\n// change the height to 150px and animate with a custom configuration\nExt.fly('elId').setHeight(150, {\n    duration : .5, // animation will have a duration of .5 seconds\n    // will change the content to \"finished\"\n    callback: function(){ this.<a href=\"#/api/Ext.Element-method-update\" rel=\"Ext.Element-method-update\" class=\"docClass\">update</a>(\"finished\"); }\n});\n</code></pre>\n\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 73,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setLeft",
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
            "name": "left",
            "doc": "<p>The left CSS property value</p>\n"
          }
        ],
        "alias": null,
        "name": "setLeft",
        "shortDoc": "Sets the element's left position directly using CSS style (instead of setX). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the element's left position directly using CSS style (instead of <a href=\"#/api/Ext.Element-method-setX\" rel=\"Ext.Element-method-setX\" class=\"docClass\">setX</a>).</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 423,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setLeftTop",
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
            "name": "left",
            "doc": "<p>The left CSS property value</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "top",
            "doc": "<p>The top CSS property value</p>\n"
          }
        ],
        "alias": null,
        "name": "setLeftTop",
        "shortDoc": "Quick set left and top adding default units ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Quick set left and top adding default units</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 134,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setLocation",
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
            "name": "x",
            "doc": "<p>X value for new position (coordinates are page-based)</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "y",
            "doc": "<p>Y value for new position (coordinates are page-based)</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setLocation",
        "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 368,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-setOpacity",
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
            "name": "opacity",
            "doc": "<p>The new opacity. 0 = transparent, .5 = 50% visibile, 1 = fully visible, etc</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) a standard Element animation config object or <tt>true</tt> for\nthe default animation (<tt>{duration: .35, easing: 'easeIn'}</tt>)</p>\n"
          }
        ],
        "alias": null,
        "name": "setOpacity",
        "shortDoc": "Set the opacity of the element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Set the opacity of the element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 256,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setPositioning",
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
            "name": "posCfg",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "setPositioning",
        "shortDoc": "Set positioning with an object returned by getPositioning(). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Set positioning with an object returned by getPositioning().</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 554,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setRegion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Region",
            "properties": [

            ],
            "optional": false,
            "name": "region",
            "doc": "<p>The region to fill</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setRegion",
        "shortDoc": "Sets the element's position and size the specified region. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the element's position and size the specified region. If animation is true then width, height, x and y will be animated concurrently.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 93,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setRight",
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
            "name": "right",
            "doc": "<p>The right CSS property value</p>\n"
          }
        ],
        "alias": null,
        "name": "setRight",
        "shortDoc": "Sets the element's CSS right style. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the element's CSS right style.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 803,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-setSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "width",
            "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n</ul></div></p>\n"
          },
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setSize",
        "shortDoc": "Set the size of this Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Set the size of this Element. If animation is true, both width and height will be animated concurrently.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 336,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-setStyle",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object",
            "properties": [

            ],
            "optional": false,
            "name": "property",
            "doc": "<p>The style property to be set, or an object of multiple styles.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "value",
            "doc": "<p>(optional) The value to apply to the given property, or null if an object was passed.</p>\n"
          }
        ],
        "alias": null,
        "name": "setStyle",
        "shortDoc": "Wrapper for setting style properties, also takes single object parameter of multiple styles. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Wrapper for setting style properties, also takes single object parameter of multiple styles.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 83,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setTop",
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
            "name": "top",
            "doc": "<p>The top CSS property value</p>\n"
          }
        ],
        "alias": null,
        "name": "setTop",
        "shortDoc": "Sets the element's top position directly using CSS style (instead of setY). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the element's top position directly using CSS style (instead of <a href=\"#/api/Ext.Element-method-setY\" rel=\"Ext.Element-method-setY\" class=\"docClass\">setY</a>).</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 72,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-method-setVisibilityMode",
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
            "name": "visMode",
            "doc": "<p>Ext.Element.VISIBILITY or Ext.Element.DISPLAY</p>\n"
          }
        ],
        "alias": null,
        "name": "setVisibilityMode",
        "shortDoc": "Sets the element's visibility mode. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Sets the element's visibility mode. When setVisible() is called it\nwill use this to determine whether to set the visibility or the display property.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 104,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-method-setVisible",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "visible",
            "doc": "<p>Whether the element is visible</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setVisible",
        "shortDoc": "Sets the visibility of the element (see details). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Sets the visibility of the element (see details). If the visibilityMode is set to Element.DISPLAY, it will use\nthe display property to hide the element, otherwise it uses visibility. The default is to hide and show using the visibility property.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 583,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-setWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "width",
            "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n</ul></div></p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setWidth",
        "shortDoc": "Set the width of this Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Set the width of this Element.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 53,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setX",
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
            "name": "The",
            "doc": "<p>X position of the element</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setX",
        "shortDoc": "Sets the X position of the element based on page coordinates. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 113,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setXY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number[]",
            "properties": [

            ],
            "optional": false,
            "name": "pos",
            "doc": "<p>Contains X &amp; Y [x, y] values for new position (coordinates are page-based)</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setXY",
        "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 63,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-setY",
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
            "name": "The",
            "doc": "<p>Y position of the element</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "setY",
        "shortDoc": "Sets the Y position of the element based on page coordinates. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Sets the Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 855,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-shift",
        "protected": false,
        "deprecated": {
          "text": "\n",
          "tagname": "deprecated",
          "version": "4.0",
          "doc": "Animates the transition of any combination of an element's dimensions, xy position and/or opacity. Any of these\nproperties not specified in the config object will not be changed. This effect requires that at least one new\ndimension, position or opacity setting must be passed in on the config object in order for the function to have\nany effect. Usage:\n\n    // slide the element horizontally to x position 200 while changing the height and opacity\n    el.shift({ x: 200, height: 50, opacity: .8 });\n\n    // common config options shown with default values.\n    el.shift({\n        width: [element's width],\n        height: [element's height],\n        x: [element's x position],\n        y: [element's y position],\n        opacity: [element's opacity],\n        easing: 'easeOut',\n        duration: .35\n    });"
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "options",
            "doc": "<p>Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "shift",
        "shortDoc": "Animates the transition of any combination of an element's dimensions, xy position and/or opacity. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Animates the transition of any combination of an element's dimensions, xy position and/or opacity. Any of these\nproperties not specified in the config object will not be changed. This effect requires that at least one new\ndimension, position or opacity setting must be passed in on the config object in order for the function to have\nany effect. Usage:</p>\n\n<pre><code>// slide the element horizontally to x position 200 while changing the height and opacity\nel.shift({ x: 200, height: 50, opacity: .8 });\n\n// common config options shown with default values.\nel.shift({\n    width: [element's width],\n    height: [element's height],\n    x: [element's x position],\n    y: [element's y position],\n    opacity: [element's opacity],\n    easing: 'easeOut',\n    duration: .35\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 260,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-method-show",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "show",
        "shortDoc": "Show this element - Uses display mode to determine whether to use \"display\" or \"visibility\". ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Show this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.Element-method-setVisible\" rel=\"Ext.Element-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 81,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-slideIn",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "anchor",
            "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to top: 't')</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "slideIn",
        "shortDoc": "Slides the element into view. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Slides the element into view. An anchor point can be optionally passed to set the point of origin for the slide\neffect. This function automatically handles wrapping the element with a fixed-size container if needed. See the\nFx class overview for valid anchor point options. Usage:</p>\n\n<pre><code>// default: slide the element in from the top\nel.slideIn();\n\n// custom: slide the element in from the right with a 2-second duration\nel.slideIn('r', { duration: 2000 });\n\n// common config options shown with default values\nel.slideIn('t', {\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 329,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-slideOut",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "anchor",
            "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to top: 't')</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "slideOut",
        "shortDoc": "Slides the element out of view. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Slides the element out of view. An anchor point can be optionally passed to set the end point for the slide\neffect. When the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will\nstill take up space in the document. The element must be removed from the DOM using the 'remove' config option if\ndesired. This function automatically handles wrapping the element with a fixed-size container if needed. See the\nFx class overview for valid anchor point options. Usage:</p>\n\n<pre><code>// default: slide the element out to the top\nel.slideOut();\n\n// custom: slide the element out to the right with a 2-second duration\nel.slideOut('r', { duration: 2000 });\n\n// common config options shown with default values\nel.slideOut('t', {\n    easing: 'easeOut',\n    duration: 500,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 40,
        "owner": "Ext.Element",
        "html_filename": "Element-more.html",
        "href": "Element-more.html#Ext-Element-method-swallowEvent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": false,
            "name": "eventName",
            "doc": "<p>an event / array of events to stop from bubbling</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "preventDefault",
            "doc": "<p>(optional) true to prevent the default action too</p>\n"
          }
        ],
        "alias": null,
        "name": "swallowEvent",
        "shortDoc": "Stops the specified event(s) from bubbling and optionally prevents the default action ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
        "doc": "<p>Stops the specified event(s) from bubbling and optionally prevents the default action</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 425,
        "owner": "Ext.Element",
        "html_filename": "Element.anim.html",
        "href": "Element.anim.html#Ext-Element-method-switchOff",
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
            "name": "options",
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n"
          }
        ],
        "alias": null,
        "name": "switchOff",
        "shortDoc": "Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
        "doc": "<p>Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).\nWhen the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will still\ntake up space in the document. The element must be removed from the DOM using the 'remove' config option if\ndesired. Usage:</p>\n\n<pre><code>// default\nel.switchOff();\n\n// all config options shown with default values\nel.switchOff({\n    easing: 'easeIn',\n    duration: .3,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 209,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-method-toggle",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": true,
            "name": "animate",
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n"
          }
        ],
        "alias": null,
        "name": "toggle",
        "shortDoc": "Toggles the element's visibility or display, depending on visibility mode. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>Toggles the element's visibility or display, depending on visibility mode.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 163,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-toggleCls",
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
            "name": "className",
            "doc": "<p>The CSS class to toggle</p>\n"
          }
        ],
        "alias": null,
        "name": "toggleCls",
        "shortDoc": "Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it).</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 277,
        "owner": "Ext.Element",
        "html_filename": "Element.position.html",
        "href": "Element.position.html#Ext-Element-method-translatePoints",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/Number[]",
            "properties": [

            ],
            "optional": false,
            "name": "x",
            "doc": "<p>The page x or an array containing [x, y]</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "y",
            "doc": "<p>(optional) The page y, required if x is not an array</p>\n"
          }
        ],
        "alias": null,
        "name": "translatePoints",
        "shortDoc": "Translates the passed page coordinates into left/top css values for this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
        "doc": "<p>Translates the passed page coordinates into left/top css values for this element</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object with left and top properties. e.g. {left: (value), top: (value)}</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 770,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-un",
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
            "name": "eventName",
            "doc": "<p>The name of the event from which to remove the handler.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The handler function to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>If a scope (<strong>this</strong> reference) was specified when the listener was added, then this must\nrefer to the same object.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "removeListener",
          "doc": "Shorthand for {@link #removeListener}."
        },
        "name": "un",
        "shortDoc": "Shorthand for removeListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Element-method-removeListener\" rel=\"Ext.Element-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler from this element.</p>\n\n<p><strong>Note</strong>: if a <em>scope</em> was explicitly specified when <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">adding</a> the listener,\nthe same scope must be specified here.</p>\n\n<p>Example:</p>\n\n<pre><code>el.removeListener('click', this.handlerFn);\n// or\nel.un('click', this.handlerFn);\n</code></pre>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 692,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-unclip",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "unclip",
        "shortDoc": "Return clipping (overflow) to original clipping before clip was called ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Return clipping (overflow) to original clipping before <tt><a href=\"#/api/Ext.Element-method-clip\" rel=\"Ext.Element-method-clip\" class=\"docClass\">clip</a></tt> was called</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 123,
        "owner": "Ext.Element",
        "html_filename": "Element.fx-more.html",
        "href": "Element.fx-more.html#Ext-Element-method-unmask",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "unmask",
        "shortDoc": "Removes a previously applied mask. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
        "doc": "<p>Removes a previously applied mask.</p>\n",
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
        "linenr": 1063,
        "owner": "Ext.Element",
        "html_filename": "Element.style.html",
        "href": "Element.style.html#Ext-Element-method-unselectable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "unselectable",
        "shortDoc": "Disables text selection for this element (normalized across browsers) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
        "doc": "<p>Disables text selection for this element (normalized across browsers)</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 47,
        "owner": "Ext.Element",
        "html_filename": "Element.traversal.html",
        "href": "Element.traversal.html#Ext-Element-method-up",
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
            "name": "selector",
            "doc": "<p>The simple selector to test</p>\n"
          },
          {
            "type": "Number/String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": true,
            "name": "maxDepth",
            "doc": "<p>(optional)\nThe max depth to search as a number or element (defaults to 10 || document.body)</p>\n"
          }
        ],
        "alias": null,
        "name": "up",
        "shortDoc": "Walks up the dom looking for a parent node that matches the passed simple selector (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
        "doc": "<p>Walks up the dom looking for a parent node that matches the passed simple selector (e.g. div.some-class or span:first-child).\nThis is a shortcut for findParentNode() that always returns an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The matching DOM node (or null if no match was found)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 744,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-method-update",
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
            "name": "html",
            "doc": "<p>The new HTML</p>\n"
          }
        ],
        "alias": null,
        "name": "update",
        "shortDoc": "Update the innerHTML of this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Update the innerHTML of this element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 163,
        "owner": "Ext.Element",
        "html_filename": "Element.insertion.html",
        "href": "Element.insertion.html#Ext-Element-method-wrap",
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
            "doc": "<p>(optional) DomHelper element config object for the wrapper element or null for an empty div</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnDom",
            "doc": "<p>(optional) True to return the raw DOM element instead of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n"
          }
        ],
        "alias": null,
        "name": "wrap",
        "shortDoc": "Creates and wraps this element with another element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
        "doc": "<p>Creates and wraps this element with another element</p>\n",
        "return": {
          "type": "HTMLElement/Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The newly created wrapper element</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 792,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-property-autoBoxAdjust",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "autoBoxAdjust",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>true to automatically adjust width and height settings for box-model issues (default to true)</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 371,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-property-defaultUnit",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "defaultUnit",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>The default unit to append to CSS values where a unit isn't provided (defaults to px).</p>\n"
      },
      {
        "static": false,
        "type": "HTMLElement",
        "inheritable": false,
        "properties": null,
        "linenr": 99,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-property-dom",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "dom",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>The DOM element</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 105,
        "owner": "Ext.Element",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-Element-property-id",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "id",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>The DOM element ID</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 65,
        "owner": "Ext.Element",
        "html_filename": "Element.fx.html",
        "href": "Element.fx.html#Ext-Element-property-originalDisplay",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "originalDisplay",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
        "doc": "<p>The element's default display mode  (defaults to \"\")</p>\n"
      }
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
  "name": "Ext.Element",
  "mixins": [

  ],
  "code_type": "assignment",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
  "doc": "<p>Encapsulates a DOM element, adding simple DOM manipulation facilities, normalizing for browser differences.</p>\n\n<p>All instances of this class inherit the methods of <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> making visual effects easily available to all\nDOM elements.</p>\n\n<p>Note that the events documented in this class are not Ext events, they encapsulate browser events. Some older browsers\nmay not support the full range of events. Which events are supported is beyond the control of ExtJS.</p>\n\n<p>Usage:</p>\n\n<pre><code>// by id\nvar el = Ext.get(\"my-div\");\n\n// by DOM element reference\nvar el = Ext.get(myDivElement);\n</code></pre>\n\n<h1>Animations</h1>\n\n<p>When an element is manipulated, by default there is no animation.</p>\n\n<pre><code>var el = Ext.get(\"my-div\");\n\n// no animation\nel.setWidth(100);\n</code></pre>\n\n<p>Many of the functions for manipulating an element have an optional \"animate\" parameter. This parameter can be\nspecified as boolean (true) for default animation effects.</p>\n\n<pre><code>// default animation\nel.setWidth(100, true);\n</code></pre>\n\n<p>To configure the effects, an object literal with animation options to use as the Element animation configuration\nobject can also be specified. Note that the supported Element animation configuration options are a subset of the\n<a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> animation options specific to Fx effects. The supported Element animation configuration options\nare:</p>\n\n<pre><code>Option    Default   Description\n--------- --------  ---------------------------------------------\n<a href=\"#/api/Ext.fx.Anim-cfg-duration\" rel=\"Ext.fx.Anim-cfg-duration\" class=\"docClass\">duration</a>  .35       The duration of the animation in seconds\n<a href=\"#/api/Ext.fx.Anim-cfg-easing\" rel=\"Ext.fx.Anim-cfg-easing\" class=\"docClass\">easing</a>    easeOut   The easing method\n<a href=\"#/api/Ext.fx.Anim-cfg-callback\" rel=\"Ext.fx.Anim-cfg-callback\" class=\"docClass\">callback</a>  none      A function to execute when the anim completes\n<a href=\"#/api/Ext.fx.Anim-cfg-scope\" rel=\"Ext.fx.Anim-cfg-scope\" class=\"docClass\">scope</a>     this      The scope (this) of the callback function\n</code></pre>\n\n<p>Usage:</p>\n\n<pre><code>// Element animation options object\nvar opt = {\n    <a href=\"#/api/Ext.fx.Anim-cfg-duration\" rel=\"Ext.fx.Anim-cfg-duration\" class=\"docClass\">duration</a>: 1,\n    <a href=\"#/api/Ext.fx.Anim-cfg-easing\" rel=\"Ext.fx.Anim-cfg-easing\" class=\"docClass\">easing</a>: 'elasticIn',\n    <a href=\"#/api/Ext.fx.Anim-cfg-callback\" rel=\"Ext.fx.Anim-cfg-callback\" class=\"docClass\">callback</a>: this.foo,\n    <a href=\"#/api/Ext.fx.Anim-cfg-scope\" rel=\"Ext.fx.Anim-cfg-scope\" class=\"docClass\">scope</a>: this\n};\n// animation with some options set\nel.setWidth(100, opt);\n</code></pre>\n\n<p>The Element animation object being used for the animation will be set on the options object as \"anim\", which allows\nyou to stop or manipulate the animation. Here is an example:</p>\n\n<pre><code>// using the \"anim\" property to get the Anim object\nif(opt.anim.isAnimated()){\n    opt.anim.stop();\n}\n</code></pre>\n\n<h1>Composite (Collections of) Elements</h1>\n\n<p>For working with collections of Elements, see <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">Ext.CompositeElement</a></p>\n",
  "alternateClassNames": [
    "Ext.core.Element"
  ]
});