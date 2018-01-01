/**
 * @class Ext.button.Button
 * @title Simple button
 *
 * Simple button with click handler
 */
Ext.create('Ext.Button', {
    text: 'Click me',
    renderTo: Ext.getBody(),
    handler: function() {
        alert('You clicked the button!')
    }
});