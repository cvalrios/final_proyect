var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_InfraestructuraVial_1 = new ol.format.GeoJSON();
var features_InfraestructuraVial_1 = format_InfraestructuraVial_1.readFeatures(json_InfraestructuraVial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfraestructuraVial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfraestructuraVial_1.addFeatures(features_InfraestructuraVial_1);
var lyr_InfraestructuraVial_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfraestructuraVial_1, 
                style: style_InfraestructuraVial_1,
                popuplayertitle: "InfraestructuraVial",
                interactive: true,
    title: 'InfraestructuraVial<br />\
    <img src="styles/legend/InfraestructuraVial_1_0.png" /> 10.000<br />\
    <img src="styles/legend/InfraestructuraVial_1_1.png" /> 40.000<br />\
    <img src="styles/legend/InfraestructuraVial_1_2.png" /> 80.000<br />'
        });
var format_Colombia_2 = new ol.format.GeoJSON();
var features_Colombia_2 = format_Colombia_2.readFeatures(json_Colombia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colombia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_2.addFeatures(features_Colombia_2);
var lyr_Colombia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombia_2, 
                style: style_Colombia_2,
                popuplayertitle: "Colombia",
                interactive: true,
                title: '<img src="styles/legend/Colombia_2.png" /> Colombia'
            });
var format_Guayabal2Barranca_a_3 = new ol.format.GeoJSON();
var features_Guayabal2Barranca_a_3 = format_Guayabal2Barranca_a_3.readFeatures(json_Guayabal2Barranca_a_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guayabal2Barranca_a_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guayabal2Barranca_a_3.addFeatures(features_Guayabal2Barranca_a_3);
var lyr_Guayabal2Barranca_a_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guayabal2Barranca_a_3, 
                style: style_Guayabal2Barranca_a_3,
                popuplayertitle: "Guayabal2Barranca_a",
                interactive: true,
                title: '<img src="styles/legend/Guayabal2Barranca_a_3.png" /> Guayabal2Barranca_a'
            });
var format_Shortes_LaPradera2Barranca_4 = new ol.format.GeoJSON();
var features_Shortes_LaPradera2Barranca_4 = format_Shortes_LaPradera2Barranca_4.readFeatures(json_Shortes_LaPradera2Barranca_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortes_LaPradera2Barranca_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortes_LaPradera2Barranca_4.addFeatures(features_Shortes_LaPradera2Barranca_4);
var lyr_Shortes_LaPradera2Barranca_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortes_LaPradera2Barranca_4, 
                style: style_Shortes_LaPradera2Barranca_4,
                popuplayertitle: "Shortes_LaPradera2Barranca",
                interactive: true,
                title: '<img src="styles/legend/Shortes_LaPradera2Barranca_4.png" /> Shortes_LaPradera2Barranca'
            });
var format_Shortes_DonaJuana2Barranca_5 = new ol.format.GeoJSON();
var features_Shortes_DonaJuana2Barranca_5 = format_Shortes_DonaJuana2Barranca_5.readFeatures(json_Shortes_DonaJuana2Barranca_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortes_DonaJuana2Barranca_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortes_DonaJuana2Barranca_5.addFeatures(features_Shortes_DonaJuana2Barranca_5);
var lyr_Shortes_DonaJuana2Barranca_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortes_DonaJuana2Barranca_5, 
                style: style_Shortes_DonaJuana2Barranca_5,
                popuplayertitle: "Shortes_DonaJuana2Barranca",
                interactive: true,
                title: '<img src="styles/legend/Shortes_DonaJuana2Barranca_5.png" /> Shortes_DonaJuana2Barranca'
            });
var format_Shortest_Carrasco2Barranca_6 = new ol.format.GeoJSON();
var features_Shortest_Carrasco2Barranca_6 = format_Shortest_Carrasco2Barranca_6.readFeatures(json_Shortest_Carrasco2Barranca_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortest_Carrasco2Barranca_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortest_Carrasco2Barranca_6.addFeatures(features_Shortest_Carrasco2Barranca_6);
var lyr_Shortest_Carrasco2Barranca_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortest_Carrasco2Barranca_6, 
                style: style_Shortest_Carrasco2Barranca_6,
                popuplayertitle: "Shortest_Carrasco2Barranca",
                interactive: true,
                title: '<img src="styles/legend/Shortest_Carrasco2Barranca_6.png" /> Shortest_Carrasco2Barranca'
            });
