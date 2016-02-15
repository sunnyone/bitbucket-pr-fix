$('.aui-sidebar').width('400px');
$('.aui-sidebar-wrapper').width('400px');
$('.aui-page-panel').css('padding-left', '400px');
$('ul.commit-files-summary').clone().appendTo('.aui-sidebar-body');
$('ul.commit-files-summary li:odd').css('background-color', '#e6e6e6');
$('.aui-sidebar .commit-files-summary--filename').each(function() { $(this).text($(this).text().replace(/src\/.*?\/java\/com\/.*?\//, '.../')) });
