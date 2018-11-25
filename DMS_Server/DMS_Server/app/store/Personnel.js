Ext.define('JunctionIoT.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personnel',


    //data: {
    //    items: [{
    //            Name: 'Jean Luc',
    //            Email: "jeanluc.picard@enterprise.com",
    //            Phone: "555-111-1111",
    //            Latitude: "2764348.21",
    //            Longitude: "8441749.2",
    //            Status: "alive"
    //        },
    //        {
    //            Name: 'Worf',
    //            Email: "worf.moghsson@enterprise.com",
    //            Phone: "555-222-2222",
    //            Latitude: "2764349.27",
    //            Longitude: "8441623.6",
    //            Status: "dead"
    //        },
    //        {
    //            Name: 'Deanna',
    //            Email: "deanna.troi@enterprise.com",
    //            Phone: "555-333-3333",
    //            Latitude: "2764240.20",
    //            Longitude: "8441750.7",
    //            Status: "alive",
    //        },
    //        {
    //            Name: 'Data',
    //            Email: "mr.data@enterprise.com",
    //            Phone: "555-444-4444",
    //            Latitude: "2764153.23",
    //            Longitude: "8441749.8",
    //            Status: "injured"
    //        }
    //    ]
    //},

    //proxy: {
    //    type: 'memory',
    //    reader: {
    //        type: 'json',
    //        rootProperty: 'items'
    //    }
    //},

    fields: [{
            name: 'Id',
            type: 'int'
        },
        {
           name: 'PID',
           type:'string'
        },
        {
            name: 'Name',
            type: 'string'
        },
        {
            name: 'Email',
            type: 'string'
        },
        {
            name: 'Latitude',
            type: 'string'
        },
        {
            name: 'Longitude',
            type: 'string'
        },
        {
            name: 'Status',
            type: 'string'
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'api/Messages/'
    },
    reader: {
        type: 'json'
    },
    autoLoad: true
});