var collapseElementList = [].slice.call(document.querySelectorAll('.collapse1'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})
$('#collapseExample2').on('show.bs.collapse', function () {
  alert();
});