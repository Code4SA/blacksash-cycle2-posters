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
    },
    q3 : {
        women : {
            2014 : [90, 0, 30],
            2015 : [40, 0, 66],
        },
        men : {
            2014 : [70, 0, 90],
            2015 : [100, 0, 120],
        },
    },
    q4 : {
        women : {
            2014 : [90, 0, 30],
            2015 : [40, 0, 66],
        },
        men : {
            2014 : [70, 0, 90],
            2015 : [100, 0, 120],
        },
    },
    q5 : {
        women : {
            2014 : [90, 0, 30],
            2015 : [40, 0, 66],
        },
        men : {
            2014 : [70, 0, 90],
            2015 : [100, 0, 120],
        },
    },
    q6 : {
        women : {
            2014 : [90, 0, 30],
            2015 : [40, 0, 66],
        },
        men : {
            2014 : [70, 0, 90],
            2015 : [100, 0, 120],
        },
    },
    q9 : {
        women : {
            2014 : [90, 20, 30],
            2015 : [40, 70, 66],
        },
        men : {
            2014 : [70, 80, 90],
            2015 : [100, 110, 120],
        },
    },
    q10 : {
        women : {
            2014 : [90, 20, 30],
            2015 : [40, 70, 66],
        },
        men : {
            2014 : [70, 80, 90],
            2015 : [100, 110, 120],
        },
    },
    q11 : {
        women : {
            2014 : [390, 20, 30],
            2015 : [90, 100, 110],
        },
        men : {
            2014 : [70, 80, 90],
            2015 : [110, 100, 90],
        },
    },
    q12 : {
        women : {
            2014 : [90, 20, 30],
            2015 : [40, 70, 66],
        },
        men : {
            2014 : [70, 80, 90],
            2015 : [100, 110, 120],
        },
    },
}

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

var place_elements = function(node) {
    node.selectAll('#organisation-name tspan').text(data['name']);
    node.selectAll('#office-location').text(data['location']);

    console.log(node.select('#q2'));
    place_type1_question(node.select('#q2'), data.q2);
    place_type1_question(node.select('#q3'), data.q3);
    place_type1_question(node.select('#q4'), data.q4);
    place_type1_question(node.select('#q5'), data.q5);
    place_type1_question(node.select('#q6'), data.q6);
    place_type2_question(node.select('#q9'), data.q9);
    place_type2_question(node.select('#q10'), data.q10);
    place_type2_question(node.select('#q11'), data.q11);
    place_type2_question(node.select('#q12'), data.q12);

}
