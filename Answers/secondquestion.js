//Objects that store the record of the the five students

const student1 = {
    full_name: "Khabib Shrestha ",
    Address:{
        Permanent: "Dagestan, Russia",
        Temporary: "Mid-Baneshwor, Kathmandu",
    },
    Phone_Number:{
        Mobile: "9860504398",
        Home: "5576844",
    },
    Email: "khabib@gmail.com",
}

const student2 = {
    full_name: "Manny Poudel",
    Address:{
        Permanent: "General Santos, Philippines",
    },
    Phone_Number:{
        Mobile: "9801244554",
    },
    Email: "manny@yahoo.com",
}

const student3 = {
    full_name: "Connor Maharjan",
    Address:{
        Permanent: "null",
        Temporary: "Khasibazar, Kathmandu",
    },
    Phone_Number:{
        Home: " 5564990 ",
    },
    Email: "connor@hotmail.com",
}

const student4 = {
    full_name: "Buakaw Rajbanshi ",
    Address:{
        Permanent: "Pattaya, Thailand",       
        Temporary: "Pepsicola, Bhaktapur",
    },
    Phone_Number:{
        Mobile: " 9841546433",
        Home: " 4428767",
    },
    Email: "r.buakaw@gmai.com",
}

const student5 = {
    full_name:"Paddy Pahadi",
    Address:{
        Temporary: "Mid-Thimi, Bhaktapur",
    },
    Phone_Number:{
        Home: "4456477",
    },
    Email: "paddy@protonmail.ch",
}

//To print the required details in the console screen

console.log("Khabib’s home phone number: ", student1.Phone_Number.Home);
console.log("Manny’s Permanent address: ", student2.Address.Permanent);
console.log("Connor’s temporary address: ", student3.Address.Temporary);
console.log("Buakaw’s Temporary address: ", student4.Address.Temporary);
console.log("Buakaw's Email: ", student4.Email);
console.log("Paddy's Permanent Address: ", student5.Address.Permanent);
console.log("Connor's Permanent Address: ", student3.Address.Permanent);


