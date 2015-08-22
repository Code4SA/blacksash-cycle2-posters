var data = {
    name : 'XYZ Office',
    location : 'Mbombela',
    graph2 : {
        2014 : [10, 20, 30],
        2015 : [10, 30, 46],
    },
    graph3 : {
        2014 : [10, 20, 30],
        2015 : [30, 20, 30],
    },
}

var place_elements = function(node) {
    node.selectAll('#organisation-name tspan').text(data['name']);
    node.selectAll('#office-location').text(data['location']);

    var graph2_total = d3.sum(data.graph2['2015']),
        graph3_total = d3.sum(data.graph3['2015']);

    var width_scale = d3.scale.linear()
                        .domain([0, d3.max([graph2_total, graph3_total])])
                        .range([0, 596])

    node.selectAll('.demo-contents').remove();


    var graph2 = node.select('#graph2')
    new HorizontalStackedBars(graph2, data.graph2['2015'], {
        width: width_scale(graph2_total),
        height: 100,
        bar_height: 62
    })
    graph2.select('.year').attr('transform', ' translate(' + width_scale(graph2_total) + ', 0)');

    var graph3 = node.select('#graph3')
    new HorizontalStackedBars(graph3, data.graph3['2015'], {
        width: width_scale(graph3_total),
        height: 100,
        bar_height: 62
    })
    graph3.select('.year').attr('transform', ' translate(' + width_scale(graph3_total) + ', 0)');

}
