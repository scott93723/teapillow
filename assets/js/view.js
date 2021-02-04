$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

var initLanguage = function (callback) {

    // GET Param
    var getQueryParam = function (param) {
        var found;
        window.location.search.substr(1).split("&").forEach(function (item) {
            if (param == item.split("=")[0]) {
                found = item.split("=")[1];
            }
        });
        return found;
    };

    // Get Browser Lang
    var lang = navigator.language || navigator.userLanguage;
    console.log('Browser Langauge: ' + lang);

    lang = lang.toLowerCase();

    if (lang !== 'zh-tw') {
        lang = 'en';
        console.log('Fall back to: ' + lang);
    }

    var getLang = getQueryParam('lang');
    if (getLang != undefined && (getLang == 'zh-tw' || getLang == 'en')) {
        lang = getLang;
        console.log('Override by GET to: ' + getLang);
    }

    callback(lang);
}

initLanguage(function (CURRENT_LANG) {

    console.log('Init Vue, CURRENT_LANG: ' + CURRENT_LANG);

    var sidebar_section = new Vue({
        el: '#sidebar',
        data: CONTENT[CURRENT_LANG].sidebar
    });

    var footer_section = new Vue({
        el: '#footer',
        data: CONTENT[CURRENT_LANG].sidebar
    });

    var about_me_section = new Vue({
        el: '#about_me',
        data: CONTENT[CURRENT_LANG].about_me
    });

    var my_works_section = new Vue({
        el: '#my_works_section',
        data: CONTENT[CURRENT_LANG].my_works_section
    });

    var what_i_know_section = new Vue({
        el: '#what_i_know',
        data: CONTENT[CURRENT_LANG].what_i_know
    });

    var my_experince_section = new Vue({
        el: '#my_experince_section',
        data: CONTENT[CURRENT_LANG].my_experince_section
    });
});

$(function () {
    // Disable Link
    $(document).on('click', '.disable-link', function (event) {
        event.preventDefault();
    });
    // Switch Lang
    $(document).on('click', '.switch_lang', function (event) {
        location.href = '?lang=' + $(this).data('target');
    });
    // Visit Slides
    // $(document).on('click', '#link_to_slide', function (event) {
    //     location.href = '/slides';
    // });
});