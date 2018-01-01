Ext.data.JsonP.Ext_panel_Proxy({
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
  "html_filename": "Proxy.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Proxy.html#Ext-panel-Proxy",
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
        "linenr": 27,
        "owner": "Ext.panel.Proxy",
        "html_filename": "Proxy.html",
        "href": "Proxy.html#Ext-panel-Proxy-cfg-insertProxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "insertProxy",
        "shortDoc": "True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
        "doc": "<p>True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true).\nMost Panels are not absolute positioned and therefore we need to reserve\nthis space.</p>\n"
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
        "linenr": 12,
        "owner": "Ext.panel.Proxy",
        "html_filename": "Proxy.html",
        "href": "Proxy.html#Ext-panel-Proxy-method-constructor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.panel.Panel",
            "properties": [

            ],
            "optional": false,
            "name": "panel",
            "doc": "<p>The <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> to proxy for</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "config",
            "doc": "<p>(optional) Config object</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates new panel proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
        "doc": "<p>Creates new panel proxy.</p>\n",
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
        "linenr": 42,
        "owner": "Ext.panel.Proxy",
        "html_filename": "Proxy.html",
        "href": "Proxy.html#Ext-panel-Proxy-method-getEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getEl",
        "shortDoc": "Gets the proxy's element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
        "doc": "<p>Gets the proxy's element</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The proxy's element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 50,
        "owner": "Ext.panel.Proxy",
        "html_filename": "Proxy.html",
        "href": "Proxy.html#Ext-panel-Proxy-method-getGhost",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getGhost",
        "shortDoc": "Gets the proxy's ghost Panel ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
        "doc": "<p>Gets the proxy's ghost Panel</p>\n",
        "return": {
          "type": "Ext.panel.Panel",
          "properties": null,
          "name": "return",
          "doc": "<p>The proxy's ghost Panel</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 58,
        "owner": "Ext.panel.Proxy",
        "html_filename": "Proxy.html",
        "href": "Proxy.html#Ext-panel-Proxy-method-getProxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getProxy",
        "shortDoc": "Gets the proxy element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
        "doc": "<p>Gets the proxy element. This is the element that represents where the\nPanel was before we started the drag operation.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The proxy's element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 67,
        "owner": "Ext.panel.Proxy",
        "html_filename": "Proxy.html",
        "href": "Proxy.html#Ext-panel-Proxy-method-hide",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "hide",
        "shortDoc": "Hides the proxy ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
        "doc": "<p>Hides the proxy</p>\n",
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
        "linenr": 108,
        "owner": "Ext.panel.Proxy",
        "html_filename": "Proxy.html",
        "href": "Proxy.html#Ext-panel-Proxy-method-moveProxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "parentNode",
            "doc": "<p>The proxy's parent DOM node</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": true,
            "name": "before",
            "doc": "<p>(optional) The sibling node before which the\nproxy should be inserted (defaults to the parent's last child if not\nspecified)</p>\n"
          }
        ],
        "alias": null,
        "name": "moveProxy",
        "shortDoc": "Moves the proxy to a different position in the DOM. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
        "doc": "<p>Moves the proxy to a different position in the DOM.  This is typically\ncalled while dragging the Panel to keep the proxy sync'd to the Panel's\nlocation.</p>\n",
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
        "linenr": 83,
        "owner": "Ext.panel.Proxy",
        "html_filename": "Proxy.html",
        "href": "Proxy.html#Ext-panel-Proxy-method-show",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "show",
        "shortDoc": "Shows the proxy ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
        "doc": "<p>Shows the proxy</p>\n",
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
      {
        "static": false,
        "type": "Ext.panel.Panel",
        "inheritable": false,
        "properties": null,
        "linenr": 18,
        "owner": "Ext.panel.Proxy",
        "html_filename": "Proxy.html",
        "href": "Proxy.html#Ext-panel-Proxy-property-panel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "panel",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
        "doc": "\n"
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
  "name": "Ext.panel.Proxy",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
  "doc": "<p>A custom drag proxy implementation specific to <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a>s. This class\nis primarily used internally for the Panel's drag drop implementation, and\nshould never need to be created directly.</p>\n",
  "alternateClassNames": [
    "Ext.dd.PanelProxy"
  ]
});