/*
    forEach() - it on;ly do operations but don't give any resukts back
    ---------
    let fruits = ["apple", "banana", "mango", "avacado"]; indexed array
    fruits.forEach((f) => {
        console.log(fruit);
    });

    let persons = [
        {name: "sudheer", age: 35},
        {name: "kumar", age: 20},
        {name: "chowdary", age: 30}
    ];
    persons.forEach((val, i) => {
        console.log("This is index " +i+ ", This is value "+ val.name);
    });

    map() - it will do operations and return the results
    -----
    let result = persons.map(n => n.name.toUpperCase());

    filter() - it will filter the input based on the given condition and return the final output
    --------
    let fResult = persons.filter(p => p.age > 20);

    reduce() - it will combine all the values and give single final result
    --------
    let rResult = persons.reduce((sum, acc) => sum + acc.age, 0);

    find() - it will give first value only if the condition is true
    ------
    let result = persons.find(p => p.age > 20);

    findIndex() - it will give first value index only if the condition is true
    let result = persons.findIndex(p => p.age > 20);

    Object.entries() - Converts object into array
    ----------------
    let student = { name: "Sudheer", age: 30 };
    let array = Object.entries(student);

    Object.fromEntries() - Converts array into object
    --------------------
    let obj = Object.entries(array);

    Combination of filter and map
    -----------------------------
    let students = [
        { name: "Ravi", marks: 45 },
        { name: "Sudheer", marks: 72 },
        { name: "Kiran", marks: 88 },
        { name: "Manoj", marks: 33 }
    ];

    let result = students
                .filter(s => s.marks > 45)
                .map(s => s.name.toLowerCase());
*/