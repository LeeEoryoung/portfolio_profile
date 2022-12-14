$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        paddingTop: '50px',
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['welcome :)', 'profile', 'skills', 'mobile app', 'web site', 'etc'],
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
        bigSectionsDestination: top,
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $('.square .s_red').addClass("active");
                $('.square .s_yellow').addClass("active");
                $('.square .s_blue').addClass("active");
            }
        },
        'onLeave': function (anchorLink, index) {
            if (index == 1) {
                $('.square .s_red').addClass("active");
                $('.square .s_yellow').addClass("active");
                $('.square .s_blue').addClass("active");
            } else if (index == 2) {
                $('.profile .profile_txt').addClass("active");
            } else if (index == 3) {

            } else if (index == 4) {

            }
            if (index != 1) {
                $('.square .s_red').removeClass("active");
                $('.square .s_yellow').removeClass("active");
                $('.square .s_blue').removeClass("active");
            }
            if (index != 2) {
                $('.profile .profile_txt').removeClass("active");
            }

        }
    });
});
