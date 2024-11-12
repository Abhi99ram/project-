var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_dor_1 = new ol.format.GeoJSON();
var features_dor_1 = format_dor_1.readFeatures(json_dor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dor_1.addFeatures(features_dor_1);
var lyr_dor_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dor_1, 
                style: style_dor_1,
                popuplayertitle: "dor",
                interactive: true,
                title: '<img src="styles/legend/dor_1.png" /> dor'
            });
var format_44_2 = new ol.format.GeoJSON();
var features_44_2 = format_44_2.readFeatures(json_44_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_44_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_44_2.addFeatures(features_44_2);
var lyr_44_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_44_2, 
                style: style_44_2,
                popuplayertitle: "44",
                interactive: true,
                title: '<img src="styles/legend/44_2.png" /> 44'
            });
var format_5645_3 = new ol.format.GeoJSON();
var features_5645_3 = format_5645_3.readFeatures(json_5645_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5645_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5645_3.addFeatures(features_5645_3);
var lyr_5645_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5645_3, 
                style: style_5645_3,
                popuplayertitle: "5645",
                interactive: true,
                title: '<img src="styles/legend/5645_3.png" /> 5645'
            });

lyr_OSMStandard_0.setVisible(true);lyr_dor_1.setVisible(true);lyr_44_2.setVisible(true);lyr_5645_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_dor_1,lyr_44_2,lyr_5645_3];
lyr_dor_1.set('fieldAliases', {'id': 'id', 'Population': 'Population', 'Floors': 'Floors', 'Building N': 'Building N', });
lyr_44_2.set('fieldAliases', {'id': 'id', });
lyr_5645_3.set('fieldAliases', {'id': 'id', });
lyr_dor_1.set('fieldImages', {'id': '', 'Population': '', 'Floors': '', 'Building N': '', });
lyr_44_2.set('fieldImages', {'id': '', });
lyr_5645_3.set('fieldImages', {'id': '', });
lyr_dor_1.set('fieldLabels', {'id': 'no label', 'Population': 'no label', 'Floors': 'no label', 'Building N': 'no label', });
lyr_44_2.set('fieldLabels', {'id': 'no label', });
lyr_5645_3.set('fieldLabels', {'id': 'no label', });
lyr_5645_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});