var format_Landfills_7 = new ol.format.GeoJSON();
var features_Landfills_7 = format_Landfills_7.readFeatures(json_Landfills_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landfills_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landfills_7.addFeatures(features_Landfills_7);
var lyr_Landfills_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landfills_7, 
                style: style_Landfills_7,
                popuplayertitle: "Landfills",
                interactive: true,
                title: '<img src="styles/legend/Landfills_7.png" /> Landfills'
            });
var format_Refineries_8 = new ol.format.GeoJSON();
var features_Refineries_8 = format_Refineries_8.readFeatures(json_Refineries_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refineries_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refineries_8.addFeatures(features_Refineries_8);
var lyr_Refineries_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Refineries_8, 
                style: style_Refineries_8,
                popuplayertitle: "Refineries",
                interactive: true,
                title: '<img src="styles/legend/Refineries_8.png" /> Refineries'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_InfraestructuraVial_1.setVisible(true);lyr_Colombia_2.setVisible(true);lyr_Guayabal2Barranca_a_3.setVisible(true);lyr_Shortes_LaPradera2Barranca_4.setVisible(true);lyr_Shortes_DonaJuana2Barranca_5.setVisible(true);lyr_Shortest_Carrasco2Barranca_6.setVisible(true);lyr_Landfills_7.setVisible(true);lyr_Refineries_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_InfraestructuraVial_1,lyr_Colombia_2,lyr_Guayabal2Barranca_a_3,lyr_Shortes_LaPradera2Barranca_4,lyr_Shortes_DonaJuana2Barranca_5,lyr_Shortest_Carrasco2Barranca_6,lyr_Landfills_7,lyr_Refineries_8];
