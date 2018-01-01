/**
 * @class Ext.button.Button
 * @title Menu button
 * @references Ext.menu.Menu
 *
 * Menu button with bottom aligned arrow
 */
Ext.create('Ext.button.Button', {
    text      : 'Menu button',
    renderTo  : Ext.getBody(),
    arrowAlign: 'bottom',
    menu      : [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
    ]
});