var get_num;

var convert_to_json = function(data, idx) {
    get_num = function(r, c) {
        return parseInt(data[r][c]);
    }

    total_female_2014 = sum_rows(idx + cfo_2014, 7, 10);
    total_male_2014 = sum_rows(idx + cmo_2014, 7, 10);

    var json = {
        name : partner_map[data[0][idx]],
        location : data[0][idx],
        participants : {
            '2015' : {
                total : get_num(2, idx + 2),
                female : sum_rows(idx + cf_2015, 7, 10),
                male : sum_rows(idx + cm_2015, 7, 10),
            },
            '2014' : {
                total : total_female_2014 + total_male_2014,
                female : total_female_2014,
                male : total_male_2014,
            },
        },
        q1 : parse3_template(7),
        q2 : parse3_template(11),
        q3 : parse3_template(15),
        q4 : parse3_template(19),
        q5 : parse3_template(23),
        q6 : parse3_template(27),
        q7b : [
            get_num(31, idx + cf_2015) + get_num(31, idx + cm_2015),
            get_num(32, idx + cf_2015) + get_num(32, idx + cm_2015),
            get_num(33, idx + cf_2015) + get_num(33, idx + cm_2015),
            get_num(34, idx + cf_2015) + get_num(34, idx + cm_2015),
            get_num(35, idx + cf_2015) + get_num(35, idx + cm_2015),
            get_num(36, idx + cf_2015) + get_num(36, idx + cm_2015),
            get_num(37, idx + cf_2015) + get_num(37, idx + cm_2015),
            get_num(38, idx + cf_2015) + get_num(38, idx + cm_2015),
            get_num(39, idx + cf_2015) + get_num(39, idx + cm_2015),
            get_num(40, idx + cf_2015) + get_num(40, idx + cm_2015),
        ],
        q8 : parse2_template(43),
        q9 : [
            get_num(46, idx + cf_2015) + get_num(46, idx + cm_2015),
            get_num(47, idx + cf_2015) + get_num(47, idx + cm_2015),
            get_num(48, idx + cf_2015) + get_num(48, idx + cm_2015),
            get_num(49, idx + cf_2015) + get_num(49, idx + cm_2015),
            get_num(50, idx + cf_2015) + get_num(50, idx + cm_2015),
            get_num(52, idx + cf_2015) + get_num(51, idx + cm_2015),
            get_num(53, idx + cf_2015) + get_num(52, idx + cm_2015),
            get_num(51, idx + cf_2015) + get_num(53, idx + cm_2015),
        ],
        q10 : parse2_template(55),
        q11 : parse2_template(58),
        q12 : parse2_template(61),
        q13 : parse2_template(64),
        q14 : parse2_template(67),
        q15 : parse2_template(70),
        q16 : parse2_template(73),
        q17 : parse2_template(76),
        /*
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
        */
    }
    return json
}
