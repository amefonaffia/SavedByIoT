/**
 * This view is an example list of people.
 */
Ext.define('JunctionIoT.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'JunctionIoT.store.Personnel'
    ],

    header: false,
    style: 'border: 1px solid grey;',

    store: {
        type: 'personnel'
    },

    columns: [{
            text: 'Status',
            dataIndex: 'Status',
            flex: 1
        }, {
            text: 'Name',
            dataIndex: 'Name',
            flex: 1
        },
        {
            text: 'PID',
            dataIndex: 'PID',
            flex: 1
        },
        {
            text: 'Email',
            dataIndex: 'Email',
            flex: 1
        },
        {
            text: 'Phone',
            dataIndex: 'Phone',
            flex: 1
        },
        {
            text: 'Latitude',
            dataIndex: 'Latitude',
            flex: 1
        },
        {
            text: 'Longitude',
            dataIndex: 'Longitude',
            flex: 1
        }
    ],

    listeners: {
        select: 'onItemSelected'

    }
});