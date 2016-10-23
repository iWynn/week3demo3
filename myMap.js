var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AoC3pUIH-Qalulh2OLujpyg0fiK_bOcxTJ9abjhr8J8rykgaFxZqvfHLCnbgVwmr'
    });
    add_pokemon_layer();
}

// 1. Define pokemon data format, create mock pokemon data
map_items = [
    {
      "pokemon_id" : 12,
      "expire" : 1234567,
      "longitude" : -118.6467618,
      "latitude" : 34.1075049
    }
]

// 2. Create pokemon image on map
function get_pokemon_layer_from_map_items(map_items) {
    var layer = new Microsoft.Maps.Layer();
    var pushpins = []
    for (var i in map_items) {
        var map_item = map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                                 { icon: 'images/pushpin_images/pokemon/'+map_item['pokemon_id']+'.png'});
        pushpins.push(pushpin)
    }
    layer.add(pushpins);
    return layer;
}
function add_pokemon_layer() {
    var pokemon_layer = get_pokemon_layer_from_map_items(map_items)
    map.layers.insert(pokemon_layer);
}

// 3. Add pokemon counter down refresh

// 4. Connect with REST API
