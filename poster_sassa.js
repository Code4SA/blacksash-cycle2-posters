var bar_height = 350;

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
