/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('JunctionIoT.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function () {

        this.listen({
            store: {
                '#personnel': {
                    load: 'onGridStoreLoad'
                }
            }
        });
    },

    onGridStoreLoad: function (store, records, operation) {
        var me = this;

        var features = new Array();
        store.each(function (record) {
            status = record.get('Status');

            var person = new ol.Feature({
                geometry: new ol.geom.Point([record.get('Latitude'), record.get('Longitude')])
            });

            var color;

            if (status === 'Critical') {
                color = '#ff0000';
            } else if (status === 'Fine') {
                color = '#009933';
            } else if (status === 'Injured') {
                color = '#ff9900';
            }

            person.setStyle(new ol.style.Style({
                image: new ol.style.Icon( /** @type {module:ol/style/Icon~Options} */({
                    color: color,
                    crossOrigin: 'anonymous',
                    src: 'data/dot.png'
                }))
            }));
            features.push(person);
        });



        var vectorSource = new ol.source.Vector({
            features: features
        });
        var vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        this.map.addLayer(vectorLayer);
    },
    onItemSelected: function (sender, record) {
        var me = this;

        var rec = record;
        if (rec) {
            this.getView().down('form').loadRecord(rec);
        }

        var userLocation = [record.get('Latitude'), record.get('Longitude')];
        // var bern = ol.proj.fromLonLat([7.4458, 46.95]);
        // var otaniemi = [2764348.21, 8441749.2];
        var view = this.map.getView();

        flyTo = function (location, done) {
                var duration = 1500;
                var zoom = view.getZoom();
                var parts = 2;
                var called = false;

                function callback(complete) {
                    --parts;
                    if (called) {
                        return;
                    }
                    if (parts === 0 || !complete) {
                        called = true;
                        done(complete);
                    }
                }
                view.animate({
                    center: location,
                    duration: duration
                }, callback);
                view.animate({
                    zoom: zoom - 1,
                    duration: duration / 2
                }, {
                    zoom: 21,
                    duration: duration / 2
                }, callback);
            },

            flyTo(userLocation, function () {});
    },

    onRender: function (conmponent) {
        //Openlayers 4 Implemetation
        var me = this;


        //Ext.Ajax.request({
        //    //url: 'https://jsonplaceholder.typicode.com/todos/1',
        //    url: 'api/Messages/',
        //    success: function (response, opts) {
        //        var obj = Ext.decode(response.responseText);
        //        console.dir(obj);
        //        console.log(obj);
        //        // Ext.message("");
        //    },

        //    failure: function (response, opts) {
        //        console.log('server-side failure with status code ' + response.status);
        //    }
        //});

        //grid = view.down('grid');
        //store = grid.getStore();
        //var store = Ext.data.StoreManager.lookup('personnel');


        //var features = new Array();
        //store.each(function (record) {
        //    status = record.get('Status');

        //    var person = new ol.Feature({
        //        geometry: new ol.geom.Point([record.get('Latitude'), record.get('Longitude')])
        //    });

        //    var color;

        //    if (status === 'dead') {
        //        color = '#ff0000';
        //    } else if (status === 'alive') {
        //        color = '#009933';
        //    } else if (status === 'injured') {
        //        color = '#ff9900';
        //    }

        //    person.setStyle(new ol.style.Style({
        //        image: new ol.style.Icon( /** @type {module:ol/style/Icon~Options} */ ({
        //            color: color,
        //            crossOrigin: 'anonymous',
        //            src: 'data/dot.png'
        //        }))
        //    }));
        //    features.push(person);
        //});



        //var vectorSource = new ol.source.Vector({
        //    features: features
        //});
        //var vectorLayer = new ol.layer.Vector({
        //    source: vectorSource
        //});

        

        var projection = ol.proj.get('EPSG:3857');
        var projectionExtent = projection.getExtent();
        var size = ol.extent.getWidth(projectionExtent) / 256;
        var resolutions = new Array(14);
        var matrixIds = new Array(14);
        for (var z = 0; z < 14; ++z) {
            // generate resolutions and matrixIds arrays for this WMTS
            resolutions[z] = size / Math.pow(2, z);
            matrixIds[z] = z;
        }

        var osmLayer = new ol.layer.Tile({
            name:'osm',
            crossOrigin: 'anonymous',
            source: new ol.source.OSM(),
            isBaseLayer:true
        });

        var urlImagery = 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer';

        var arcgisImageryLayer = new ol.layer.Tile({
            name:'satelite',
            //extent: [-13884991, 2870341, -7455066, 6338219],
            source: new ol.source.TileArcGISRest({
                crossOrigin: 'anonymous',
                url: urlImagery,
                isBaseLayer: true
            })
        });

        arcgisImageryLayer.setVisible(false);

        var layers = [
            osmLayer,
            arcgisImageryLayer
        ];

        var view = new ol.View({
            center: [2764348.21, 8441749.2], // OTANIEMI
            //center: [4098839.63, -142995.5], //Nairobi
            zoom: 15
        });

        this.map = new ol.Map({
            target: 'map',
            renderer: 'canvas',
            layers: layers,
            view: view,
        });

        //Events

    },
    onResize: function () {
        var size = this.lookup('mapContainer').getSize();
        console.log(size);
        this.map.setSize([size.width, size.height]);
    },
    onChange: function (radio, newValue, oldValue) {
        var me = this;

        ////Layers
        //var urlImagery = 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer';
        //var urlDemographic = 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
        //var arcgisImageryLayer = new ol.layer.Tile({
        //    //extent: [-13884991, 2870341, -7455066, 6338219],
        //    source: new ol.source.TileArcGISRest({
        //        crossOrigin: 'anonymous',
        //        url: urlImagery,
        //        isBaseLayer: true
        //    })
        //});

        //var arcgisDemographicLayer = new ol.layer.Tile({
        //    //extent: [-13884991, 2870341, -7455066, 6338219],
        //    source: new ol.source.TileArcGISRest({
        //        crossOrigin: 'anonymous',
        //        url: urlDemographic,
        //        isBaseLayer: true
        //    })
        //});
        this.map.getLayers().forEach(function (layer) {
            if (layer.get('name') == 'osm' && newValue.map === '1') {
                layer.setVisible(false); 
            }
            if (layer.get('name') == 'satelite' && newValue.map === '1') {
                layer.setVisible(true); 
            }
            if (layer.get('name') == 'osm' && newValue.map === '0') {
                layer.setVisible(true);
            }
            if (layer.get('name') == 'satelite' && newValue.map === '0') {
                layer.setVisible(false);
            }
        });
       
    }
});