
function replaceSidebar() {
  $('.aui-sidebar').width('400px');
  $('.aui-sidebar-wrapper').width('400px');
  $('.aui-page-panel').css('padding-left', '400px');
  $('ul.commit-files-summary').clone().appendTo('.aui-sidebar-body');
  $('ul.commit-files-summary li:odd').css('background-color', '#e6e6e6');
  $('.aui-sidebar .commit-files-summary--filename').each(function() { $(this).text($(this).text().replace(/src\/.*?\/java\/com\/.*?\//, '.../')) });
}

function translateProperties() {
  var diffs = [];

  $("h1.filename").each(function() {
    var elem = this;
    if (elem.innerText.search(/\.properties/) < 0) {
      return;
    }
    var container = $(elem).parents(".diff-container");
    diffs.push(container);
  });

  diffs.forEach(function (diff) {
    $(diff).find("pre.source").each (function() {
      var elem = this;
      var origText = elem.textContent;
      var newText = origText.replace(/\\u([0-9A-Z]{4})/g, function (match, p1) {
        var c = Number.parseInt(p1, 16);
        return String.fromCodePoint(c);
      });
      elem.textContent = newText;
    });
  });
}

translateProperties();
replaceSidebar();
