Ext.data.JsonP.Ext_chart_series_Line({
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
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 392,
        "href": "Base3.html#Ext-Base-method-addStatics",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "addStatics",
        "alias": null,
        "shortDoc": "Add / override static properties of this class. ...",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n\n"
        },
        "doc": "<p>Add / override static properties of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 482,
        "href": "Base3.html#Ext-Base-method-borrow",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Base",
            "optional": false,
            "properties": [

            ],
            "name": "fromClass",
            "doc": "<p>The class to borrow members from</p>\n\n"
          },
          {
            "type": "String/String[]",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "<p>The names of the members to borrow</p>\n\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "borrow",
        "alias": null,
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n\n"
        },
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 330,
        "href": "Base3.html#Ext-Base-method-create",
        "protected": false,
        "deprecated": null,
        "params": [

        ],
        "tagname": "method",
        "private": false,
        "name": "create",
        "alias": null,
        "shortDoc": "Create a new instance of this Class. ...",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>the created instance.</p>\n\n"
        },
        "doc": "<p>Create a new instance of this Class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n\n\n\n<p>All parameters are passed to the constructor of the class.</p>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 658,
        "href": "Base3.html#Ext-Base-method-createAlias",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "properties": [

            ],
            "name": "alias",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n\n"
          },
          {
            "type": "String/Object",
            "optional": false,
            "properties": [

            ],
            "name": "origin",
            "doc": "<p>The original method name</p>\n\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "createAlias",
        "alias": null,
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        },
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 639,
        "href": "Base3.html#Ext-Base-method-getName",
        "protected": false,
        "deprecated": null,
        "params": [

        ],
        "tagname": "method",
        "private": false,
        "name": "getName",
        "alias": null,
        "shortDoc": "Get the current class' name in string format. ...",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>className</p>\n\n"
        },
        "doc": "<p>Get the current class' name in string format.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 420,
        "href": "Base3.html#Ext-Base-method-implement",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "implement",
        "alias": null,
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        },
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 524,
        "href": "Base3.html#Ext-Base-method-override",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "override",
        "alias": null,
        "shortDoc": "Override prototype members of this class. ...",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n\n"
        },
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n\n\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      }
    ],
    "property": [

    ]
  },
  "extends": "Ext.chart.series.Cartesian",
  "html_filename": "Line.html",
  "allMixins": [
    "Ext.util.Observable",
    "Ext.chart.Label",
    "Ext.chart.Highlight",
    "Ext.chart.Tip",
    "Ext.chart.Callout"
  ],
  "docauthor": null,
  "href": "Line.html#Ext-chart-series-Line",
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
        "linenr": 112,
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "href": "Line.html#Ext-chart-series-Line-cfg-axis",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "axis",
        "shortDoc": "The position of the axis to bind the values to. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Line.js",
        "doc": "<p>The position of the axis to bind the values to. Possible values are 'left', 'bottom', 'top' and 'right'.\nYou must explicitly set this value to bind the values of the line series to the ones in the axis, otherwise a\nrelative scale will be used.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 188,
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "href": "Line.html#Ext-chart-series-Line-cfg-fill",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "fill",
        "shortDoc": "If true, the area below the line will be filled in using the eefill and\nopacity config properties. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Line.js",
        "doc": "<p>If true, the area below the line will be filled in using the <a href=\"#/api/Ext.chart.series.Line-cfg-style\" rel=\"Ext.chart.series.Line-cfg-style\" class=\"docClass\">eefill</a> and\n<a href=\"#/api/Ext.chart.series.Line-cfg-style\" rel=\"Ext.chart.series.Line-cfg-style\" class=\"docClass\">opacity</a> config properties. Defaults to false.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 45,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-cfg-highlight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "highlight",
        "shortDoc": "If set to true it will highlight the markers or the series when hovering\nwith the mouse. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>If set to <code>true</code> it will highlight the markers or the series when hovering\nwith the mouse. This parameter can also be an object with the same style\nproperties you would apply to a <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a> to apply custom\nstyles to markers and series.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 35,
        "owner": "Ext.chart.Label",
        "html_filename": "Label2.html",
        "href": "Label2.html#Ext-chart-Label-cfg-label",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "label",
        "shortDoc": "Object with the following properties:\n\n\ndisplay : String\n\nSpecifies the presence and position of labels for each pie ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/Label.js",
        "doc": "<p>Object with the following properties:</p>\n\n<ul>\n<li><p><strong>display</strong> : String</p>\n\n<p>Specifies the presence and position of labels for each pie slice. Either \"rotate\", \"middle\", \"insideStart\",\n\"insideEnd\", \"outside\", \"over\", \"under\", or \"none\" to prevent label rendering.\nDefault value: 'none'.</p></li>\n<li><p><strong>color</strong> : String</p>\n\n<p>The color of the label text.\nDefault value: '#000' (black).</p></li>\n<li><p><strong>contrast</strong> : Boolean</p>\n\n<p>True to render the label in contrasting color with the backround.\nDefault value: false.</p></li>\n<li><p><strong>field</strong> : String</p>\n\n<p>The name of the field to be displayed in the label.\nDefault value: 'name'.</p></li>\n<li><p><strong>minMargin</strong> : Number</p>\n\n<p>Specifies the minimum distance from a label to the origin of the visualization.\nThis parameter is useful when using PieSeries width variable pie slice lengths.\nDefault value: 50.</p></li>\n<li><p><strong>font</strong> : String</p>\n\n<p>The font used for the labels.\nDefault value: \"11px Helvetica, sans-serif\".</p></li>\n<li><p><strong>orientation</strong> : String</p>\n\n<p>Either \"horizontal\" or \"vertical\".\nDafault value: \"horizontal\".</p></li>\n<li><p><strong>renderer</strong> : Function</p>\n\n<p>Optional function for formatting the label into a displayable value.\nDefault value: function(v) { return v; }</p></li>\n</ul>\n\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 104,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-cfg-listeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "listeners",
        "shortDoc": "An (optional) object with event callbacks. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>An (optional) object with event callbacks. All event callbacks get the target <em>item</em> as first parameter. The callback functions are:</p>\n\n<p> <ul></p>\n\n<pre><code> &lt;li&gt;itemmouseover&lt;/li&gt;\n &lt;li&gt;itemmouseout&lt;/li&gt;\n &lt;li&gt;itemmousedown&lt;/li&gt;\n &lt;li&gt;itemmouseup&lt;/li&gt;\n</code></pre>\n\n<p> </ul></p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 132,
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "href": "Line.html#Ext-chart-series-Line-cfg-markerConfig",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "markerConfig",
        "shortDoc": "The display style for the markers. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Line.js",
        "doc": "<p>The display style for the markers. Only used if <a href=\"#/api/Ext.chart.series.Line-cfg-showMarkers\" rel=\"Ext.chart.series.Line-cfg-showMarkers\" class=\"docClass\">showMarkers</a> is true.\nThe markerConfig is a configuration object containing the same set of properties defined in\nthe Sprite class. For example, if we were to set red circles as markers to the line series we could\npass the object:</p>\n\n<pre><code>        markerConfig: {\n            type: 'circle',\n            radius: 4,\n            'fill': '#f00'\n        }\n     </code></pre>\n\n"
      },
      {
        "static": false,
        "type": "Function",
        "inheritable": false,
        "properties": null,
        "linenr": 86,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-cfg-renderer",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "renderer",
        "shortDoc": "A function that can be overridden to set custom styling properties to each rendered element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>A function that can be overridden to set custom styling properties to each rendered element.\nPasses in (sprite, record, attributes, index, store) to the function.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 119,
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "href": "Line.html#Ext-chart-series-Line-cfg-selectionTolerance",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "selectionTolerance",
        "shortDoc": "The offset distance from the cursor position to the line series to trigger events (then used for highlighting series,...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Line.js",
        "doc": "<p>The offset distance from the cursor position to the line series to trigger events (then used for highlighting series, etc).</p>\n"
      },
      {
        "static": false,
        "type": "Array",
        "inheritable": false,
        "properties": null,
        "linenr": 95,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-cfg-shadowAttributes",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "shadowAttributes",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>An array with shadow attributes</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 80,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-cfg-showInLegend",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "showInLegend",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>Whether to show this series in the legend.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 125,
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "href": "Line.html#Ext-chart-series-Line-cfg-showMarkers",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "showMarkers",
        "shortDoc": "Whether markers should be displayed at the data points along the line. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Line.js",
        "doc": "<p>Whether markers should be displayed at the data points along the line. If true,\nthen the <a href=\"#/api/Ext.chart.series.Line-cfg-markerConfig\" rel=\"Ext.chart.series.Line-cfg-markerConfig\" class=\"docClass\">markerConfig</a> config item will determine the markers' styling.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean/Number",
        "inheritable": false,
        "properties": null,
        "linenr": 171,
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "href": "Line.html#Ext-chart-series-Line-cfg-smooth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "smooth",
        "shortDoc": "If set to true or a non-zero number, the line will be smoothed/rounded around its points; otherwise\nstraight line seg...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Line.js",
        "doc": "<p>If set to <code>true</code> or a non-zero number, the line will be smoothed/rounded around its points; otherwise\nstraight line segments will be drawn.</p>\n\n<p>A numeric value is interpreted as a divisor of the horizontal distance between consecutive points in\nthe line; larger numbers result in sharper curves while smaller numbers result in smoother curves.</p>\n\n<p>If set to <code>true</code> then a default numeric value of 3 will be used. Defaults to <code>false</code>.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 150,
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "href": "Line.html#Ext-chart-series-Line-cfg-style",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "style",
        "shortDoc": "An object containing style properties for the visualization lines and fill. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Line.js",
        "doc": "<p>An object containing style properties for the visualization lines and fill.\nThese styles will override the theme styles.  The following are valid style properties:</p>\n\n<ul>\n<li><code>stroke</code> - an rgb or hex color string for the background color of the line</li>\n<li><code>stroke-width</code> - the width of the stroke (integer)</li>\n<li><code>fill</code> - the background fill color string (hex or rgb), only works if <a href=\"#/api/Ext.chart.series.Line-cfg-fill\" rel=\"Ext.chart.series.Line-cfg-fill\" class=\"docClass\">fill</a> is <code>true</code></li>\n<li><code>opacity</code> - the opacity of the line and the fill color (decimal)</li>\n</ul>\n\n\n<p>Example usage:</p>\n\n<pre><code>style: {\n    stroke: '#00ff00',\n    'stroke-width': 10,\n    fill: '#80A080',\n    opacity: 0.2\n}\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 53,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-cfg-tips",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "tips",
        "shortDoc": "Add tooltips to the visualization's markers. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>Add tooltips to the visualization's markers. The options for the tips are the\nsame configuration used with <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">Ext.tip.ToolTip</a>. For example:</p>\n\n<pre><code>tips: {\n  trackMouse: true,\n  width: 140,\n  height: 28,\n  renderer: function(storeItem, item) {\n    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' views');\n  }\n},\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 74,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-cfg-title",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "title",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>The human-readable name of the series.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 68,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-cfg-type",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "type",
        "shortDoc": "The type of series. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>The type of series. Set in subclasses.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 138,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-event-titlechange",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "title",
            "doc": "<p>The new title value</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index in the collection of titles</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "titlechange",
        "shortDoc": "Fires when the series title is changed via setTitle. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>Fires when the series title is changed via <a href=\"#/api/Ext.chart.series.Line-method-setTitle\" rel=\"Ext.chart.series.Line-method-setTitle\" class=\"docClass\">setTitle</a>.</p>\n"
      }
    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 495,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n"
          },
          {
            "type": "String...",
            "properties": [

            ],
            "optional": true,
            "name": "more",
            "doc": "<p>(optional) Additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n"
          }
        ],
        "alias": null,
        "name": "addEvents",
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
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
        "linenr": 278,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
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
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.chart.series.Line-method-fireEvent\" rel=\"Ext.chart.series.Line-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n"
          }
        ],
        "alias": null,
        "name": "addListener",
        "shortDoc": "Appends an event handler to this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Appends an event handler to this object.</p>\n",
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
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to which to add a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "opt",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n"
          }
        ],
        "alias": null,
        "name": "addManagedListener",
        "shortDoc": "Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestr...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "linenr": 269,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/Arguments",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n"
          }
        ],
        "alias": null,
        "name": "callOverridden",
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 124,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-callParent",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/Arguments",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n"
          }
        ],
        "alias": null,
        "name": "callParent",
        "shortDoc": "Call the parent's overridden method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 426,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearListeners",
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
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
        "linenr": 455,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearManagedListeners",
        "shortDoc": "Removes all managed listeners for this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
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
        "linenr": 269,
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "href": "Line.html#Ext-chart-series-Line-method-drawSeries",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "drawSeries",
        "shortDoc": "Draws the series for the current chart. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Line.js",
        "doc": "<p>Draws the series for the current chart.</p>\n",
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
        "linenr": 610,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
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
            "name": "events",
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n"
          }
        ],
        "alias": null,
        "name": "enableBubble",
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
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
        "linenr": 233,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
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
            "doc": "<p>The name of the event to fire.</p>\n"
          },
          {
            "type": "Object...",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n"
          }
        ],
        "alias": null,
        "name": "fireEvent",
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.chart.series.Line-method-enableBubble\" rel=\"Ext.chart.series.Line-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 240,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-method-getItemForPoint",
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
            "doc": "\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "y",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getItemForPoint",
        "shortDoc": "For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object describing the item, or null if there is no matching item. The exact contents of</p>\n\n<pre><code>             this object will vary by series type, but should always contain at least the following:\n             &lt;ul&gt;\n               &lt;li&gt;{Ext.chart.series.Series} series - the Series object to which the item belongs&lt;/li&gt;\n               &lt;li&gt;{Object} value - the value(s) of the item's data point&lt;/li&gt;\n               &lt;li&gt;{Array} point - the x/y coordinates relative to the chart box of a single point\n                   for this data item, which can be used as e.g. a tooltip anchor point.&lt;/li&gt;\n               &lt;li&gt;{Ext.draw.Sprite} sprite - the item's rendering Sprite.\n             &lt;/ul&gt;\n</code></pre>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 329,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-method-getLegendColor",
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
            "name": "index",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getLegendColor",
        "shortDoc": "Returns a string with the color to be used for the series legend item. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>Returns a string with the color to be used for the series legend item.</p>\n",
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
        "linenr": 531,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
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
            "doc": "<p>The name of the event to check for</p>\n"
          }
        ],
        "alias": null,
        "name": "hasListener",
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 281,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-method-hideAll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "hideAll",
        "shortDoc": "Hides all the elements in the series. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>Hides all the elements in the series.</p>\n",
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
        "linenr": 38,
        "owner": "Ext.chart.Highlight",
        "html_filename": "Highlight.html",
        "href": "Highlight.html#Ext-chart-Highlight-method-highlightItem",
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
            "name": "item",
            "doc": "<p>Info about the item; same format as returned by #getItemForPoint.</p>\n"
          }
        ],
        "alias": null,
        "name": "highlightItem",
        "shortDoc": "Highlight the given series item. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/Highlight.js",
        "doc": "<p>Highlight the given series item.</p>\n",
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
        "linenr": 63,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "protected": true,
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
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "initConfig",
        "shortDoc": "Initialize configuration for this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 682,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to which to add a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "opt",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addManagedListener",
          "doc": null
        },
        "name": "mon",
        "shortDoc": "Shorthand for addManagedListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Line-method-addManagedListener\" rel=\"Ext.chart.series.Line-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "linenr": 688,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeManagedListener",
          "doc": null
        },
        "name": "mun",
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Line-method-removeManagedListener\" rel=\"Ext.chart.series.Line-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.chart.series.Line-method-mon\" rel=\"Ext.chart.series.Line-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "linenr": 670,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-on",
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
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.chart.series.Line-method-fireEvent\" rel=\"Ext.chart.series.Line-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addListener",
          "doc": null
        },
        "name": "on",
        "shortDoc": "Shorthand for addListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
        "linenr": 574,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
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
            "name": "origin",
            "doc": "<p>The Observable whose events this object is to relay.</p>\n"
          },
          {
            "type": "String[]",
            "properties": [

            ],
            "optional": false,
            "name": "events",
            "doc": "<p>Array of event names to relay.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "prefix",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "relayEvents",
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
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
        "linenr": 392,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
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
            "doc": "<p>The type of event the handler was associated with.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeListener",
        "shortDoc": "Removes an event handler. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes an event handler.</p>\n",
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
        "linenr": 197,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeManagedListener",
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.chart.series.Line-method-mon\" rel=\"Ext.chart.series.Line-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "linenr": 555,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "resumeEvents",
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.chart.series.Line-method-suspendEvents\" rel=\"Ext.chart.series.Line-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "linenr": 358,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-method-setTitle",
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
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "title",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "setTitle",
        "shortDoc": "Changes the value of the title for the series. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>Changes the value of the <a href=\"#/api/Ext.chart.series.Line-cfg-title\" rel=\"Ext.chart.series.Line-cfg-title\" class=\"docClass\">title</a> for the series.\nArguments can take two forms:</p>\n\n<ul>\n<li>A single String value: this will be used as the new single title for the series (applies\nto series with only one yField)</li>\n<li>A numeric index and a String value: this will set the title for a single indexed yField.</li>\n</ul>\n\n",
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
        "linenr": 316,
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "href": "Series.html#Ext-chart-series-Series-method-showAll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "showAll",
        "shortDoc": "Shows all the elements in the series. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Series.js",
        "doc": "<p>Shows all the elements in the series.</p>\n",
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
        "linenr": 199,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-statics",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "statics",
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "return": {
          "type": "Ext.Class",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 542,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
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
            "name": "queueSuspended",
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.chart.series.Line-method-resumeEvents\" rel=\"Ext.chart.series.Line-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n"
          }
        ],
        "alias": null,
        "name": "suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.chart.series.Line-method-resumeEvents\" rel=\"Ext.chart.series.Line-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
        "linenr": 676,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-un",
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
            "doc": "<p>The type of event the handler was associated with.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.chart.series.Line-method-addListener\" rel=\"Ext.chart.series.Line-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeListener",
          "doc": null
        },
        "name": "un",
        "shortDoc": "Shorthand for removeListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Line-method-removeListener\" rel=\"Ext.chart.series.Line-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
        "linenr": 106,
        "owner": "Ext.chart.Highlight",
        "html_filename": "Highlight.html",
        "href": "Highlight.html#Ext-chart-Highlight-method-unHighlightItem",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "unHighlightItem",
        "shortDoc": "Un-highlight any existing highlights ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/Highlight.js",
        "doc": "<p>Un-highlight any existing highlights</p>\n",
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
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 13,
        "owner": "Ext.chart.Highlight",
        "html_filename": "Highlight.html",
        "href": "Highlight.html#Ext-chart-Highlight-property-highlight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "highlight",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/Highlight.js",
        "doc": "<p>Highlight the given series item.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.Class",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 18,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "self",
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 18,
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "href": "Cartesian.html#Ext-chart-series-Cartesian-property-xField",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "xField",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Cartesian.js",
        "doc": "<p>The field used to access the x axis value from the items from the data\nsource.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 27,
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "href": "Cartesian.html#Ext-chart-series-Cartesian-property-yField",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "yField",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Cartesian.js",
        "doc": "<p>The field used to access the y-axis value from the items from the data\nsource.</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [
    "Ext.Base",
    "Ext.chart.series.Series",
    "Ext.chart.series.Cartesian"
  ],
  "alias": null,
  "name": "Ext.chart.series.Line",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/chart/series/Line.js",
  "doc": "<p>Creates a Line Chart. A Line Chart is a useful visualization technique to display quantitative information for different\ncategories or other real values (as opposed to the bar chart), that can show some progression (or regression) in the dataset.\nAs with all other series, the Line Series must be appended in the <em>series</em> Chart array configuration. See the Chart\ndocumentation for more information. A typical configuration object for the line series could be:</p>\n\n<pre class=\"inline-example\"><code>var store = Ext.create('Ext.data.JsonStore', {\n    fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],\n    data: [\n        { 'name': 'metric one',   'data1': 10, 'data2': 12, 'data3': 14, 'data4': 8,  'data5': 13 },\n        { 'name': 'metric two',   'data1': 7,  'data2': 8,  'data3': 16, 'data4': 10, 'data5': 3  },\n        { 'name': 'metric three', 'data1': 5,  'data2': 2,  'data3': 14, 'data4': 12, 'data5': 7  },\n        { 'name': 'metric four',  'data1': 2,  'data2': 14, 'data3': 6,  'data4': 1,  'data5': 23 },\n        { 'name': 'metric five',  'data1': 4,  'data2': 4,  'data3': 36, 'data4': 13, 'data5': 33 }\n    ]\n});\n\nExt.create('Ext.chart.Chart', {\n    renderTo: Ext.getBody(),\n    width: 500,\n    height: 300,\n    animate: true,\n    store: store,\n    axes: [\n        {\n            type: 'Numeric',\n            position: 'bottom',\n            fields: ['data1'],\n            label: {\n                renderer: Ext.util.Format.numberRenderer('0,0')\n            },\n            title: 'Sample Values',\n            grid: true,\n            minimum: 0\n        },\n        {\n            type: 'Category',\n            position: 'left',\n            fields: ['name'],\n            title: 'Sample Metrics'\n        }\n    ],\n    series: [\n        {\n            type: 'line',\n            highlight: {\n                size: 7,\n                radius: 7\n            },\n            axis: 'left',\n            xField: 'name',\n            yField: 'data1',\n            markerCfg: {\n                type: 'cross',\n                size: 4,\n                radius: 4,\n                'stroke-width': 0\n            }\n        },\n        {\n            type: 'line',\n            highlight: {\n                size: 7,\n                radius: 7\n            },\n            axis: 'left',\n            fill: true,\n            xField: 'name',\n            yField: 'data2',\n            markerCfg: {\n                type: 'circle',\n                size: 4,\n                radius: 4,\n                'stroke-width': 0\n            }\n        }\n    ]\n});\n</code></pre>\n\n<p>In this configuration we're adding two series (or lines), one bound to the <code>data1</code>\nproperty of the store and the other to <code>data3</code>. The type for both configurations is\n<code>line</code>. The <code>xField</code> for both series is the same, the name propert of the store.\nBoth line series share the same axis, the left axis. You can set particular marker\nconfiguration by adding properties onto the markerConfig object. Both series have\nan object as highlight so that markers animate smoothly to the properties in highlight\nwhen hovered. The second series has <code>fill=true</code> which means that the line will also\nhave an area below it of the same color.</p>\n\n<p><strong>Note:</strong> In the series definition remember to explicitly set the axis to bind the\nvalues of the line series to. This can be done by using the <code>axis</code> configuration property.</p>\n",
  "alternateClassNames": [
    "Ext.chart.LineSeries",
    "Ext.chart.LineChart"
  ]
});