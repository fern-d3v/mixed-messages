console.log(`
    ░██████  ░██                                 ░██    ░██              ░████████                                ░██ 
 ░██   ░██ ░██                                 ░██                     ░██    ░██                               ░██ 
░██        ░████████   ░██████    ░███████  ░████████ ░██ ░███████     ░██    ░██   ░███████  ░████████   ░████████ 
░██        ░██    ░██       ░██  ░██    ░██    ░██    ░██░██    ░██    ░████████   ░██    ░██ ░██    ░██ ░██    ░██ 
░██        ░██    ░██  ░███████  ░██    ░██    ░██    ░██░██           ░██     ░██ ░██    ░██ ░██    ░██ ░██    ░██ 
 ░██   ░██ ░██    ░██ ░██   ░██  ░██    ░██    ░██    ░██░██    ░██    ░██     ░██ ░██    ░██ ░██    ░██ ░██   ░███ 
    ░██████  ░██    ░██  ░█████░██  ░███████      ░████ ░██ ░███████     ░█████████   ░███████  ░██    ░██  ░█████░██ 
`);

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

    radiantOrder: ["bondsmith", 
                   "truthwatcher", 
                   "lightweaver", 
                   "elsecaller", 
                   "edgedancer", 
                   "dustbringer", 
                   "skybreaker", 
                   "windrunner"],

    radiantOath: ['Life before death', 
                   'Strength before weakness', 
                   'Journey before destination']
};

// Store newRadiant array
let newRadiant = [];

// Iterate over each property in the radiantBond object
for (let prop in radiantBond) {
    let randomIndex = generateRandomNumber(radiantBond[prop].length);
    switch (prop) {
        case 'sprenType':
            newRadiant.push(`You have bonded a "${radiantBond[prop][randomIndex]}".`);
            break;
        case 'radiantOrder':
            newRadiant.push(`This makes you a member of the "${radiantBond[prop][randomIndex]}" Order of Knights Radiant.`);
            break;
        case 'radiantOath':
            newRadiant.push(`Speak the immortal words once forgotten by the tongues of men: "${radiantBond[prop][randomIndex]}".`);
            break;
        default:
            break;
    }
};

console.log("Retribution approaches...")

const formatRadiant = (radiant) => {
    const formatted = radiant.join('\n');
    console.log(formatted);
};

formatRadiant( newRadiant);

console.log(`
    <==|==========> <><><><><><><><><><><><><><> <==========|==>
    `)
