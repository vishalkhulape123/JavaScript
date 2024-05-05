const accountId = 1234;
let mailId = "vishalkhulape@gmail.com";
var password = "12345";
city = "Pune";

//accountId = 567890;  // for const datatype redeclaration or re-assignment is not allowed

mailId = "Vishal@gmail.com";

password = "xxxyyyzzz";

city = "Solapur";


// console.log(accountId);
// console.log(mailId);
// console.log(password);
// console.log(city);

console.table([accountId, mailId,password,city]);

/*
    prefere not to use var because block and functioanl scope issue 
*/