function sum_rows(col, from, to) {
    var total = 0;
    for (var i = from; i < to; i++) {
        total += get_num(i, col);
    }
    return total;
}

function old_and_new(row, idx) {
    return {
        women : [get_num(row, idx + cf_2015), get_num(row, idx + cf_2014)],
        men : [get_num(row, idx + cm_2015), get_num(row, idx + cm_2014)],
    }
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split('&');
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split('=');
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var row2_template = function(start_row, index_offset) {
    return [
        get_num(start_row, idx + index_offset),
        0,
        get_num(start_row + 1, idx + index_offset)
    ].reverse()
}

var row3_template = function(start_row, index_offset) {
    return [
        get_num(start_row, idx + index_offset),
        get_num(start_row + 1, idx + index_offset),
        get_num(start_row + 2, idx + index_offset)]
}

var parse2_template = function(start_row) {
    var json = {
        men : {
            2014 : row2_template(start_row, cm_2014),
            2015 : row2_template(start_row, cm_2015),
        },
        women : {
            2014 : row2_template(start_row, cf_2014),
            2015 : row2_template(start_row, cf_2015),
        },
    }
    return json 
}

var parse3_template = function(start_row) {
    return {
        men : {
            2014 : row3_template(start_row, cm_2014),
            2015 : row3_template(start_row, cm_2015),
        },
        women : {
            2014 : row3_template(start_row, cf_2014),
            2015 : row3_template(start_row, cf_2015),
        },
    }
}

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

