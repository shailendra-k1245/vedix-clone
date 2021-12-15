let age;
let gender;
let skin_concerns;
let divItems;

var getAge = (e,item) => {
    // console.log(e);
    divItems = document.getElementsByClassName("agediv");
    this.clear();
    item.style.backgroundColor = '#E78471';
    
    age = e;
    console.log(age);
}

var clear = () => {
    for(var i=0; i < divItems.length; i++) {
        var item = divItems[i];
        item.style.backgroundColor = 'white';
    }
}


var getGender = (e,item) => {
    divItems = document.getElementsByClassName("genderdiv");
    this.clear();
    item.style.backgroundColor = '#E78471';
    
    gender = e;
    console.log(gender);
}

var getSkinConcerns = (e,item) => {
    divItems = document.getElementsByClassName("skindiv");
    this.clear();
    item.style.backgroundColor = '#E78471';
    
    skin_concerns = e;
    console.log(skin_concerns);
}

var getData = () => {

    let name = document.getElementById('name').value;
    // console.log(name);

    let details = {
        name,
        age,
        gender,
        skin_concerns,
    }

    console.log(details);
}


