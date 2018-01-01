/**
 * @class Ext.grid.Panel
 * @title Grouping Grid
 *
 * This example takes a Store of names, email addresses and phone numbers and displays
 * the data in a grid
 */
var store = Ext.create('Ext.data.Store', {
    fields: ['name', 'senority', 'department'],
    groupField: 'department',
    data: {
        employees: [
            { name: "Michael Scott",  senority: 7, department: "Manangement" },
            { name: "Dwight Schrute", senority: 2, department: "Sales" },
            { name: "Jim Halpert",    senority: 3, department: "Sales" },
            { name: "Kevin Malone",   senority: 4, department: "Accounting" },
            { name: "Angela Martin",  senority: 5, department: "Accounting" }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'employees'
        }
    }
});

Ext.create('Ext.grid.Panel', {
    title: 'Employees',
    store: store,
    columns: [
        { header: 'Name',     dataIndex: 'name' },
        { header: 'Senority', dataIndex: 'senority' }
    ],
    features: [{ ftype:'grouping' }],
    width: 200,
    height: 275,
    renderTo: Ext.getBody()
});