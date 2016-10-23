var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AoC3pUIH-Qalulh2OLujpyg0fiK_bOcxTJ9abjhr8J8rykgaFxZqvfHLCnbgVwmr'
    });
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
    var pushpins = Microsoft.Maps.TestDataGenerator.getPushpins(10, map.getBounds());
    layer.add(pushpins);
    return layer;
}
var pokemon_layer = get_pokemon_layer_from_map_items(map_items)
map.layers.insert(layer);

// 3. Add pokemon counter down refresh

// 4. Connect with REST API
