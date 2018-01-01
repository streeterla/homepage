Ext.data.JsonP.Ext_layout_container_Border({
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
  "extends": "Ext.layout.container.Container",
  "html_filename": "Border.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Border.html#Ext-layout-container-Border",
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
        "linenr": 519,
        "owner": "Ext.layout.container.Border",
        "html_filename": "Border.html",
        "href": "Border.html#Ext-layout-container-Border-method-getPlaceholder",
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
            "doc": "<p>The child Panel of the layout for which to return the <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "getPlaceholder",
        "shortDoc": "Return the placeholder Component to which the passed child Panel of the\nlayout will collapse. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Border.js",
        "doc": "<p>Return the <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a> Component to which the passed child Panel of the\nlayout will collapse. By default, this will be a <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">Header</a> component (Docked to the\nappropriate border). See <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a>. config to customize this.</p>\n\n<p><strong>Note that this will be a fully instantiated Component, but will only be <em>rendered</em> when the Panel is first\ncollapsed.</strong></p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>The Panel's <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a> unless the <a href=\"#/api/Ext.panel.Panel-cfg-collapseMode\" rel=\"Ext.panel.Panel-cfg-collapseMode\" class=\"docClass\">collapseMode</a> is <code>'header'</code>, in which case <em>undefined</em> is returned.</p>\n"
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
    "Ext.layout.container.Container"
  ],
  "alias": null,
  "name": "Ext.layout.container.Border",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Border.js",
  "doc": "<p>This is a multi-pane, application-oriented UI layout style that supports multiple nested panels, automatic bars\nbetween regions and built-in <a href=\"#/api/Ext.panel.Panel-cfg-collapsible\" rel=\"Ext.panel.Panel-cfg-collapsible\" class=\"docClass\">expanding and collapsing</a> of regions.</p>\n\n<p>This class is intended to be extended or created via the <code>layout:'border'</code> <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a>\nconfig, and should generally not need to be created directly via the new keyword.</p>\n\n<pre class=\"inline-example\"><code>Ext.create('Ext.panel.Panel', {\n    width: 500,\n    height: 400,\n    title: 'Border Layout',\n    layout: 'border',\n    items: [{\n        title: 'South Region is resizable',\n        region: 'south',     // position for region\n        xtype: 'panel',\n        height: 100,\n        split: true,         // enable resizing\n        margins: '0 5 5 5'\n    },{\n        // xtype: 'panel' implied by default\n        title: 'West Region is collapsible',\n        region:'west',\n        xtype: 'panel',\n        margins: '5 0 0 5',\n        width: 200,\n        collapsible: true,   // make collapsible\n        id: 'west-region-container',\n        layout: 'fit'\n    },{\n        title: 'Center Region',\n        region: 'center',     // center region is required, no width/height specified\n        xtype: 'panel',\n        layout: 'fit',\n        margins: '5 5 0 0'\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n\n<h1>Notes</h1>\n\n<ul>\n<li><p>Any Container using the Border layout <strong>must</strong> have a child item with <code>region:'center'</code>.\nThe child item in the center region will always be resized to fill the remaining space\nnot used by the other regions in the layout.</p></li>\n<li><p>Any child items with a region of <code>west</code> or <code>east</code> may be configured with either an initial\n<code>width</code>, or a <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">Ext.layout.container.Box.flex</a> value, or an initial percentage width\n<strong>string</strong> (Which is simply divided by 100 and used as a flex value).\nThe 'center' region has a flex value of <code>1</code>.</p></li>\n<li><p>Any child items with a region of <code>north</code> or <code>south</code> may be configured with either an initial\n<code>height</code>, or a <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">Ext.layout.container.Box.flex</a> value, or an initial percentage height\n<strong>string</strong> (Which is simply divided by 100 and used as a flex value).\nThe 'center' region has a flex value of <code>1</code>.</p></li>\n<li><p>The regions of a BorderLayout are <strong>fixed at render time</strong> and thereafter, its child\nComponents may not be removed or added**. To add/remove Components within a BorderLayout,\nhave them wrapped by an additional Container which is directly managed by the BorderLayout.\nIf the region is to be collapsible, the Container used directly by the BorderLayout manager\nshould be a Panel. In the following example a Container (an Ext.panel.Panel) is added to\nthe west region:</p>\n\n<pre><code>wrc = <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>('west-region-container');\nwrc.<a href=\"#/api/Ext.container.Container-method-removeAll\" rel=\"Ext.container.Container-method-removeAll\" class=\"docClass\">removeAll</a>();\nwrc.<a href=\"#/api/Ext.container.Container-method-add\" rel=\"Ext.container.Container-method-add\" class=\"docClass\">add</a>({\n    title: 'Added Panel',\n    html: 'Some content'\n});\n</code></pre></li>\n<li><p><strong>There is no BorderLayout.Region class in ExtJS 4.0+</strong></p></li>\n</ul>\n\n",
  "alternateClassNames": [
    "Ext.layout.BorderLayout"
  ]
});