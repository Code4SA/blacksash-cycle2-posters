var convert_to_json = function(data, idx) {
    var get_num = function(r, c) {
        return parseInt(data[r][c]);
    }

    return {
        name : 'XYZ Office',
        //location : data[0][idx],
        location : 'My location',
        /*
        participants : {
            '2015' : {
                total : get_num(2, idx + 2),
                female : get_num(7, idx + cf_2015) + get_num(8, idx + cf_2015) + get_num(9, idx + cf_2015),
                male : get_num(7, idx + cm_2015) + get_num(8, idx + cm_2015) + get_num(9, idx + cm_2015),
            },
            '2014' : {
                total : get_num(2, idx + 2),
                female : get_num(7, idx + cf_2014) + get_num(8, idx + cf_2014) + get_num(9, idx + cf_2014),
                male : get_num(7, idx + cm_2014) + get_num(8, idx + cm_2014) + get_num(9, idx + cm_2014),
            },
        },
        */
        participants : {
            '2015' : {
                total : 100,
                female : 50,
                male : 50
            },
            '2014' : {
                total : 200,
                female : 150,
                male : 50
            },
        },
        q1 : {
            women : {
                2014 : [100, 0, 300],
                2015 : [300, 0, 100],
            },
            men : {
                2014 : [50, 0, 150],
                2015 : [150, 0, 50]
            },
        },
        q2 : {
            women : {
                2014 : [100, 50, 300],
                2015 : [300, 50, 100],
            },
            men : {
                2014 : [50, 25, 150],
                2015 : [150, 45, 50]
            },
        },
        q2 : {
            women : {
                2014 : [100, 50, 300],
                2015 : [300, 50, 100],
            },
            men : {
                2014 : [50, 25, 150],
                2015 : [150, 45, 50]
            },
        },
        q3 : {
            women : {
                2014 : [100, 50, 300],
                2015 : [300, 50, 100],
            },
            men : {
                2014 : [50, 25, 150],
                2015 : [150, 45, 50]
            },
        },
        q4 : {
            women : {
                2014 : [100, 50, 300],
                2015 : [300, 50, 100],
            },
            men : {
                2014 : [50, 25, 150],
                2015 : [150, 45, 50]
            },
        },
        q5 : {
            women : {
                2014 : [100, 0, 300],
                2015 : [300, 0, 100],
            },
            men : {
                2014 : [50, 0, 150],
                2015 : [150, 0, 50]
            },
        },
        q6 : {
            women : {
                2014 : [100, 31, 300],
                2015 : [300, 23, 100],
            },
            men : {
                2014 : [50, 25, 150],
                2015 : [150, 45, 50]
            },
        },
        q7 : [{
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
        ],
        q8 : [{
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
        ],
        q9 : [{
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
            {
                women : [20, 40],
                men : [20, 40],
            },
        ],
        q11 : {
            women : {
                2014 : [100, 0, 300],
                2015 : [300, 0, 100],
            },
            men : {
                2014 : [50, 0, 150],
                2015 : [150, 0, 50]
            },
        },
        q12 : {
            women : {
                2014 : [100, 0, 300],
                2015 : [300, 0, 100],
            },
            men : {
                2014 : [50, 0, 150],
                2015 : [150, 0, 50]
            },
        },
        q13 : {
            women : {
                2014 : [100, 0, 300],
                2015 : [300, 0, 100],
            },
            men : {
                2014 : [50, 0, 150],
                2015 : [150, 0, 50]
            },
        },
        q14 : {
            women : {
                2014 : [100, 0, 300],
                2015 : [300, 0, 100],
            },
            men : {
                2014 : [50, 0, 150],
                2015 : [150, 0, 50]
            },
        },
        q15 : {
            women : {
                2014 : [100, 0, 300],
                2015 : [300, 0, 100],
            },
            men : {
                2014 : [50, 0, 150],
                2015 : [150, 0, 50]
            },
        },
        q16 : {
            women : {
                2014 : [100, 80, 300],
                2015 : [300, 70, 100],
            },
            men : {
                2014 : [50, 60, 150],
                2015 : [150, 50, 50]
            },
        },
        q17 : {
            women : {
                2014 : [100, 40, 300],
                2015 : [300, 30, 100],
            },
            men : {
                2014 : [50, 10, 150],
                2015 : [150, 20, 50]
            },
        },
        q18 : {
            women : {
                2014 : [100, 40, 300],
                2015 : [300, 30, 100],
            },
            men : {
                2014 : [50, 10, 150],
                2015 : [150, 20, 50]
            },
        },
        q19 : {
            women : {
                2014 : [100, 40, 300],
                2015 : [300, 30, 100],
            },
            men : {
                2014 : [50, 10, 150],
                2015 : [150, 20, 50]
            },
        },
        q1a : [{
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
        q2a : {
            men : {
                2014 : [get_num(7, idx + cm_2014), get_num(8, idx + cm_2014), get_num(9, idx + cm_2014)],
                2015 : [get_num(7, idx + cm_2015), get_num(8, idx + cm_2015), get_num(9, idx + cm_2015)],
            },
            women : {
                2014 : [get_num(7, idx + cf_2014), get_num(8, idx + cf_2014), get_num(9, idx + cf_2014)],
                2015 : [get_num(7, idx + cf_2015), get_num(8, idx + cf_2015), get_num(9, idx + cf_2015)],
            },
        },
        q3a : {
            women : {
                2014 : [get_num(26, idx + cf_2014), 0, get_num(25, idx + cf_2014)],
                2015 : [get_num(26, idx + cf_2015), 0, get_num(25, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(26, idx + cm_2014), 0, get_num(25, idx + cm_2014)],
                2015 : [get_num(26, idx + cm_2015), 0, get_num(25, idx + cm_2015)],
            },
        },
        q4a : {
            women : {
                2014 : [get_num(30, idx + cf_2014), 0, get_num(29, idx + cf_2014)],
                2015 : [get_num(30, idx + cf_2015), 0, get_num(29, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(30, idx + cm_2014), 0, get_num(29, idx + cm_2014)],
                2015 : [get_num(30, idx + cm_2015), 0, get_num(29, idx + cm_2015)],
            },
        },
        q5a : {
            women : {
                2014 : [get_num(33, idx + cf_2014), 0, get_num(32, idx + cf_2014)],
                2015 : [get_num(33, idx + cf_2015), 0, get_num(32, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(33, idx + cm_2014), 0, get_num(32, idx + cm_2014)],
                2015 : [get_num(33, idx + cm_2015), 0, get_num(32, idx + cm_2015)],
            },
        },
        q6a : {
            women : {
                2014 : [get_num(36, idx + cf_2014), 0, get_num(35, idx + cf_2014)],
                2015 : [get_num(36, idx + cf_2015), 0, get_num(35, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(36, idx + cm_2014), 0, get_num(35, idx + cm_2014)],
                2015 : [get_num(36, idx + cm_2015), 0, get_num(35, idx + cm_2015)],
            },
        },
        q7a : [{
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
        q8a : [{
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
        q9a : {
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
        q11a : {
            women : {
                2014 : [get_num(46, idx + cf_2014), get_num(47, idx + cf_2014), get_num(48, idx + cf_2014)],
                2015 : [get_num(46, idx + cf_2015), get_num(47, idx + cf_2015), get_num(48, idx + cf_2015)],
            },
            men : {
                2014 : [get_num(46, idx + cm_2014), get_num(47, idx + cm_2014), get_num(48, idx + cm_2014)],
                2015 : [get_num(46, idx + cm_2015), get_num(47, idx + cm_2015), get_num(48, idx + cm_2015)],
            },
        },
        q12a : {
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
