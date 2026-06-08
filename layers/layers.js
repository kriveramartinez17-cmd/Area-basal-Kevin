var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Areabasal_1 = new ol.format.GeoJSON();
var features_Areabasal_1 = format_Areabasal_1.readFeatures(json_Areabasal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areabasal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areabasal_1.addFeatures(features_Areabasal_1);
var lyr_Areabasal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areabasal_1, 
                style: style_Areabasal_1,
                popuplayertitle: 'Areabasal',
                interactive: true,
    title: 'Areabasal<br />\
    <img src="styles/legend/Areabasal_1_0.png" /> 0.661 - 10.98<br />\
    <img src="styles/legend/Areabasal_1_1.png" /> 0.091 - 0.661<br />\
    <img src="styles/legend/Areabasal_1_2.png" /> 0.042 - 0.091<br />\
    <img src="styles/legend/Areabasal_1_3.png" /> 0.018 - 0.042<br />\
    <img src="styles/legend/Areabasal_1_4.png" /> 0.001 - 0.018<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Areabasal_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Areabasal_1];
lyr_Areabasal_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'layer': 'layer', 'path': 'path', });
lyr_Areabasal_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ESPECIE': 'TextEdit', 'DN_cm': 'TextEdit', 'DB_cm': 'TextEdit', 'H': 'TextEdit', 'SF': 'Range', 'DN_m': 'TextEdit', 'AB': 'TextEdit', 'V': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Areabasal_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Areabasal_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});