lyr_InfraestructuraVial_1.set('fieldAliases', {'objectid': 'objectid', 'key': 'key', 'cod_tramo': 'cod_tramo', 'codigo_via': 'codigo_via', 'pr_inicial': 'pr_inicial', 'dist_ini': 'dist_ini', 'pr_finl': 'pr_finl', 'dist_fin': 'dist_fin', 'territoria': 'territoria', 'tramo': 'tramo', 'sector': 'sector', 'administra': 'administra', 'amv': 'amv', 'superficie': 'superficie', 'calzada': 'calzada', 'ruta': 'ruta', 'fuente': 'fuente', 'fecha_fuen': 'fecha_fuen', 'fecha_actu': 'fecha_actu', 'concesion': 'concesion', 'observacio': 'observacio', 'estado': 'estado', 'observac_1': 'observac_1', 'reversion': 'reversion', 'pr_ini_con': 'pr_ini_con', 'pr_fin_con': 'pr_fin_con', 'ruleid_1': 'ruleid_1', 'inline_fid': 'inline_fid', 'simlnflag': 'simlnflag', 'maxsimptol': 'maxsimptol', 'minsimptol': 'minsimptol', 'MONGUI': 'MONGUI', 'Shape_Leng': 'Shape_Leng', 'Speed_limi': 'Speed_limi', });
lyr_Colombia_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'source': 'source', });
lyr_Guayabal2Barranca_a_3.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Shortes_LaPradera2Barranca_4.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Shortes_DonaJuana2Barranca_5.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Shortest_Carrasco2Barranca_6.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Landfills_7.set('fieldAliases', {'field_1': 'field_1', 'ID': 'Landfill Name', 'Departemen': 'Departemen', 'latitude': 'latitude', 'longitude': 'longitude', 'MSW (Ton/d': 'MSW (Ton/d', 'MSW (ton/m': 'MSW (ton/m', 'USE_TO_GAS': 'USE_TO_GAS', 'MSW (ton/month)': 'MSW (ton/month)', 'USE_TO_GASIFICATION': 'Usabel for Syngas Production (ton/month)', });
lyr_Refineries_8.set('fieldAliases', {'field_1': 'field_1', 'ID': 'ID', 'Department': 'Department', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_InfraestructuraVial_1.set('fieldImages', {'objectid': '', 'key': '', 'cod_tramo': '', 'codigo_via': '', 'pr_inicial': '', 'dist_ini': '', 'pr_finl': '', 'dist_fin': '', 'territoria': '', 'tramo': '', 'sector': '', 'administra': '', 'amv': '', 'superficie': '', 'calzada': '', 'ruta': '', 'fuente': '', 'fecha_fuen': '', 'fecha_actu': '', 'concesion': '', 'observacio': '', 'estado': '', 'observac_1': '', 'reversion': '', 'pr_ini_con': '', 'pr_fin_con': '', 'ruleid_1': '', 'inline_fid': '', 'simlnflag': '', 'maxsimptol': '', 'minsimptol': '', 'MONGUI': '', 'Shape_Leng': '', 'Speed_limi': '', });
lyr_Colombia_2.set('fieldImages', {'id': '', 'name': '', 'source': '', });
lyr_Guayabal2Barranca_a_3.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_Shortes_LaPradera2Barranca_4.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_Shortes_DonaJuana2Barranca_5.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_Shortest_Carrasco2Barranca_6.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_Landfills_7.set('fieldImages', {'field_1': 'Hidden', 'ID': 'TextEdit', 'Departemen': '', 'latitude': 'Hidden', 'longitude': 'Hidden', 'MSW (Ton/d': '', 'MSW (ton/m': '', 'USE_TO_GAS': '', 'MSW (ton/month)': 'TextEdit', 'USE_TO_GASIFICATION': 'Range', });
lyr_Refineries_8.set('fieldImages', {'field_1': '', 'ID': '', 'Department': '', 'Latitude': '', 'Longitude': '', });
lyr_InfraestructuraVial_1.set('fieldLabels', {'objectid': 'hidden field', 'key': 'hidden field', 'cod_tramo': 'hidden field', 'codigo_via': 'hidden field', 'pr_inicial': 'hidden field', 'dist_ini': 'hidden field', 'pr_finl': 'hidden field', 'dist_fin': 'hidden field', 'territoria': 'hidden field', 'tramo': 'hidden field', 'sector': 'hidden field', 'administra': 'no label', 'amv': 'hidden field', 'superficie': 'hidden field', 'calzada': 'hidden field', 'ruta': 'hidden field', 'fuente': 'hidden field', 'fecha_fuen': 'inline label - visible with data', 'fecha_actu': 'hidden field', 'concesion': 'hidden field', 'observacio': 'hidden field', 'estado': 'hidden field', 'observac_1': 'hidden field', 'reversion': 'hidden field', 'pr_ini_con': 'hidden field', 'pr_fin_con': 'no label', 'ruleid_1': 'hidden field', 'inline_fid': 'inline label - visible with data', 'simlnflag': 'hidden field', 'maxsimptol': 'hidden field', 'minsimptol': 'hidden field', 'MONGUI': 'hidden field', 'Shape_Leng': 'hidden field', 'Speed_limi': 'hidden field', });
lyr_Colombia_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'source': 'no label', });
lyr_Guayabal2Barranca_a_3.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Shortes_LaPradera2Barranca_4.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Shortes_DonaJuana2Barranca_5.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Shortest_Carrasco2Barranca_6.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Landfills_7.set('fieldLabels', {'ID': 'no label', 'Departemen': 'no label', 'MSW (Ton/d': 'hidden field', 'MSW (ton/m': 'header label - visible with data', 'USE_TO_GAS': 'header label - visible with data', 'MSW (ton/month)': 'inline label - always visible', 'USE_TO_GASIFICATION': 'inline label - always visible', });
lyr_Refineries_8.set('fieldLabels', {'field_1': 'hidden field', 'ID': 'no label', 'Department': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Refineries_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});