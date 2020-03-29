//Question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

//Question 2
const heading = document.querySelector("h3");


//Question 3
heading.style.fontSize = "2em";


//Question 4
heading.classList.add("subheading");


//Question 5
var paragraphs = document.querySelector("p");


//Question 6
var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

//Question 7
function myFunction(catArray) {
    for (var i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}
const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21 '
    }
];

myFunction(cats);

//Question 8
function myFunction(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log("<h5>" + catArray[i].name + "</h5>");
    }
}
const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

myFunction(cats);

//Question 9
function myFunction(catArray) {
    const cats = [{
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
    return resultsContainer;

}

//Question 10

function myFunction(catArray) {
    let myCats = "";
    for (let i = 0; i < cats.length; i++) {
        myCats += "<div>\n<h5>" + cats[i].name + "</h5>\n<p>" + ((cats[i].age) ? cats[i].age : "Age unknown") + "</p>\n</div>\n";

    }
}