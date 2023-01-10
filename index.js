// 1.When a user enters node index.js in the command line, a block of approximately 31x9 # characters colored with a random color (using hex code, e.g. #ff0000) should be generated.

// 2.it should also be able to accept the request for a:
// hue (e.g. green or red or blue)
// luminosity (e.g. light or dark)
// ...and then generate random colors that match those choices.

// 3.If a user types "ask" instead of a color name, print questions to ask the user for the name of the color and the luminosity

// 4. If a user types a size in the format of WWxHH (eg. 31x9) before the color and luminosity, it will use this as the size of the box

import chalk from 'chalk';
import randomColor from 'randomcolor';

const lum = process.argv[3];
const col = process.argv[2];

const color = randomColor({
  luminosity: lum,
  hue: col,
});
function colorAndLog(str) {
  console.log(chalk.hex(color).bold(str));
}
colorAndLog(`##############################
##############################
##############################
########              ########
########   ${color}    ########
########              ########
##############################
##############################
##############################`);
