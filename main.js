let user = {
    name: "fatimah",
    email: "fatimah@gmail.com",
    id : 201910051,
    Available: true , 
    cheek : function()
    {
if( this.Available == true) {
    console.log ("yes")
} else {
    console.log ("no")
}
    },
    Address :{
      city :{
        city1: "jazan",
        city2: "Abha",
        city3: "Riyadh",
      },
      Street: 318,
      PostalCode : 1818
    } ,
    skils : ["team-work", "MOP", "Writter"],
}
console.log(user);
console.log(user.name);
user.id = 201911420;
console.log(user.id);
console.log(user);
delete user.email;
console.log(user);
console.log(user.Address);
console.log(user.Address.city);
console.log(user.skils[2]);
user.cheek();
user.Available= false;
user.cheek();
console.log("" + user.skils);





