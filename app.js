/*import inquirer from "inquirer"
import chalk from "chalk";

console.log(chalk.greenBright("<<<<Welcome TO GIAIC Student Portal"));

const randomNumber: number = Math.floor(500000 - Math.random () *400000)


let myBalance:number=20000;

 let answers= await inquirer.prompt([
    {
        type:"input",
        name:"name",
        message:"Enter your name"
    },
    {
        type:"list",
        name:"course",
        message:"Select your course",
        choices:["Gen AI","Web 3","Cyber Security","Metaverse","Block Chain"]
    },
])

const coursesFees: {
    [key: string]: number;
  } = {
    "Gen AI": 5000,
    "Web 3": 7000,
    "Cyber Security": 10000,
    "Metaverse": 3000,
    "Block Chain": 5000,
  };
  
  console.log (`\n Course fees ${coursesFees [answers.courses]}/-`);
  console.log(chalk.greenBright(`\n You Are Selected In  ${chalk.blueBright (answers.courses)} Course  And your Balance is ${chalk.yellow ((myBalance-coursesFees[answers.courses]).toFixed(2))}\n`));

  let paymentType=await inquirer.prompt([
    {
        type:"list",
        name:"paymentType",
        message:"Select your payment type",
        choices:["Easy paisa","Jazz Cash","Bank Transfer"]
    },
    {
        name:"amount",
        message:"Enter your amount",
        type:"input",
        validate:function(value){
            if(isNaN(Number(value))){
                return true
            }
            return "Please Enter Cousre Amount"
            
        }
        
    }
  ])
  console.log(chalk.greenBright(`\n Your Payment Method is ${chalk.blueBright (paymentType.paymentType)} And your Amount is ${chalk.yellow (paymentType.amount)}\n`));

  const feesOfCourses =coursesFees[answers.course]
  const paymentAmount = parseFloat(paymentType.amount)

  if (feesOfCourses === paymentAmount) {
    console.log (`\n Congratulations , you have successfully enrolled ${chalk.blueBright (answers.course)}\n`);
}

else {
    console.log(chalk.bold ("\nSorry! Invalid amount due to course"));
 }
 let Ans = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View your proper identity card" , "Exit"],
    },

])

// Generate student proper identity card
if (Ans.select === "View your proper identity card") {
    console.log(`Your Name: ${chalk.yellowBright (answers.students)}`);
    console.log(`Your ID: ${chalk.yellowBright (randomNumber)}`);
    console.log(`Course: ${chalk.yellowBright (answers.courses)}`);
    console.log(`Course fees paid: ${chalk.yellowBright (paymentAmount)}`);
    console.log(`Your balance: ${chalk.yellowBright (myBalance += paymentAmount)}`);
}

// When the student click on Exit then print this messege
else {
        console.log("\n Exiting Governer Sindh IT initiative  students managments portal");
};

console.log(chalk.bold.blueBright ("\n\t\t KEEP WORKING HARD,HARD WORKS PAYS OFF"));*/
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright("<<<<Welcome TO GIAIC Student Portal"));
const randomNumber = Math.floor(500000 - Math.random() * 400000);
let myBalance = 20000;
let answers = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name"
    },
    {
        type: "list",
        name: "course",
        message: "Select your course",
        choices: ["Gen AI", "Web 3", "Cyber Security", "Metaverse", "Block Chain"]
    }
]);
const coursesFees = {
    "Gen AI": 5000,
    "Web 3": 7000,
    "Cyber Security": 10000,
    "Metaverse": 3000,
    "Block Chain": 5000
};
console.log(`\n Course fees ${coursesFees[answers.course]}/-`);
console.log(chalk.greenBright(`\n You Are Selected In  ${chalk.blueBright(answers.course)} Course  And your Balance is ${chalk.yellow((myBalance - coursesFees[answers.course]).toFixed(2))}\n`));
let paymentType = await inquirer.prompt([
    {
        type: "list",
        name: "paymentType",
        message: "Select your payment type",
        choices: ["Easy paisa", "Jazz Cash", "Bank Transfer"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "input",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter Course Amount";
        }
    }
]);
console.log(`\n Your Payment Method is ${chalk.blueBright(paymentType.paymentType)} And your Amount is ${chalk.yellow(paymentType.amount)}\n`);
const feesOfCourses = coursesFees[answers.course];
const paymentAmount = parseFloat(paymentType.amount);
if (feesOfCourses === paymentAmount) {
    console.log(`\n Congratulations , you have successfully enrolled ${chalk.blueBright(answers.course)}\n`);
}
else {
    console.log(`\nSorry! Invalid amount due to course`);
}
let Ans = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View your proper identity card", "Exit"]
    }
]);
// Generate student proper identity card
if (Ans.select === "View your proper identity card") {
    console.log(`Your Name: ${chalk.yellowBright(answers.name)}`);
    console.log(`Your ID: ${chalk.yellowBright(randomNumber)}`);
    console.log(`Course: ${chalk.yellowBright(answers.course)}`);
    console.log(`Course fees paid: ${chalk.yellowBright(paymentAmount)}`);
    console.log(`Your balance: ${chalk.yellowBright(myBalance += paymentAmount)}`);
}
// When the student click on Exit then print this messege
else {
    console.log("\n Exiting Governer Sindh IT initiative  students managements portal");
}
console.log(chalk.bold.blueBright("\n\t\t KEEP WORKING HARD,HARD WORKS PAYS OFF"));
