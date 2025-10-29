/*
    Objects
    -------
    An object is a collection ok key-value pairs

    eg-
    ---
    let person = {
        name: "Sudheer",
        age: 35,
        city: "Hyderabad"
    }

    Nested objects
    --------------
    let person = {
        name: "Sudheer",
        age: 35,
        details: {
            city: "Hyderabad",
            state: "Telangana",
            pincode: 500045
        }
    }

    Object with functions
    ---------------------
    let person = {
        name: "Sudheer",
        greet: function(){
            return "Hello " + this.name;
        }
    }
    console.log(person.greet());




    Object.keys() - returns array of keys

    Object.values() - returns array of values

    Object.entries() - returns array of key and value pairs



    Combining objects
    -----------------
    let obj1 = {a: 1};
    let obj2 = {b: 2};
    let merged = Object.assign({}, obj1, obj2);
    console.log(merged);
*/