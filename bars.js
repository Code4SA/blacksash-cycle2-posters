function HorizontalBars(node, data, ctx) {
    this.node = node;
    this.data = data;
    this.width = ctx.width || 420;
    this.height = ctx.height || 100;
    this.bar_height = ctx.bar_height || 50;
    this.border_width = ctx.border_width || 1;
    this.class_prefix = ctx.class_prefix || "barseg";
    this.draw();
}

HorizontalBars.prototype = {
    draw : function() {
        var me = this;

        _chunk_width = function(el, i) {
            var index = me.data.length - i - 1;
            var sub = me.data.slice(0, index + 1);
            return x(d3.sum(sub))
        }

        var x = d3.scale.linear()
            .domain([0, d3.sum(me.data)])
            .range([0, me.width - me.border_width]);

        this.node 
            .attr("width", this.width)
            .attr("height", this.height);

        var bar = this.node.selectAll("g")
            .data(this.data)
            .enter()
            .append("g")
                .attr("class", function(el, i) {
                    return me.class_prefix + " " + me.class_prefix + "_" + i;
                })
                .attr("transform", "translate(0, " + (me.height - me.bar_height) / 2 + ")")

        bar.append("rect")
            .attr("width", _chunk_width)
            .attr("height", me.bar_height - 1);

        bar.append("text")
            .attr("x", function(d, i) {
                var total =  d3.sum(me.data.slice(0, i + 1));
                var left = x(d / 2 + d3.sum(me.data.slice(0, i)));
                return left;
            })
            .attr("y", -3)
            .attr("dy", "-.35em")
            .attr("dx", ".35em")
            .text(function(d) { return d; });
    },
}


