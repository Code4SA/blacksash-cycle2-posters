function HorizontalStackedBars(node, data, ctx) {
    this.node = node;
    this.data = data;
    this.width = ctx.width || 420;
    this.height = ctx.height || 100;
    this.bar_height = ctx.bar_height || 50;
    this.border_width = ctx.border_width || 1;
    this.class_prefix = ctx.class_prefix || "barseg";
    this.draw();
}

HorizontalStackedBars.prototype = {
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

function HorizontalBars(node, data, ctx) {
    this.node = node;
    this.data = data;
    this.height = ctx.height || 10;
    this.height1 = ctx.height1 || 5;
    this.height2 = this.height - this.height1;
    this.heights = [this.height1, this.height - this.height1];
    this.width = ctx.width || 100;
    this.border_width = ctx.border_width || 1;
    this.class_prefix = ctx.class_prefix || "bar";

    var foo = function(val) {
        return text_length(node, val);
    }
    this.label_width = d3.max(this.data.map(foo));
    this.label_space = ctx.label_space || 10;
    this.flip = ctx.flip || false;

    this.draw();
}


HorizontalBars.prototype = {
    draw : function() {
        var me = this;
        var max_data = d3.max(this.data);
        var x = d3.scale.linear()
            .domain([0, d3.max(this.data)])
            .range([0, this.width - this.label_space - this.label_width]);


        var y = d3.scale.linear()
            .domain([0, 1])
            .range([0, this.height1]);

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
                .attr("transform", function(el, i) {
                    if (me.flip) {
                        return "translate(" + (me.width - x(el)) + ", " + y(i) + ")"
                    } else {
                        return "translate(0, " + y(i) + ")"
                    }
                })

        bar.append("rect")
            .attr("width", function(el, i) { return x(el); })
            .attr("height", function(el, i) {
                return me.heights[i];
            });

        bar.append("text")
            .attr("x", function(d, i) {
                if (me.flip) {
                    console.log(d);
                    console.log(x(d));
                    console.log(me.width - x(d) - me.label_space - me.label_width);
                    return -me.label_space;
                } else {
                    return x(d) + me.label_space + me.label_width;
                }
            })
            .attr("y", function(d, i) {
                return me.heights[i] / 2;
            })
            .attr("dy", "+.35em")
            .text(function(d) { return d; });

        
    }    
}

var text_length = function(node, val) {
    var n = node.append("text").text(val);
    var width = n.node().getComputedTextLength();
    n.remove();
    return width;
}
