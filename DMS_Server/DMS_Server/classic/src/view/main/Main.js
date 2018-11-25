/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('JunctionIoT.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Ext.layout.container.Border',
        'Ext.layout.container.Table',
        
        'JunctionIoT.view.main.MainController',
        'JunctionIoT.view.main.MainModel',
        'JunctionIoT.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    
    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'panel',
            autoScroll: true,
            width: 1300,
            layout: {
                type: 'table',
                columns: 12,
                tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
            },
            defaults: {
                collapsible: true,
                split: true,
                width: 1250,
                margin: 5
            },
            items: [{
                xtype: 'mainlist',
                region: 'center',
                height: 250,
                colspan: 12 //10.100.57.240
            }, {
                xtype: 'panel',
                    width: 800,
                    height: 450,
                    colspan: 8,
                header: false,
                style: 'border: 1px solid grey;',
                region: 'south',
                title: 'Map',
                items: [{
                    xtype: 'container',
                    id: 'map',
                    reference: 'mapContainer',
                    listeners: {
                        render: 'onRender',
                        resize: 'onResize'
                    }
                }]

                },  {
                    xtype: 'panel',
                    title: 'person',
                    style: 'border: 1px solid grey;',
                    width:400,
                    height: 450,
                    colspan: 4,
                    padding: 0,
                    //border: true,
                    items: [{
                        xtype: 'form',
                        //border:true,
                        bodyPadding: 5,
                        layout: 'anchor',
                        defaults: {
                            anchor: '100%',
                            editable:false
                        },
                        defaultType: 'textfield',
                        items: [{
                            fieldLabel: 'Name',
                            name: 'Name'
                        },
                            {
                                fieldLabel: 'Status',
                                name: 'Status'
                            }, {                                
                                xtype: 'checkboxfield',
                                label: 'Send Help',
                                name: 'Sent'
                            }]
                        
                    }, {
                            xtype: 'panel',
                            title: 'Maps',
                            bodyPadding: 10,
                            items: [{
                                xtype: 'radiogroup',
                                fieldLabel: 'Select Map',
                                columns: 3,
                                defaults: {
                                    name: 'map', //Each radio has the same name so the browser will make sure only one is checked at once
                                    padding: '0 10 0 10'
                                },
                                listeners: {
                                    change: 'onChange'
                                },
                                items: [ {
                                    inputValue: '0',
                                    boxLabel: 'OSM',
                                    checked: true
                                },{
                                    inputValue: '1',
                                    boxLabel: 'Spatial'
                                }, {
                                    inputValue: '2',
                                    boxLabel: 'Demographic'
                                    }]
                            }]
                        }]
                }]

        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});