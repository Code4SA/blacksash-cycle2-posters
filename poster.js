var data = {
    name : 'XYZ Office',
    location : 'Mbombela',
    q2 : {
        women : {
            2014 : [90, 20, 30],
            2015 : [40, 50, 66],
        },
        men : {
            2014 : [70, 80, 90],
            2015 : [100, 110, 120],
        },
    }
}

var big_bar_height = 62;
var small_bar_height = 13;

var place_type1_bar = function(node, data, width_scale) {
    var total = d3.sum(data);
    new HorizontalStackedBars(node, data, {
        width: width_scale(total),
        height: 100,
        bar_height: big_bar_height
    })
    node.select('.year').attr('transform', ' translate(' + width_scale(total) + ', 0)');
}

var place_type1_bar_small = function(node, data, width_scale) {
    var total = d3.sum(data);
    new HorizontalStackedBars(node, data, {
        width: width_scale(total),
        height: small_bar_height,
        bar_height: small_bar_height
    })
    node.selectAll('.barseg text').remove();
    node.select('.year').attr('transform', ' translate(' + width_scale(total) + ', 0)');
}

var place_type1_question = function(node, data) {
    var wtotal_2015 = d3.sum(data.women['2015'])
    var wtotal_2014 = d3.sum(data.women['2014'])
    var mtotal_2015 = d3.sum(data.men['2015'])
    var mtotal_2014 = d3.sum(data.men['2014'])

    var width_scale = d3.scale.linear()
        .domain([0, d3.max([wtotal_2014, wtotal_2015, mtotal_2014, mtotal_2015])])
        .range([0, 596])

    node.selectAll('.demo-contents').remove();

    place_type1_bar(node.select('.women-2015'), data.women['2015'], width_scale);
    place_type1_bar(node.select('.men-2015'), data.men['2015'], width_scale);
    place_type1_bar_small(node.select('.women-2014'), data.women['2014'], width_scale);
    place_type1_bar_small(node.select('.men-2014'), data.men['2014'], width_scale);
/*

    var women_2014 = node.select('.women-2014')
    new HorizontalStackedBars(women_2014, data.women['2014'], {
        width: width_scale(wtotal_2014),
        height: 100,
        bar_height: small_bar_height
    })
    women_2014.selectAll('.barseg text').remove();
    women_2014.select('.year').attr('transform', ' translate(' + width_scale(wtotal_2014) + ', 0)');
*/

}

var place_elements = function(node) {
    node.selectAll('#organisation-name tspan').text(data['name']);
    node.selectAll('#office-location').text(data['location']);

    console.log(node.select('#q2'));
    place_type1_question(node.select('#q2'), data.q2);

}
