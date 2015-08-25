
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
    /*

    place_type3_question(node.select('#q1'), data.q1, { height:38, height1: 26, width:400 });
    place_type3_question(node.select('#q2'), data.q2, { height:52, height1: 40, width:400 });
    big_bar_width = 97;
    place_type2_question(node.select('#q4'), data.q4);
    place_type2_question(node.select('#q5'), data.q5);
    place_type2_question(node.select('#q6'), data.q6);
    place_type3_question(node.select('#q7'), data.q7, { height:40, height1: 28, width:230 });
    place_type2_question(node.select('#q8'), data.q8);
    place_type2_question(node.select('#q9'), data.q9);
    place_type2_question(node.select('#q10'), data.q10);
    place_type2_question(node.select('#q11'), data.q11);
    place_type2_question(node.select('#q12'), data.q12);
    place_type2_question(node.select('#q13'), data.q13);
    place_type2_question(node.select('#q14'), data.q14);
    place_type2_question(node.select('#q15'), data.q15);
    place_type2_question(node.select('#q16'), data.q16);
    */


}
