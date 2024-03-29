let lectures = [
    "1_intro",
    "2_datatypes_expressions_variables",
    "3_conditionals",
    "4_functions",
    "x_unit_tests",
    "5_loops",
    "6_lists",
    "7_sequences",
    "8_references",
    "9_advanced_lists",
    "x_exceptions",
    "10_dictionaries_sets",
    "x_modules",
    "11_classes",
    "12_file_io",
    "13_class_design",
    "14_sorting",
    "15_regexes",
    "16_recursion",
    "17_requests"
];

(function() {
    const container = document.getElementById("container");
    for(const name of lectures) {
        let content = "<div class='row'><div class='col-5'>Lecture: " + name + "</div>" +
            "<div class='col-2'><a href='" + name + ".html'>HTML</a></div>" +
            "<div class='col-2'><a href='" + name + ".slides.html'>HTML slides</a></div>" +
            "<div class='col-3'><a href='https://colab.research.google.com/github/brandeis-jdelfino/cosi-10a/blob/main/lectures/notebooks/" + name + ".ipynb'>Interactive slides on Google Colab</a></div>" +
            "</div>";
        container.insertAdjacentHTML( 'beforeend', content);
    }
})();