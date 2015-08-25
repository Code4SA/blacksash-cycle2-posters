function VerticalStackedBars(node, data, ctx) {
    this.node = node;
    this.data = data;
    this.width = ctx.width || 100;
    this.height = ctx.height || 420;
    this.bar_width = ctx.bar_width || 50;
    this.border_width = ctx.border_width || 1;
    this.class_prefix = ctx.class_prefix || "barseg";
    this.draw();
}

VerticalStackedBars.prototype = {
    draw : function() {
        var me = this;

        var _chunk_height = function(d, i) {
            var sub = me.data.slice(i, me.data.length);
            return y(d3.sum(sub))
        }

        var _chunk_translate = function(d, i) {
            return -y(d3.sum(me.data))
        }

        var y = d3.scale.linear()
            .domain([0, d3.sum(me.data)])
            .range([0, me.height - me.border_width]);

        var bar = this.node.selectAll("g")
            .data(this.data)
            .enter()
            .append("g")
                .attr("class", function(d, i) {
                    return me.class_prefix + " " + me.class_prefix + "_" + i;
                })
                .attr("transform", function(d, i) {
                    return "translate(0, " + -y(d3.sum(me.data)) + ")";
                });

        bar.append("rect")
            .attr("height", _chunk_height)
            .attr("width", me.bar_width - me.border_width * 2);

        bar.append("text")
            .attr("y", function(d, i) {
                return -y(d3.sum(me.data.slice(0, i)) + me.data[i] / 2);
            })
            .attr("transform", function() {
                return "translate(0, " + y(d3.sum(me.data)) + ")";
            })
            .attr("x", me.bar_width + 1)
            .attr("dy", ".35em")
            .style("text-anchor", "start")
            .text(function(d) {
                if (d > 0)
                    return d;
                return "";
            });
    },
}

