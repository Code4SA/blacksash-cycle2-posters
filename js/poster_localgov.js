
var place_elements = function(node, data) {
    node.selectAll('#organisation-name').text(data['name']);
    node.selectAll('#office-location').text(data['location']);
    node.selectAll('#participants-2015 .total tspan').text(data['participants']['2015']['total']);
    node.selectAll('#participants-2015 .female tspan').text(data['participants']['2015']['female']);
    node.selectAll('#participants-2015 .male tspan').text(data['participants']['2015']['male']);
    node.selectAll('#participants-2014 .total tspan').text(data['participants']['2014']['total']);
    node.selectAll('#participants-2014 .female tspan').text(data['participants']['2014']['female']);
    node.selectAll('#participants-2014 .male tspan').text(data['participants']['2014']['male']);

    bar_height = 220;
    big_bar_width = 76;
    place_type2_question(node.select('#q1'), data.q1);
    place_type2_question(node.select('#q2'), data.q2);
    place_type2_question(node.select('#q3'), data.q3);
    place_type2_question(node.select('#q4'), data.q4);
    place_type2_question(node.select('#q5'), data.q5);
    place_type2_question(node.select('#q6'), data.q6);

    bar_height = 280;
    big_bar_width = 40;
    place_type2_question(node.select('#q8'), data.q8);

    big_bar_height = 30;
    small_bar_height = 8.5;
    bar_width = 250;
    place_type1_question(node.select('#q10'), data.q10, { text_margin : 0.2 });
    place_type1_question(node.select('#q11'), data.q11, { text_margin : 0.2 });
    place_type1_question(node.select('#q12'), data.q12, { text_margin : 0.2 });
    place_type1_question(node.select('#q13'), data.q13, { text_margin : 0.2 });
    place_type1_question(node.select('#q14'), data.q14, { text_margin : 0.2 });
    place_type1_question(node.select('#q15'), data.q15, { text_margin : 0.2 });
    place_type1_question(node.select('#q16'), data.q16, { text_margin : 0.2 });
    place_type1_question(node.select('#q17'), data.q17, { text_margin : 0.2 });

    var affiliated = d3.sum(data.q7b);
    var not_affiliated = data.participants["2015"]["total"] - affiliated;
    d3.select("#affiliated").text(affiliated)
    d3.select("#not-affiliated").text(not_affiliated);
    var pie = d3.select("#q7a");
    pie.selectAll("*").remove();

    var create_pie = function(node, data, radius) {
        var radius = 100;
        var arc = d3.svg.arc()
            .outerRadius(radius)
            .innerRadius(0);

        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d; });

        var color = d3.scale.ordinal().range(["#F4991F", "black"])

        var g = node.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
                .attr("class", "arc")

        g.append("path")
            .attr("d", arc)
            .style("fill", function(d, i) { return color(i); })
    }
    create_pie(pie, [affiliated, not_affiliated], 100);
    

    d3.selectAll("#q7b tspan.number")
        .data(data.q7b)
        .text(String)

    var bars = d3.selectAll("#q9 g");
    var y = function(i) {
        return -(i * 53 - 52);
    }
    bars.selectAll("*").remove();
    bars.data(data.q9)
        .each(function(d, i) {
            var width = 330;
            var total = data.participants["2015"]["total"]
            var x = d3.scale.linear().domain([0, total]).range([0, width])

            var bar = new HorizontalStackedBars(d3.select(this), [d, 0, total - d], {
                bar_height: 20,
                width: width,
            }) 
            bar.node.selectAll("text").remove();
            bar.node.append("text")
                .text(d)
                .attr("transform", function(d, i) {
                    return "translate(" + (5 + x(total)) + "," + y(i) + ")";
                })
        })
        .attr("transform", function(d, i) {
            return "translate(0, " + (i * 53 - 30) + ")";
        })
    /*
    d3.select("#q9").selectAll("rect.colored")
        .data(data.q9)
        .enter()
        .append("rect")
            .classed("colored", true)
            .attr("height", 22.678)
            .attr("width", 292.503)
            .attr("x", 0)
            .attr("y", function(d, i) {
                return 0 + i * 53.384;
            })
            .style("fill", "orange")
    */
}
