Ext.data.JsonP.Ext_layout_container_Card({
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
  "extends": "Ext.layout.container.AbstractCard",
  "html_filename": "Card.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Card.html#Ext-layout-container-Card",
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
        "linenr": 17,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtComponent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "bindToOwnerCtComponent",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Flag to notify the ownerCt Component on afterLayout of a change</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 23,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtContainer",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "bindToOwnerCtContainer",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Flag to notify the ownerCt Container on afterLayout of a change</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 18,
        "owner": "Ext.layout.container.AbstractCard",
        "html_filename": "AbstractCard.html",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-cfg-deferredRender",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "deferredRender",
        "shortDoc": "True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
        "doc": "<p>True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the layout is rendered (defaults to false).  If there is a significant amount of content or\na lot of heavy controls being rendered into panels that are not displayed by default, setting this to\ntrue might improve performance.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 29,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-cfg-itemCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "itemCls",
        "shortDoc": "An optional extra CSS class that will be added to the container. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#/api/Ext.Component-cfg-componentCls\" rel=\"Ext.Component-cfg-componentCls\" class=\"docClass\">componentCls</a> also.</p>\n\n\n<p></p></p>\n"
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
        "linenr": 58,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-beforeLayout",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "beforeLayout",
        "shortDoc": "Containers should not lay out child components when collapsed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Containers should not lay out child components when collapsed.</p>\n",
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
        "linenr": 74,
        "owner": "Ext.layout.container.AbstractCard",
        "html_filename": "AbstractCard.html",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getActiveItem",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getActiveItem",
        "shortDoc": "Return the active (visible) component in the layout. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
        "doc": "<p>Return the active (visible) component in the layout.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 49,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-getLayoutItems",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getLayoutItems",
        "shortDoc": "Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\n...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\nbase class), or the layout phase (onLayout).</p>\n\n",
        "return": {
          "type": "Ext.Component[]",
          "properties": null,
          "name": "return",
          "doc": "<p>of child components</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 133,
        "owner": "Ext.layout.container.AbstractCard",
        "html_filename": "AbstractCard.html",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getNext",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getNext",
        "shortDoc": "Return the active (visible) component in the layout to the next card ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
        "doc": "<p>Return the active (visible) component in the layout to the next card</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>The next component or false.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 157,
        "owner": "Ext.layout.container.AbstractCard",
        "html_filename": "AbstractCard.html",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getPrev",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getPrev",
        "shortDoc": "Return the active (visible) component in the layout to the previous card ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
        "doc": "<p>Return the active (visible) component in the layout to the previous card</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>The previous component or false.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 75,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-getRenderTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRenderTarget",
        "shortDoc": "Returns the element into which rendering must take place. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Returns the element into which rendering must take place. Defaults to the owner Container's target element.</p>\n\n\n<p>May be overridden in layout managers which implement an inner element.</p>\n",
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
        "linenr": 53,
        "owner": "Ext.layout.container.Container",
        "html_filename": "Container3.html",
        "href": "Container3.html#Ext-layout-container-Container-method-getRenderedItems",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRenderedItems",
        "shortDoc": "Returns all items that are rendered ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Container.js",
        "doc": "<p>Returns all items that are rendered</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>All matching items</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 68,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-getTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getTarget",
        "shortDoc": "Returns the owner component's resize element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Returns the owner component's resize element.</p>\n",
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
        "linenr": 76,
        "owner": "Ext.layout.container.Container",
        "html_filename": "Container3.html",
        "href": "Container3.html#Ext-layout-container-Container-method-getVisibleItems",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getVisibleItems",
        "shortDoc": "Returns all items that are both rendered and visible ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Container.js",
        "doc": "<p>Returns all items that are both rendered and visible</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>All matching items</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 146,
        "owner": "Ext.layout.container.AbstractCard",
        "html_filename": "AbstractCard.html",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-next",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "next",
        "shortDoc": "Sets the active (visible) component in the layout to the next card ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
        "doc": "<p>Sets the active (visible) component in the layout to the next card</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>the activated component or false when nothing activated.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 170,
        "owner": "Ext.layout.container.AbstractCard",
        "html_filename": "AbstractCard.html",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-prev",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "prev",
        "shortDoc": "Sets the active (visible) component in the layout to the previous card ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
        "doc": "<p>Sets the active (visible) component in the layout to the previous card</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>the activated component or false when nothing activated.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 99,
        "owner": "Ext.layout.container.Card",
        "html_filename": "Card.html",
        "href": "Card.html#Ext-layout-container-Card-method-setActiveItem",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Component/Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "newCard",
            "doc": "<p>The component, component <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a>,\n<a href=\"#/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>, or index of component.</p>\n"
          }
        ],
        "alias": null,
        "name": "setActiveItem",
        "shortDoc": "Makes the given card active. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Card.js",
        "doc": "<p>Makes the given card active.</p>\n\n<pre><code>var card1 = Ext.create('Ext.panel.Panel', {itemId: 'card-1'});\nvar card2 = Ext.create('Ext.panel.Panel', {itemId: 'card-2'});\nvar panel = Ext.create('Ext.panel.Panel', {\n    layout: 'card',\n    activeItem: 0,\n    items: [card1, card2]\n});\n// These are all equivalent\npanel.getLayout().setActiveItem(card2);\npanel.getLayout().setActiveItem('card-2');\npanel.getLayout().setActiveItem(1);\n</code></pre>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>the activated component or false when nothing activated.\nFalse is returned also when trying to activate an already active card.</p>\n"
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
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.AbstractFit",
    "Ext.layout.container.Fit",
    "Ext.layout.container.AbstractCard"
  ],
  "alias": null,
  "name": "Ext.layout.container.Card",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Card.js",
  "doc": "<p>This layout manages multiple child Components, each fitted to the Container, where only a single child Component can be\nvisible at any given time.  This layout style is most commonly used for wizards, tab implementations, etc.\nThis class is intended to be extended or created via the layout:'card' <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config,\nand should generally not need to be created directly via the new keyword.</p>\n\n<p>The CardLayout's focal method is <a href=\"#/api/Ext.layout.container.Card-method-setActiveItem\" rel=\"Ext.layout.container.Card-method-setActiveItem\" class=\"docClass\">setActiveItem</a>.  Since only one panel is displayed at a time,\nthe only way to move from one Component to the next is by calling setActiveItem, passing the id or index of\nthe next panel to display.  The layout itself does not provide a user interface for handling this navigation,\nso that functionality must be provided by the developer.</p>\n\n<p>To change the active card of a container, call the setActiveItem method of its layout:</p>\n\n<pre><code>Ext.create('Ext.panel.Panel', {\n    layout: 'card',\n    items: [\n        { html: 'Card 1' },\n        { html: 'Card 2' }\n    ],\n    renderTo: Ext.getBody()\n});\n\np.getLayout().setActiveItem(1);\n</code></pre>\n\n<p>In the following example, a simplistic wizard setup is demonstrated.  A button bar is added\nto the footer of the containing panel to provide navigation buttons.  The buttons will be handled by a\ncommon navigation routine.  Note that other uses of a CardLayout (like a tab control) would require a\ncompletely different implementation.  For serious implementations, a better approach would be to extend\nCardLayout to provide the custom functionality needed.</p>\n\n<pre class=\"inline-example\"><code>var navigate = function(panel, direction){\n    // This routine could contain business logic required to manage the navigation steps.\n    // It would call setActiveItem as needed, manage navigation button state, handle any\n    // branching logic that might be required, handle alternate actions like cancellation\n    // or finalization, etc.  A complete wizard implementation could get pretty\n    // sophisticated depending on the complexity required, and should probably be\n    // done as a subclass of CardLayout in a real-world implementation.\n    var layout = panel.getLayout();\n    layout[direction]();\n    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());\n    Ext.getCmp('move-next').setDisabled(!layout.getNext());\n};\n\nExt.create('Ext.panel.Panel', {\n    title: 'Example Wizard',\n    width: 300,\n    height: 200,\n    layout: 'card',\n    bodyStyle: 'padding:15px',\n    defaults: {\n        // applied to each contained panel\n        border: false\n    },\n    // just an example of one possible navigation scheme, using buttons\n    bbar: [\n        {\n            id: 'move-prev',\n            text: 'Back',\n            handler: function(btn) {\n                navigate(btn.up(\"panel\"), \"prev\");\n            },\n            disabled: true\n        },\n        '-&gt;', // greedy spacer so that the buttons are aligned to each side\n        {\n            id: 'move-next',\n            text: 'Next',\n            handler: function(btn) {\n                navigate(btn.up(\"panel\"), \"next\");\n            }\n        }\n    ],\n    // the panels (or \"cards\") within the layout\n    items: [{\n        id: 'card-0',\n        html: '&lt;h1&gt;Welcome to the Wizard!&lt;/h1&gt;&lt;p&gt;Step 1 of 3&lt;/p&gt;'\n    },{\n        id: 'card-1',\n        html: '&lt;p&gt;Step 2 of 3&lt;/p&gt;'\n    },{\n        id: 'card-2',\n        html: '&lt;h1&gt;Congratulations!&lt;/h1&gt;&lt;p&gt;Step 3 of 3 - Complete&lt;/p&gt;'\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "alternateClassNames": [
    "Ext.layout.CardLayout"
  ]
});