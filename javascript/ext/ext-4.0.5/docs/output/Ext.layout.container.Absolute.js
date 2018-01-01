Ext.data.JsonP.Ext_layout_container_Absolute({
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
  "extends": "Ext.layout.container.Anchor",
  "html_filename": "Absolute.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Absolute.html#Ext-layout-container-Absolute",
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
        "linenr": 56,
        "owner": "Ext.layout.container.Anchor",
        "html_filename": "Anchor.html",
        "href": "Anchor.html#Ext-layout-container-Anchor-cfg-anchor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "anchor",
        "shortDoc": "This configuation option is to be applied to child items of a container managed by\nthis layout (ie. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Anchor.js",
        "doc": "<p>This configuation option is to be applied to <strong>child <code>items</code></strong> of a container managed by\nthis layout (ie. configured with <code>layout:'anchor'</code>).</p>\n\n<p>This value is what tells the layout how an item should be anchored to the container. <code>items</code>\nadded to an AnchorLayout accept an anchoring-specific config property of <strong>anchor</strong> which is a string\ncontaining two values: the horizontal anchor value and the vertical anchor value (for example, '100% 50%').\nThe following types of anchor values are supported:</p>\n\n<ul>\n<li><p><strong>Percentage</strong> : Any value between 1 and 100, expressed as a percentage.</p>\n\n<p>The first anchor is the percentage width that the item should take up within the container, and the\nsecond is the percentage height.  For example:</p>\n\n<pre><code>// two values specified\nanchor: '100% 50%' // render item complete width of the container and\n                   // 1/2 height of the container\n// one value specified\nanchor: '100%'     // the width value; the height will default to auto\n</code></pre></li>\n<li><p><strong>Offsets</strong> : Any positive or negative integer value.</p>\n\n<p>This is a raw adjustment where the first anchor is the offset from the right edge of the container,\nand the second is the offset from the bottom edge. For example:</p>\n\n<pre><code>// two values specified\nanchor: '-50 -100' // render item the complete width of the container\n                   // minus 50 pixels and\n                   // the complete height minus 100 pixels.\n// one value specified\nanchor: '-50'      // anchor value is assumed to be the right offset value\n                   // bottom offset will default to 0\n</code></pre></li>\n<li><p><strong>Sides</strong> : Valid values are <code>right</code> (or <code>r</code>) and <code>bottom</code> (or <code>b</code>).</p>\n\n<p>Either the container must have a fixed size or an anchorSize config value defined at render time in\norder for these to have any effect.</p></li>\n<li><p><strong>Mixed</strong> :</p>\n\n<p>Anchor values can also be mixed as needed.  For example, to render the width offset from the container\nright edge by 50 pixels and 75% of the container's height use:</p>\n\n<pre><code>anchor:   '-50 75%'\n</code></pre></li>\n</ul>\n\n"
      },
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
        "linenr": 105,
        "owner": "Ext.layout.container.Anchor",
        "html_filename": "Anchor.html",
        "href": "Anchor.html#Ext-layout-container-Anchor-cfg-defaultAnchor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "defaultAnchor",
        "shortDoc": "Default anchor for all child container items applied if no anchor or specific width is set on the child item. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Anchor.js",
        "doc": "<p>Default anchor for all child <b>container</b> items applied if no anchor or specific width is set on the child item.  Defaults to '100%'.</p>\n"
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
    "Ext.layout.container.Container",
    "Ext.layout.container.Anchor"
  ],
  "alias": null,
  "name": "Ext.layout.container.Absolute",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Absolute.js",
  "doc": "<p>This is a layout that inherits the anchoring of <a href=\"#/api/Ext.layout.container.Anchor\" rel=\"Ext.layout.container.Anchor\" class=\"docClass\">Ext.layout.container.Anchor</a> and adds the\nability for x/y positioning using the standard x and y component config options.</p>\n\n<p>This class is intended to be extended or created via the <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>\nconfiguration property.  See <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> for additional details.</p>\n\n<pre class=\"inline-example\"><code>Ext.create('Ext.form.Panel', {\n    title: 'Absolute Layout',\n    width: 300,\n    height: 275,\n    layout:'absolute',\n    layoutConfig: {\n        // layout-specific configs go here\n        //itemCls: 'x-abs-layout-item',\n    },\n    url:'save-form.php',\n    defaultType: 'textfield',\n    items: [{\n        x: 10,\n        y: 10,\n        xtype:'label',\n        text: 'Send To:'\n    },{\n        x: 80,\n        y: 10,\n        name: 'to',\n        anchor:'90%'  // anchor width by percentage\n    },{\n        x: 10,\n        y: 40,\n        xtype:'label',\n        text: 'Subject:'\n    },{\n        x: 80,\n        y: 40,\n        name: 'subject',\n        anchor: '90%'  // anchor width by percentage\n    },{\n        x:0,\n        y: 80,\n        xtype: 'textareafield',\n        name: 'msg',\n        anchor: '100% 100%'  // anchor width and height\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "alternateClassNames": [
    "Ext.layout.AbsoluteLayout"
  ]
});