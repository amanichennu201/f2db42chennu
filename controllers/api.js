exports.api = function (req, res) {
    res.write('[');
    res.write('{"resource":"Bags", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
};