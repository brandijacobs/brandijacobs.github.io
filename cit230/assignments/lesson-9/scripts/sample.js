var person = { 
    "name" : "Brother Thayne",
    "location" : "Reaxburg, ID"
};
console.log(person.name);
document.write(person.location);

// ------ Town Data ------
var townData = {
    // Paste town date
};

// can do, but not good practice
// this or create placeholders line on line 34
for (var i = 0; i < townData.length; i++) {
    // two different approaches, choose
    if (townData.towns[i].name === 'Soda Spring') {
        document.write('<h1>' + townData.towns[i].name +'</h1>');

        // must do the same for image
        var imgSodaSprings = document.createElement('img');
        imgSodaSprings.setAttribute("src", "images/");
        document.body.appendChild(imgSodaSprings);
    }
    if (i === 0 || i === 2 | i === 3 || i === 6) {
        continue;
    }

    document.write('<h1>' + townData.towns[1].name);
}

// Change values for aspects you want
document.getElementById("townName1").innerHTML = townData.towns[1].name;
document.getElementById("population1").innerHTML += townData.towns[1].currentPopulation;
document.write(townData.towns[0].events[1]);

// the easiest approach will be to add all the placeholders statically, and then add unknown elements through JSON