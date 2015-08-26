var convert_to_json = function(data, idx) {
    var get_num = function(r, c) {
        return parseInt(data[r][c]);
    }

    total_female_2014 = get_num(7, idx + cfo_2014) + get_num(8, idx + cfo_2014) + get_num(9, idx + cfo_2014)
    total_male_2014 = get_num(7, idx + cmo_2014) + get_num(8, idx + cmo_2014) + get_num(9, idx + cmo_2014)
    return {
        name : partner_map[data[0][idx]],
        location : data[0][idx],
        participants : {
            '2015' : {
                total : get_num(2, idx + 2),
                female : get_num(7, idx + cf_2015) + get_num(8, idx + cf_2015) + get_num(9, idx + cf_2015),
                male : get_num(7, idx + cm_2015) + get_num(8, idx + cm_2015) + get_num(9, idx + cm_2015),
            },
            '2014' : {
                total : total_female_2014 + total_male_2014,
                female : total_female_2014,
                male : total_male_2014
            },
        },
        q1 : [{
                women : [get_num(58, idx + cf_2015), get_num(58, idx + cf_2014)],
                men : [get_num(58, idx + cm_2015), get_num(58, idx + cm_2014)],
            },
            {
                women : [get_num(59, idx + cf_2015), get_num(59, idx + cf_2014)],
                men : [get_num(59, idx + cm_2015), get_num(59, idx + cm_2014)],
            },
            {
                women : [get_num(60, idx + cf_2015), get_num(60, idx + cf_2014)],
                men : [get_num(60, idx + cm_2015), get_num(60, idx + cm_2014)],
            },
            {
                women : [get_num(61, idx + cf_2015), get_num(61, idx + cf_2014)],
                men : [get_num(61, idx + cm_2015), get_num(61, idx + cm_2014)],
            },
            {
                women : [get_num(62, idx + cf_2015), get_num(62, idx + cf_2014)],
                men : [get_num(62, idx + cm_2015), get_num(62, idx + cm_2014)],
            },
            {
                women : [get_num(63, idx + cf_2015), get_num(63, idx + cf_2014)],
                men : [get_num(63, idx + cm_2015), get_num(63, idx + cm_2014)],
            },
            {
                women : [get_num(64, idx + cf_2015), get_num(64, idx + cf_2014)],
                men : [get_num(64, idx + cm_2015), get_num(64, idx + cm_2014)],
            },
            {
                women : [get_num(65, idx + cf_2015), get_num(65, idx + cf_2014)],
                men : [get_num(65, idx + cm_2015), get_num(65, idx + cm_2014)],
            },
        ],
        q2 : {
            men : {
                2014 : [get_num(7, idx + cm_2014), get_num(8, idx + cm_2014), get_num(9, idx + cm_2014)],
                2015 : [get_num(7, idx + cm_2015), get_num(8, idx + cm_2015), get_num(9, idx + cm_2015)],
            },
            women : {
                2014 : [get_num(7, idx + cf_2014), get_num(8, idx + cf_2014), get_num(9, idx + cf_2014)],
                2015 : [get_num(7, idx + cf_2015), get_num(8, idx + cf_2015), get_num(9, idx + cf_2015)],
            },
        },
        q3 : {
            women : {
                2014 : [get_num(26, idx + cf_2014), 0, get_num(25, idx + cf_2014)],
                2015 : [get_num(26, idx + cf_2015), 0, get_num(25, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(26, idx + cm_2014), 0, get_num(25, idx + cm_2014)],
                2015 : [get_num(26, idx + cm_2015), 0, get_num(25, idx + cm_2015)],
            },
        },
        q4 : {
            women : {
                2014 : [get_num(30, idx + cf_2014), 0, get_num(29, idx + cf_2014)],
                2015 : [get_num(30, idx + cf_2015), 0, get_num(29, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(30, idx + cm_2014), 0, get_num(29, idx + cm_2014)],
                2015 : [get_num(30, idx + cm_2015), 0, get_num(29, idx + cm_2015)],
            },
        },
        q5 : {
            women : {
                2014 : [get_num(33, idx + cf_2014), 0, get_num(32, idx + cf_2014)],
                2015 : [get_num(33, idx + cf_2015), 0, get_num(32, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(33, idx + cm_2014), 0, get_num(32, idx + cm_2014)],
                2015 : [get_num(33, idx + cm_2015), 0, get_num(32, idx + cm_2015)],
            },
        },
        q6 : {
            women : {
                2014 : [get_num(36, idx + cf_2014), 0, get_num(35, idx + cf_2014)],
                2015 : [get_num(36, idx + cf_2015), 0, get_num(35, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(36, idx + cm_2014), 0, get_num(35, idx + cm_2014)],
                2015 : [get_num(36, idx + cm_2015), 0, get_num(35, idx + cm_2015)],
            },
        },
        q7 : [{
                women : [get_num(13, idx + cf_2015), get_num(13, idx + cf_2014)],
                men : [get_num(13, idx + cm_2015), get_num(13, idx + cm_2014)],
            },
            {
                women : [get_num(12, idx + cf_2015), get_num(12, idx + cf_2014)],
                men : [get_num(12, idx + cm_2015), get_num(12, idx + cm_2014)],
            },
            {
                women : [get_num(15, idx + cf_2015), get_num(15, idx + cf_2014)],
                men : [get_num(15, idx + cm_2015), get_num(15, idx + cm_2014)],
            },
            {
                women : [get_num(11, idx + cf_2015), get_num(11, idx + cf_2014)],
                men : [get_num(11, idx + cm_2015), get_num(11, idx + cm_2014)],
            },
            {
                women : [get_num(16, idx + cf_2015), get_num(16, idx + cf_2014)],
                men : [get_num(16, idx + cm_2015), get_num(16, idx + cm_2014)],
            },
            {
                women : [get_num(14, idx + cf_2015), get_num(14, idx + cf_2014)],
                men : [get_num(14, idx + cm_2015), get_num(14, idx + cm_2014)],
            },
        ],
        q8 : [{
                women : [get_num(19, idx + cf_2015), get_num(19, idx + cf_2014)],
                men : [get_num(19, idx + cm_2015), get_num(19, idx + cm_2014)],
            },
            {
                women : [get_num(18, idx + cf_2015), get_num(18, idx + cf_2014)],
                men : [get_num(18, idx + cm_2015), get_num(18, idx + cm_2014)],
            },
            {
                women : [get_num(22, idx + cf_2015), get_num(22, idx + cf_2014)],
                men : [get_num(22, idx + cm_2015), get_num(22, idx + cm_2014)],
            },
            {
                women : [get_num(20, idx + cf_2015), get_num(20, idx + cf_2014)],
                men : [get_num(20, idx + cm_2015), get_num(20, idx + cm_2014)],
            },
            {
                women : [get_num(21, idx + cf_2015), get_num(21, idx + cf_2014)],
                men : [get_num(21, idx + cm_2015), get_num(21, idx + cm_2014)],
            },
            {
                women : [get_num(23, idx + cf_2015), get_num(23, idx + cf_2014)],
                men : [get_num(23, idx + cm_2015), get_num(23, idx + cm_2014)],
            },
        ],
        q9 : {
            women : {
                2014 : [get_num(38, idx + cf_2014), get_num(39, idx + cf_2014), get_num(40, idx + cf_2014)],
                2015 : [get_num(38, idx + cf_2015), get_num(39, idx + cf_2015), get_num(40, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(38, idx + cm_2014), get_num(39, idx + cm_2014), get_num(40, idx + cm_2014)],
                2015 : [get_num(38, idx + cm_2015), get_num(39, idx + cm_2015), get_num(40, idx + cm_2015)],
            },
        },
        q10 : {
            women : {
                2014 : [get_num(42, idx + cf_2014), get_num(43, idx + cf_2014), get_num(44, idx + cf_2014)],
                2015 : [get_num(42, idx + cf_2015), get_num(43, idx + cf_2015), get_num(44, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(42, idx + cm_2014), get_num(43, idx + cm_2014), get_num(44, idx + cm_2014)],
                2015 : [get_num(42, idx + cm_2015), get_num(43, idx + cm_2015), get_num(44, idx + cm_2015)],
            },
        },
        q11 : {
            women : {
                2014 : [get_num(46, idx + cf_2014), get_num(47, idx + cf_2014), get_num(48, idx + cf_2014)],
                2015 : [get_num(46, idx + cf_2015), get_num(47, idx + cf_2015), get_num(48, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(46, idx + cm_2014), get_num(47, idx + cm_2014), get_num(48, idx + cm_2014)],
                2015 : [get_num(46, idx + cm_2015), get_num(47, idx + cm_2015), get_num(48, idx + cm_2015)],
            },
        },
        q12 : {
            women : {
                2014 : [get_num(69, idx + cf_2014), get_num(70, idx + cf_2014), get_num(71, idx + cf_2014)],
                2015 : [get_num(69, idx + cf_2015), get_num(70, idx + cf_2015), get_num(71, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(69, idx + cm_2014), get_num(70, idx + cm_2014), get_num(71, idx + cm_2014)],
                2015 : [get_num(69, idx + cm_2015), get_num(70, idx + cm_2015), get_num(71, idx + cm_2015)],
            },
        },
    }
}
