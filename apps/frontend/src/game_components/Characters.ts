import {Character} from "./Character.ts";

const gabeFrames = ["/gabe1", "/gabe2", "/gabe3"];
const gabePassive = "passive";
const Gabe = new Character("Gabe", 3, 4, {width: 80, height: 40}, gabePassive, gabeFrames);

const joseFrames = ["/jose1", "/jose2", "/jose3"];
const josePassive = "passive";
const Jose = new Character("Jose", 3, 4, {width: 80, height: 40}, josePassive, joseFrames);

const christianFrames = ["/christian1", "/christian2", "/christian3"];
const christianPassive = "passive";
const Christian = new Character("Christian", 1, 5, {width: 25, height: 40}, christianPassive, christianFrames);

const sophiaFrames = ["/sophia1", "/sophia2", "/sophia3"];
const sophiaPassive = "passive";
const Sophia = new Character("Sophia", 3, 4, {width: 80, height: 40}, sophiaPassive, sophiaFrames);

const timothyFrames = ["/timothy1", "/timothy2", "/timothy3"];
const timothyPassive = "passive";
const Timothy = new Character("Timothy", 3, 4, {width: 80, height: 40}, timothyPassive, timothyFrames);

const peterFrames = ["/peter1", "/peter2", "/peter3"];
const peterPassive = "passive";
const Peter = new Character("Peter", 3, 4, {width: 80, height: 40}, peterPassive, peterFrames);

const madduxFrames = ["/maddux1", "/maddux2", "/maddux3"];
const madduxPassive = "passive";
const Maddux = new Character("Maddux", 3, 4, {width: 80, height: 40}, madduxPassive, madduxFrames);

const seanFrames = ["/sean1", "/sean2", "/sean3"];
const seanPassive = "passive";
const Sean = new Character("Sean", 3, 4, {width: 80, height: 40}, seanPassive, seanFrames);

const lorenzoFrames = ["/lorenzo1", "/lorenzo2", "/lorenzo3"];
const lorenzoPassive = "passive";
const Lorenzo = new Character("Lorenzo", 3, 4, {width: 80, height: 40}, lorenzoPassive, lorenzoFrames);

const ethanFrames = ["/ethan1", "/ethan2", "/ethan3"];
const ethanPassive = "passive";
const Ethan = new Character("Ethan", 3, 4, {width: 80, height: 40}, ethanPassive, ethanFrames);

const wongFrames = ["/wong1", "/wong2", "/wong3"];
const wongPassive = "passive";
const Wong = new Character("Wong", 3, 4, {width: 80, height: 40}, wongPassive, wongFrames);

const josephFrames = ["/joseph1", "/joseph2", "/joseph3"];
const josephPassive = "passive";
const Joseph = new Character("Joseph", 3, 4, {width: 80, height: 40}, josephPassive, josephFrames);

const gusFrames = ["/gus1", "/gus2", "/gus3"];
const gusPassive = "passive";
const Gus = new Character("Gus", 3, 4, {width: 80, height: 40}, gusPassive, gusFrames);

export const allCharacters = [Gabe, Jose, Christian, Sophia, Timothy, Peter, Maddux, Sean, Lorenzo, Ethan, Wong, Joseph, Gus];

export enum Characters {
    Gabe = 0,
    Jose = 1,
    Christian = 2,
    Sophia = 3,
    Timothy = 4,
    Peter = 5,
    Maddux = 6,
    Sean = 7,
    Lorenzo = 8,
    Ethan = 9,
    Wong = 10,
    Joseph = 11,
    Gus = 12
};


