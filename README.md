# Chaotic Bond - A Stormlight Archive Inspired Message Generator

This project is a simple command-line message generator inspired by Brandon Sanderson's "The Stormlight Archive" series. Each time you run the script, you'll be randomly bonded with a spren, assigned to an Order of Knights Radiant, and reminded of the First Ideal.

## Description

In the world of Roshar, spren are sentient manifestations of concepts and emotions. Some spren can form a Nahel bond with a human, granting them Surgebinding abilities and making them a Knight Radiant.

This script simulates that bonding process by randomly selecting:

*   A type of spren to bond with.
*   An Order of Knights Radiant to join.

It will then display your new bond and the First Ideal of the Knights Radiant.

## Installation

1.  Clone this repository to your local machine:
    ```bash
    git clone https://github.com/fern-d3v/mixed-messages.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd mixed-messages
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To run the script and receive your chaotic bond, simply run the following command in your terminal:

```bash
node chaoticBond.js
```

### Example Output

```
Retribution approaches...
You have bonded a honorspren.
This makes you a member of the Windrunner Order of Knights Radiant.
Life before death, Strength before weakness, Journey before destination
```

## Technologies Used

*   Node.js
*   [chalk](https://www.npmjs.com/package/chalk) - for styling the terminal output.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
