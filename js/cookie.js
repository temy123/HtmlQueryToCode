window.onload = (event) => {

    var source_box = document.getElementById("source");
    var result_box = document.getElementById("result");
    var button = document.getElementById("submit");

    button.onclick = function () {
        var source = source_box.value.split("; ");

        result_box.value = "";

        console.log(source);

        source.forEach((text) => {
            var index = text.indexOf("=");
            var key = text.substr(0, index);
            var value = text.substr(index + 1, 9999).replaceAll(/"/gi, '\\"');

            console.log(`key = ${key} value = ${value}`);

            result_box.value += '"' + key + '": "' + value + '",\n';
        });
    };
}