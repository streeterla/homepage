Ext.data.JsonP.Ext_layout_container_CheckboxGroup({
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
  "html_filename": "CheckboxGroup2.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "CheckboxGroup2.html#Ext-layout-container-CheckboxGroup",
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
  "name": "Ext.layout.container.CheckboxGroup",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/CheckboxGroup.js",
  "doc": "<p>This layout implements the column arrangement for <a href=\"#/api/Ext.form.CheckboxGroup\" rel=\"Ext.form.CheckboxGroup\" class=\"docClass\">Ext.form.CheckboxGroup</a> and <a href=\"#/api/Ext.form.RadioGroup\" rel=\"Ext.form.RadioGroup\" class=\"docClass\">Ext.form.RadioGroup</a>.\nIt groups the component's sub-items into columns based on the component's\n<a href=\"#/api/Ext.form.CheckboxGroup-cfg-columns\" rel=\"Ext.form.CheckboxGroup-cfg-columns\" class=\"docClass\">columns</a> and <a href=\"#/api/Ext.form.CheckboxGroup-cfg-vertical\" rel=\"Ext.form.CheckboxGroup-cfg-vertical\" class=\"docClass\">Ext.form.CheckboxGroup.vertical</a> config properties.</p>\n\n",
  "alternateClassNames": [

  ]
});