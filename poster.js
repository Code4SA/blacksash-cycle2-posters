var data = {
    name : 'XYZ Office',
    location : 'Mbombela',
    graph2 : {
        2014 : [10, 20, 30],
        2015 : [10, 20, 30],
    }
}

var place_elements = function(node) {
    node.selectAll('#organisation-name tspan').text(data['name']);
    node.selectAll('#office-location').text(data['location']);

    var graph2 = node.select('#graph2')
    graph2.selectAll('*').remove();
    new HorizontalStackedBars(graph2, data.graph2['2015'], {
        width: 596,
        height: 100,
        bar_height: 62
    })
}
