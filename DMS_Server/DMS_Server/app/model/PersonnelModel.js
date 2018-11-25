Ext.define('JunctionIoT.model.PersonnelModel', {
    extend: 'Ext.data.Model',

    alias: 'viewmodel.personnel',
    // idProperty: 'personnel',
    fields: [{
            name: 'Id',
            type: 'int'
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
            type: 'int'
        },
        {
            name: 'Longitude',
            type: 'int'
        },
        {
            name: 'Status',
            type: 'string'
        }
    ],
    // data: {
    //     name: 'JunctionIoT',

    //     loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // }

    //TODO - add data, formulas and/or methods to support your view
});