/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.menu.Separator
 * @extends Ext.menu.Item
 *
 * Adds a separator bar to a menu, used to divide logical groups of menu items. Generally you will
 * add one of these by using "-" in your call to add() or in your items config rather than creating one directly.
 *
 * {@img Ext.menu.Separator/Ext.menu.Separator.png Ext.menu.Separator component}
 *
 * ## Code 
 *
 *     Ext.create('Ext.menu.Menu', {
 *         width: 100,
 *         height: 100,
 *         floating: false,  // usually you want this set to True (default)
 *         renderTo: Ext.getBody(),  // usually rendered by it's containing component
 *         items: [{
 *             text: 'icon item',
 *             iconCls: 'add16'
 *         },{
 *             xtype: 'menuseparator'
 *         },{
 *            text: 'seperator above',
 *         },{
 *            text: 'regular item',
 *         }]
 *     }); 
 *
 * @markdown
 */
Ext.define('Ext.menu.Separator', {
    extend: 'Ext.menu.Item',
    alias: 'widget.menuseparator',
    
    /**
     * @cfg {String} activeCls @hide
     */
    
    /**
     * @cfg {Boolean} canActivate @hide
     */
    canActivate: false,
    
    /**
     * @cfg {Boolean} clickHideDelay @hide
     */
     
    /**
     * @cfg {Boolean} destroyMenu @hide
     */
     
    /**
     * @cfg {Boolean} disabledCls @hide
     */
     
    focusable: false,
     
    /**
     * @cfg {String} href @hide
     */
    
    /**
     * @cfg {String} hrefTarget @hide
     */
    
    /**
     * @cfg {Boolean} hideOnClick @hide
     */
    hideOnClick: false,
    
    /**
     * @cfg {String} icon @hide
     */
    
    /**
     * @cfg {String} iconCls @hide
     */
    
    /**
     * @cfg {Object} menu @hide
     */
    
    /**
     * @cfg {String} menuAlign @hide
     */
    
    /**
     * @cfg {Number} menuExpandDelay @hide
     */
    
    /**
     * @cfg {Number} menuHideDelay @hide
     */
    
    /**
     * @cfg {Boolean} plain @hide
     */
    plain: true,
    
    /**
     * @cfg {String} separatorCls
     * The CSS class used by the separator item to show the incised line.
     * Defaults to `Ext.baseCSSPrefix + 'menu-item-separator'`.
     * @markdown
     */
    separatorCls: Ext.baseCSSPrefix + 'menu-item-separator',
    
    /**
     * @cfg {String} text @hide
     */
    text: '&#160;',
    
    onRender: function(ct, pos) {
        var me = this,
            sepCls = me.separatorCls;
            
        me.cls += ' ' + sepCls;
        
        me.callParent(arguments);
    }
});
