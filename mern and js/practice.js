// assignment: 
// create a array to store the companies that you have worked for and print the array using for-of loop.

let companies = ["company1", "company2", "company3", "company4", "company5"];
for (let company of companies) {
    console.log(company);
}
console.log(companies);


companies.push("company6"); // this will add company6 to the end of the array
console.log(companies);

companies.unshift("company0"); // this will add company0 to the beginning of the array
console.log(companies);

companies.pop(); // this will remove the last element of the array
console.log(companies);

companies.shift(); // this will remove the first element of the array
console.log(companies);

companies.splice(1, 1, "company7"); // this will remove the second element of the array
console.log(companies);
