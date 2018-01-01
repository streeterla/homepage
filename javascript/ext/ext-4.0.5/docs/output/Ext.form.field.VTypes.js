Ext.data.JsonP.Ext_form_field_VTypes({
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
  "extends": "Ext.Base",
  "html_filename": "VTypes.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "VTypes.html#Ext-form-field-VTypes",
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
        "linenr": 124,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-method-alpha",
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
            "name": "value",
            "doc": "<p>The value</p>\n"
          }
        ],
        "alias": null,
        "name": "alpha",
        "shortDoc": "The function used to validate alpha values ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The function used to validate alpha values</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 144,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-method-alphanum",
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
            "name": "value",
            "doc": "<p>The value</p>\n"
          }
        ],
        "alias": null,
        "name": "alphanum",
        "shortDoc": "The function used to validate alphanumeric values ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The function used to validate alphanumeric values</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
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
        "linenr": 76,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-method-email",
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
            "name": "value",
            "doc": "<p>The email address</p>\n"
          }
        ],
        "alias": null,
        "name": "email",
        "shortDoc": "The function used to validate email addresses. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The function used to validate email addresses. Note that this is a very basic validation - complete\nvalidation per the email RFC specifications is very complex and beyond the scope of this class, although this\nfunction can be overridden if a more comprehensive validation scheme is desired. See the validation section\nof the <a href=\"http://en.wikipedia.org/wiki/E-mail_address\">Wikipedia article on email addresses</a> for additional information. This implementation is intended\nto validate the following emails:</p>\n\n<ul>\n<li><code>barney@example.de</code></li>\n<li><code>barney.rubble@example.com</code></li>\n<li><code>barney-rubble@example.coop</code></li>\n<li><code>barney+rubble@example.com</code></li>\n</ul>\n\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
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
        "linenr": 109,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-method-url",
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
            "name": "value",
            "doc": "<p>The URL</p>\n"
          }
        ],
        "alias": null,
        "name": "url",
        "shortDoc": "The function used to validate URLs ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The function used to validate URLs</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "RegExp",
        "inheritable": false,
        "properties": null,
        "linenr": 138,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphaMask",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "alphaMask",
        "shortDoc": "The keystroke filter mask to be applied on alpha input. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The keystroke filter mask to be applied on alpha input. Defaults to: /[a-z_]/i</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 132,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphaText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "alphaText",
        "shortDoc": "The error text to display when the alpha validation function returns false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The error text to display when the alpha validation function returns false.\nDefaults to: 'This field should only contain letters and _'</p>\n"
      },
      {
        "static": false,
        "type": "RegExp",
        "inheritable": false,
        "properties": null,
        "linenr": 158,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphanumMask",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "alphanumMask",
        "shortDoc": "The keystroke filter mask to be applied on alphanumeric input. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The keystroke filter mask to be applied on alphanumeric input. Defaults to: /[a-z0-9_]/i</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 152,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphanumText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "alphanumText",
        "shortDoc": "The error text to display when the alphanumeric validation function returns false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The error text to display when the alphanumeric validation function returns false.\nDefaults to: 'This field should only contain letters, numbers and _'</p>\n"
      },
      {
        "static": false,
        "type": "RegExp",
        "inheritable": false,
        "properties": null,
        "linenr": 102,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-property-emailMask",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "emailMask",
        "shortDoc": "The keystroke filter mask to be applied on email input. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The keystroke filter mask to be applied on email input. See the <a href=\"#/api/Ext.form.field.VTypes-method-email\" rel=\"Ext.form.field.VTypes-method-email\" class=\"docClass\">email</a> method for information about\nmore complex email validation. Defaults to: /[a-z0-9_.-@]/i</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 96,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-property-emailText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "emailText",
        "shortDoc": "The error text to display when the email validation function returns false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The error text to display when the email validation function returns false.\nDefaults to: 'This field should be an e-mail address in the format \"user@example.com\"'</p>\n"
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
        "properties": null,
        "linenr": 117,
        "owner": "Ext.form.field.VTypes",
        "html_filename": "VTypes.html",
        "href": "VTypes.html#Ext-form-field-VTypes-property-urlText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "urlText",
        "shortDoc": "The error text to display when the url validation function returns false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
        "doc": "<p>The error text to display when the url validation function returns false.\nDefaults to: 'This field should be a URL in the format \"http:/'+'/www.example.com\"'</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [
    "Ext.Base"
  ],
  "alias": null,
  "name": "Ext.form.field.VTypes",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
  "doc": "<p>This is a singleton object which contains a set of commonly used field validation functions\nand provides a mechanism for creating reusable custom field validations.\nThe following field validation functions are provided out of the box:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.form.field.VTypes-method-alpha\" rel=\"Ext.form.field.VTypes-method-alpha\" class=\"docClass\">alpha</a></li>\n<li><a href=\"#/api/Ext.form.field.VTypes-method-alphanum\" rel=\"Ext.form.field.VTypes-method-alphanum\" class=\"docClass\">alphanum</a></li>\n<li><a href=\"#/api/Ext.form.field.VTypes-method-email\" rel=\"Ext.form.field.VTypes-method-email\" class=\"docClass\">email</a></li>\n<li><a href=\"#/api/Ext.form.field.VTypes-method-url\" rel=\"Ext.form.field.VTypes-method-url\" class=\"docClass\">url</a></li>\n</ul>\n\n\n<p>VTypes can be applied to a <a href=\"#/api/Ext.form.field.Text\" rel=\"Ext.form.field.Text\" class=\"docClass\">Text Field</a> using the <code><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a></code> configuration:</p>\n\n<pre><code>Ext.create('Ext.form.field.Text', {\n    fieldLabel: 'Email Address',\n    name: 'email',\n    vtype: 'email' // applies email validation rules to this field\n});\n</code></pre>\n\n<p>It's easy to create custom VTypes</p>\n\n<pre><code>// custom Vtype for vtype:'time'\nvar timeTest = /^([1-9]|1[0-9]):([0-5][0-9])(\\s[a|p]m)$/i;\nExt.apply(Ext.form.field.VTypes, {\n    //  vtype validation function\n    time: function(val, field) {\n        return timeTest.test(val);\n    },\n    // vtype Text property: The error text to display when the validation function returns false\n    timeText: 'Not a valid time.  Must be in the format \"12:34 PM\".',\n    // vtype Mask property: The keystroke filter mask\n    timeMask: /[\\d\\s:amp]/i\n});\n</code></pre>\n\n<p>In the above example the <code>time</code> function is the validator that will run when field validation occurs,\n<code>timeText</code> is the error message, and <code>timeMask</code> limits what characters can be typed into the field.\nNote that the <code>Text</code> and <code>Mask</code> functions must begin with the same name as the validator function.</p>\n\n<p>Using a custom validator is the same as using one of the build-in validators - just use the name of the validator function\nas the <code><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a></code> configuration on a <a href=\"#/api/Ext.form.field.Text\" rel=\"Ext.form.field.Text\" class=\"docClass\">Text Field</a>:</p>\n\n<pre><code>Ext.create('Ext.form.field.Text', {\n    fieldLabel: 'Departure Time',\n    name: 'departureTime',\n    vtype: 'time' // applies custom time validation rules to this field\n});\n</code></pre>\n\n<p>Another example of a custom validator:</p>\n\n<pre><code>// custom Vtype for vtype:'IPAddress'\nExt.apply(Ext.form.field.VTypes, {\n    IPAddress:  function(v) {\n        return /^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$/.test(v);\n    },\n    IPAddressText: 'Must be a numeric IP address',\n    IPAddressMask: /[\\d\\.]/i\n});\n</code></pre>\n\n<p>It's important to note that using <a href=\"#/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply()</a> means that the custom validator function\nas well as <code>Text</code> and <code>Mask</code> fields are added as properties of the <code>Ext.form.field.VTypes</code> singleton.</p>\n",
  "alternateClassNames": [
    "Ext.form.VTypes"
  ]
});