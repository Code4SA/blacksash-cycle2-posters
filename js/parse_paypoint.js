var get_num;

var convert_to_json = function(data, idx) {
    get_num = function(r, c) {
        return parseInt(data[r][c]);
    }

    var json = {
        name : partner_map[data[0][idx]],
        location : data[0][idx],
        participants : {
            '2015' : {
                total : get_num(2, idx + 2),
                female : sum_rows(idx + cf_2015, 7, 12),
                male : sum_rows(idx + cm_2015, 7, 12),
            },
            '2014' : {
                total : get_num(2, idx + 2),
                female : sum_rows(idx + cf_2014, 7, 12),
                male : sum_rows(idx + cm_2014, 7, 12),
            },
        },
        q1 : [
                old_and_new(43, idx),
                old_and_new(44, idx),
                old_and_new(45, idx),
                old_and_new(46, idx),
                old_and_new(47, idx),
                old_and_new(48, idx),
                old_and_new(49, idx),
                old_and_new(50, idx),
        ],
        q2 : [
                old_and_new(15, idx),
                old_and_new(14, idx),
                old_and_new(18, idx),
                old_and_new(16, idx),
                old_and_new(17, idx),
                old_and_new(19, idx),
        ],
        q3 : parse2_template(58),
        q4 : parse2_template(61),
        q5 : parse2_template(64),
        q6 : parse3_template(67),
        q7 : [
                old_and_new(9, idx),
                old_and_new(8, idx),
                old_and_new(11, idx),
                old_and_new(7, idx),
                old_and_new(12, idx),
                old_and_new(10, idx),
        ],
        q8 : parse2_template(21),
        q9 : parse2_template(71),
        q10 : parse2_template(25),
        q11 : parse3_template(28),
        q12 : parse3_template(32),
        q13 : parse3_template(36),
        q14 : parse3_template(74),
        q15 : parse2_template(78),
        q16 : parse3_template(54),
    }
    return json
}
