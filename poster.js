var big_bar_height = 62;
var small_bar_height = 13;
var big_bar_width = 62;
var small_bar_width = 10;
var bar_width = 596;
var bar_height = 350;

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
        .range([0, bar_width])

    node.selectAll('.demo-contents').remove();

    place_type1_bar(node.select('.women-2015'), data.women['2015'], width_scale);
    place_type1_bar(node.select('.men-2015'), data.men['2015'], width_scale);
    place_type1_bar_small(node.select('.women-2014'), data.women['2014'], width_scale);
    place_type1_bar_small(node.select('.men-2014'), data.men['2014'], width_scale);

}

var place_type2_bar = function(node, data, height_scale) {
    var total = d3.sum(data);
    new VerticalStackedBars(node, data, {
        height: height_scale(total),
        width: 100,
        bar_width: big_bar_width
    })
}

var place_type2_bar_small = function(node, data, height_scale) {
    var total = d3.sum(data);
    new VerticalStackedBars(node, data, {
        height: height_scale(total),
        width: 100,
        bar_width: small_bar_width
    })
    node.selectAll('.barseg text').remove();
}

var place_type2_question = function(node, data) {
    var wtotal_2015 = d3.sum(data.women['2015'])
    var wtotal_2014 = d3.sum(data.women['2014'])
    var mtotal_2015 = d3.sum(data.men['2015'])
    var mtotal_2014 = d3.sum(data.men['2014'])

    var height_scale = d3.scale.linear()
        .domain([0, d3.max([wtotal_2014, wtotal_2015, mtotal_2014, mtotal_2015])])
        .range([0, bar_height])

    node.selectAll('.demo-contents').remove();

    place_type2_bar(node.select('.women-2015'), data.women['2015'], height_scale);
    place_type2_bar(node.select('.men-2015'), data.men['2015'], height_scale);
    place_type2_bar_small(node.select('.women-2014'), data.women['2014'], height_scale);
    place_type2_bar_small(node.select('.men-2014'), data.men['2014'], height_scale);

}

var place_type3_question = function(node, data, ctx) {
    if (!ctx) ctx = {};
    height = ctx.height || 32;
    height1 = ctx.height1 || 22;
    width = ctx.width || 320;

    var max_val = d3.max(data, function(d) {
        return d3.max([
            d3.max(d.women), d3.max(d.men)
        ])
    });
    node.selectAll('.demo-contents').remove();

    x = d3.scale.linear().domain([0, max_val]).range([0, width]);
    var women_nodes = node.selectAll('g.women')
        .data(data)

    var men_nodes = node.selectAll('g.men')
        .data(data)

    women_nodes.each(function(d, i) {
        hb = new HorizontalBars(d3.select(this), d.women, {
            width: x(d3.max(d.women)),
            height: height,
            height1: height1,
            label_space: 6,
            flip: false
        })
    })

    men_nodes.each(function(d, i) {
        hb = new HorizontalBars(d3.select(this), d.men, {
            width: x(d3.max(d.men)),
            height: height,
            height1: height1,
            label_space: 6,
            flip: true
        })
    })
}

var place_elements = function(node, data) {
    node.selectAll('#organisation-name tspan').text(data['name']);
    node.selectAll('#office-location').text(data['location']);
    node.selectAll('#participants-2015 .total').text(data['participants']['2015']['total']);
    node.selectAll('#participants-2015 .female').text(data['participants']['2015']['female']);
    node.selectAll('#participants-2015 .male').text(data['participants']['2015']['male']);
    node.selectAll('#participants-2014 .total').text(data['participants']['2014']['total']);
    node.selectAll('#participants-2014 .female').text(data['participants']['2014']['female']);
    node.selectAll('#participants-2014 .male').text(data['participants']['2014']['male']);

    place_type3_question(node.select('#q1'), data.q1);
    place_type1_question(node.select('#q2'), data.q2);
    place_type1_question(node.select('#q3'), data.q3);
    place_type1_question(node.select('#q4'), data.q4);
    place_type1_question(node.select('#q5'), data.q5);
    place_type1_question(node.select('#q6'), data.q6);
    place_type3_question(node.select('#q7'), data.q7, { height:48, height1: 32, width:150 });
    place_type3_question(node.select('#q8'), data.q8, { height:48, height1: 32, width:150 });
    place_type2_question(node.select('#q9'), data.q9);
    place_type2_question(node.select('#q10'), data.q10);
    place_type2_question(node.select('#q11'), data.q11);
    place_type2_question(node.select('#q12'), data.q12);

}
