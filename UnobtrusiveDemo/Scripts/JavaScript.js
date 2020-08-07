(function () {
    $.validator.unobtrusive.adapters.addSingleVal("maximumfilesize", "size");
    $.validator.addMethod('maximumfilesize', function (value, element, maxSize) {
        return element.files[0].size <= parseFloat(maxSize);
    });
})();
