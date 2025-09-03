#!/usr/bin/env node
import chalk from 'chalk';


console.log(chalk.whiteBright(`
           ░██████  ░██                                 ░██    ░██              
          ░██   ░██ ░██                                 ░██                     
         ░██        ░████████   ░██████    ░███████  ░████████ ░██ ░███████     
         ░██        ░██    ░██       ░██  ░██    ░██    ░██    ░██░██    ░██    
         ░██        ░██    ░██  ░███████  ░██    ░██    ░██    ░██░██           
          ░██   ░██ ░██    ░██ ░██   ░██  ░██    ░██    ░██    ░██░██    ░██    
           ░██████  ░██    ░██  ░█████░██  ░███████      ░████ ░██ ░███████     
                                                                               
     ░██ ░██    ░██ ░██    ░██ ░██    ░██ ░██    ░██ ░██    ░██ ░██    ░██ ░██  
    ░██   ░██  ░██   ░██  ░██   ░██  ░██   ░██  ░██   ░██  ░██   ░██  ░██   ░██ 
   ░██     ░██░██     ░██░██     ░██░██     ░██░██     ░██░██     ░██░██     ░██
    ░██   ░██  ░██   ░██  ░██   ░██  ░██   ░██  ░██   ░██  ░██   ░██  ░██   ░██ 
     ░██ ░██    ░██ ░██    ░██ ░██    ░██ ░██    ░██ ░██    ░██ ░██    ░██ ░██  

                  ░████████                                ░██                  
                  ░██    ░██                               ░██                  
                  ░██    ░██   ░███████  ░████████   ░████████                  
                  ░████████   ░██    ░██ ░██    ░██ ░██    ░██                  
                  ░██     ░██ ░██    ░██ ░██    ░██ ░██    ░██                  
                  ░██     ░██ ░██    ░██ ░██    ░██ ░██   ░███                  
                  ░█████████   ░███████  ░██    ░██  ░█████░██                  
`));

const generateRandomNumber = (num) => {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
};

// Function to hold all of the different arrays
const radiantBond = {
    sprenType: ["honorspren", 
                "highspren", 
                "ashspren", 
                "cryptic", 
                "cultivationspren", 
                "inkspren", 
                "mistspren", 
                "lightspren", 
                "reacher", 
                "stormfather", 
                "sibling"],

    radiantOrder: ["Windrunner",
                   "Skybreaker",
                   "Dustbringer",
                   "Lightweaver",
                   "Edgedancer",
                   "Elsecaller",
                   "Truthwatcher",
                   "Willshaper",
                   "Stoneward",
                   "Bondsmith"],

    radiantOath: ['Life before death, Strength before weakness, Journey before destination']
};

// Store newRadiant array
let newRadiant = [];

// Iterate over each property in the radiantBond object
for (let prop in radiantBond) {
    let randomIndex = generateRandomNumber(radiantBond[prop].length);
    switch (prop) {
        case 'sprenType':
            newRadiant.push(`You have bonded a ${chalk.greenBright(`${radiantBond[prop][randomIndex]}`)}.`);
            break;
        case 'radiantOrder':
            newRadiant.push(`This makes you a member of the ${chalk.cyanBright(`${radiantBond[prop][randomIndex]}`)} Order of Knights Radiant.`);
            break;
        case 'radiantOath':
            newRadiant.push(`${chalk.magenta(`${radiantBond[prop][randomIndex]}`)}`);
            break;
        default:
            break;
    }
};

console.log(chalk.yellowBright("Retribution approaches..."));

// Format the radiant bond information for display
const formatRadiant = (radiant) => {
    const formatted = radiant.join('\n');
    console.log(formatted);
};

// Call the formatRadiant function with the newRadiant array
formatRadiant(newRadiant);

console.log(chalk.blueBright(`
    <==|==========> ${chalk.whiteBright("<><><><><><><><><><><><><><>")} <==========|==>
    `));
