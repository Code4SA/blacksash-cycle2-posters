var get_num;

var convert_to_json = function(data, idx) {
    get_num = function(r, c) {
        return parseInt(data[r][c]);
    }

    total_female_2014 = sum_rows(idx + cfo_2014, 7, 9);
    total_male_2014 = sum_rows(idx + cmo_2014, 7, 9);

    var json = {
        name : partner_map[data[0][idx]],
        location : data[0][idx],
        participants : {
            '2015' : {
                total : get_num(2, idx + 2),
                female : get_num(7, idx + cf_2015) + get_num(8, idx + cf_2015),
                male : get_num(7, idx + cm_2015) + get_num(8, idx + cm_2015)
            },
            '2014' : {
                total : total_female_2014 + total_male_2014,
                female : total_female_2014,
                male : total_male_2014,
            },
        },
        q1 : parse2_template(7),
        q2 : parse3_template(10),
        q3 : parse3_template(14),
        q4 : parse3_template(18),
        q5 : parse2_template(22),
        q6 : parse3_template(26),
        q7 : [{
                women : [get_num(30, idx + cf_2015), get_num(30, idx + cf_2014)],
                men : [get_num(30, idx + cm_2015), get_num(30, idx + cm_2014)],
            },
            {
                women : [get_num(31, idx + cf_2015), get_num(31, idx + cf_2014)],
                men : [get_num(31, idx + cm_2015), get_num(31, idx + cm_2014)],
            },
            {
                women : [get_num(32, idx + cf_2015), get_num(32, idx + cf_2014)],
                men : [get_num(32, idx + cm_2015), get_num(32, idx + cm_2014)],
            },
            {
                women : [get_num(33, idx + cf_2015), get_num(33, idx + cf_2014)],
                men : [get_num(33, idx + cm_2015), get_num(33, idx + cm_2014)],
            },
        ],
        q8 : [{
                women : [get_num(36, idx + cf_2015), get_num(36, idx + cf_2014)],
                men : [get_num(36, idx + cm_2015), get_num(36, idx + cm_2014)],
            },
            {
                women : [get_num(38, idx + cf_2015), get_num(38, idx + cf_2014)],
                men : [get_num(38, idx + cm_2015), get_num(38, idx + cm_2014)],
            },
            {
                women : [get_num(39, idx + cf_2015), get_num(39, idx + cf_2014)],
                men : [get_num(39, idx + cm_2015), get_num(39, idx + cm_2014)],
            },
            {
                women : [get_num(37, idx + cf_2015), get_num(37, idx + cf_2014)],
                men : [get_num(37, idx + cm_2015), get_num(37, idx + cm_2014)],
            },
            {
                women : [get_num(40, idx + cf_2015), get_num(40, idx + cf_2014)],
                men : [get_num(40, idx + cm_2015), get_num(40, idx + cm_2014)],
            },
        ],
        q9 : [{
                women : [get_num(42, idx + cf_2015), get_num(42, idx + cf_2014)],
                men : [get_num(42, idx + cm_2015), get_num(42, idx + cm_2014)],
            },
            {
                women : [get_num(44, idx + cf_2015), get_num(44, idx + cf_2014)],
                men : [get_num(44, idx + cm_2015), get_num(44, idx + cm_2014)],
            },
            {
                women : [get_num(45, idx + cf_2015), get_num(45, idx + cf_2014)],
                men : [get_num(45, idx + cm_2015), get_num(45, idx + cm_2014)],
            },
            {
                women : [get_num(43, idx + cf_2015), get_num(43, idx + cf_2014)],
                men : [get_num(43, idx + cm_2015), get_num(43, idx + cm_2014)],
            },
            {
                women : [get_num(46, idx + cf_2015), get_num(46, idx + cf_2014)],
                men : [get_num(46, idx + cm_2015), get_num(46, idx + cm_2014)],
            },
        ],
        q10 : [{
                women : [get_num(48, idx + cf_2015), get_num(48, idx + cf_2014)],
                men : [get_num(48, idx + cm_2015), get_num(48, idx + cm_2014)],
            },
            {
                women : [get_num(50, idx + cf_2015), get_num(50, idx + cf_2014)],
                men : [get_num(50, idx + cm_2015), get_num(50, idx + cm_2014)],
            },
            {
                women : [get_num(51, idx + cf_2015), get_num(51, idx + cf_2014)],
                men : [get_num(51, idx + cm_2015), get_num(51, idx + cm_2014)],
            },
            {
                women : [get_num(49, idx + cf_2015), get_num(49, idx + cf_2014)],
                men : [get_num(49, idx + cm_2015), get_num(49, idx + cm_2014)],
            },
            {
                women : [get_num(52, idx + cf_2015), get_num(52, idx + cf_2014)],
                men : [get_num(52, idx + cm_2015), get_num(52, idx + cm_2014)],
            },
        ],
        q11 : parse2_template(55),
        q12 : parse2_template(58),
        q13 : parse2_template(61),
        q14 : parse2_template(64),
        q15 : parse2_template(67),
        q16 : parse3_template(71),
        q17 : parse3_template(75),
        q18 : parse3_template(80),
        q19 : parse3_template(84),
    }
    return json
}
