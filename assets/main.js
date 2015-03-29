(function() {
  var d, h, m, s, color;
  function colorDrawer() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    if (h <= 9)
      h = '0' + h;
    if (m <= 9)
      m = '0' + m;
    if (s <= 9)
      s = '0' + s;

    color = '#' + h + m + s;
    document.getElementById("polygon").style.background = color;

    setTimeout(colorDrawer, 1000);
  }
  setTimeout(colorDrawer, 1000 - new Date().getMilliseconds());
})();
