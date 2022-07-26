window.onload = function () {
  var source_box = document.getElementById("source");
  var result_box = document.getElementById("result");
  var button = document.getElementById("submit");

  button.onclick = function () {
    var source = source_box.value.split("\n");

    result_box.value = "";

    source.forEach((text) => {
      var index = text.indexOf(":");
      var key = text.substr(0, index);
      var value = text.substr(index + 2, 9999).replaceAll(/"/gi, '\\"');

      result_box.value += '"' + key + '": "' + value + '",\n';
    });
  };
};