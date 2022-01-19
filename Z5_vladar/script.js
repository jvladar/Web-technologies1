var nameCorrect = false;
var surnameCorrect = false;

document.addEventListener('DOMContentLoaded',function () {
  var mymap = L.map('mapid').setView([48.1526517, 17.0731925], 15);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoianZsYWRhciIsImEiOiJja2d3OGZ4MGcwN29hMnFxaG5zaXk3ZDF5In0.edZqRmwFbi3ZZUshTWYnXQ'
    }).addTo(mymap);

    L.geoJSON(bloky,{
      onEachFeature: onEachFeature
    }).addTo(mymap);

    L.geoJSON(zastavky,{
      pointToLayer:function(feature,latlng){
        return L.marker(latlng,{icon: busIcon});
      }, onEachFeature:onEachFeature
    }).addTo(mymap);

    L.geoJSON(zastavkyEle,{
      pointToLayer:function(feature,latlng){
        return L.marker(latlng,{icon: tramIcon});
      }, onEachFeature:onEachFeature
    }).addTo(mymap);

    var searchControl = L.esri.Geocoding.geosearch().addTo(mymap);

    var results = L.layerGroup().addTo(mymap);
  
    searchControl.on('results', function (data) {
      results.clearLayers();
      for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));

        L.Routing.control({
          waypoints: [
            L.latLng(48.15189, 17.07349),
            data.results[i].latlng
          ]
        }).addTo(mymap);

      }
    });

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Miesto na ktore si klikol ma suradnice <br>"+ e.latlng)
        .openOn(mymap);
}
mymap.on('click', onMapClick);

})

const busIcon = L.icon({
  iconUrl:"https://www.flaticon.com/svg/static/icons/svg/0/308.svg",
  iconSize: [15,15],
  iconAnchor:[10,10],
  popupAnchor:[0,-10]
});

const tramIcon = L.icon({
  iconUrl:"https://www.flaticon.com/svg/static/icons/svg/565/565411.svg",
  iconSize: [15,15],
  iconAnchor:[10,10],
  popupAnchor:[0,-10]
});

function onEachFeature(feature, layer){
  if (feature.properties && feature.properties.popupContent){
    layer.bindPopup(feature.properties.popupContent);
  }
}

var bloky = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name":"Blok E",
        "popupContent":"Blok E na FEI STU"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              17.072823643684387,
              48.15383671846993
            ],
            [
              17.073885798454285,
              48.15383671846993
            ],
            [
              17.073885798454285,
              48.153987026996134
            ],
            [
              17.072823643684387,
              48.153987026996134
            ],
            [
              17.072823643684387,
              48.15383671846993
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Blok D",
        "popupContent":"Blok D na FEI STU"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              17.073199152946472,
              48.153328529239474
            ],
            [
              17.074379324913025,
              48.153328529239474
            ],
            [
              17.074379324913025,
              48.153478839254355
            ],
            [
              17.073199152946472,
              48.153478839254355
            ],
            [
              17.073199152946472,
              48.153328529239474
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Blok C",
        "popupContent":"Blok C na FEI STU"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              17.072823643684387,
              48.152827492676586
            ],
            [
              17.073885798454285,
              48.152827492676586
            ],
            [
              17.073885798454285,
              48.15297780415916
            ],
            [
              17.072823643684387,
              48.15297780415916
            ],
            [
              17.072823643684387,
              48.152827492676586
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Blok B",
        "popupContent":"Blok B na FEI STU"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              17.07300066947937,
              48.152319293450894
            ],
            [
              17.074357867240906,
              48.152319293450894
            ],
            [
              17.074357867240906,
              48.15246960642209
            ],
            [
              17.07300066947937,
              48.15246960642209
            ],
            [
              17.07300066947937,
              48.152319293450894
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Blok A",
        "popupContent":"Blok A na FEI STU"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              17.072547376155853,
              48.15182003649369
            ],
            [
              17.07387775182724,
              48.15182003649369
            ],
            [
              17.07387775182724,
              48.1519685614724
            ],
            [
              17.072547376155853,
              48.1519685614724
            ],
            [
              17.072547376155853,
              48.15182003649369
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Telocvicna",
        "popupContent":"Telocvicna na FEI STU"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              17.072550058364868,
              48.15354683649736
            ],
            [
              17.072818279266357,
              48.15354683649736
            ],
            [
              17.072818279266357,
              48.15381882456843
            ],
            [
              17.072550058364868,
              48.15381882456843
            ],
            [
              17.072550058364868,
              48.15354683649736
            ]
          ]
        ]
      }
    }
  ]
}

var zastavky = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "popupContent":"Autobusová zástavka pod FEIkou pre linky : 31, 39"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.075328826904297,
            48.15404786603634
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "popupContent":"Autobusová zástavka ZOO pre linky : 92, 192"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.075800895690918,
            48.15457752051504
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "popupContent":"Autobusová zástavka pod ZOO pre linky : 92, 32, 192"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.076959609985348,
            48.15404786603634
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "popupContent":"Autobusová zástavka Botanická pre linky : 29, 32"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.071906328201294,
            48.14827141429535
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "popupContent":"Autobusová zástavka Botanická pre linky : 29, 32"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.072142362594604,
            48.1480495054109
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "popupContent":"Autobusová zástavka Cintorín slávičie údolie pre linky : 31, 39"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.06799030303955,
            48.15821337934238
          ]
        }
      }
  ]
}

var zastavkyEle = {
  "type": "FeatureCollection",
  "features": [
    
    {
      "type": "Feature",
      "properties": {
        "popupContent":"Električková zástavka Botanická pre linky : 4,9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.07251,
          48.14815
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupContent":"Električková zástavka Botanická pre linky : 4,9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.07169,
          48.14814
        ]
      }
    }
  ]
}
