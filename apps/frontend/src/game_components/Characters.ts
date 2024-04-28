import { Character } from "./Character.ts";

const gabeFrames = ["/gabe1", "/gabe2", "/gabe3"];
const gabePassive = "passive";
const gabeRole = "frontend";
const gabeQuote = "quote";
const gabeBackstory = "backStory";
const Gabe = new Character(
  "Gabe",
  3,
  4,
  4,
  gabePassive,
  gabeFrames,
  gabeRole,
  gabeQuote,
  gabeBackstory,
);

const joseFrames = ["/jose1.png", "/jose2", "/jose3"];
const josePassive = "passive";
const joseRole = "frontend";
const joseQuote = "quote";
const joseBackstory = "backStory";
const Jose = new Character(
  "Jose",
  3,
  4,
  3,
  josePassive,
  joseFrames,
  joseRole,
  joseQuote,
  joseBackstory,
);

const christianFrames = ["/heart4.png", "/christian2", "/christian3"];
const christianPassive = "passive";
const christianRole = "frontend";
const christianQuote = "quote";
const christianBackstory = "backStory";
const Christian = new Character(
  "Christian",
  1,
  5,
  2,
  christianPassive,
  christianFrames,
  christianRole,
  christianQuote,
  christianBackstory,
);

const sophiaFrames = ["/greenDisease1.png", "/sophia2", "/sophia3"];
const sophiaPassive = "passive";
const sophiaRole = "frontend";
const sophiaQuote = "quote";
const sophiaBackstory = "backStory";
const Sophia = new Character(
  "Sophia",
  3,
  4,
  2,
  sophiaPassive,
  sophiaFrames,
  sophiaRole,
  sophiaQuote,
  sophiaBackstory,
);

const timothyFrames = ["/timothy1", "/timothy2", "/timothy3"];
const timothyPassive = "passive";
const timothyRole = "frontend";
const timothyQuote = "quote";
const timothyBackstory = "backStory";
const Timothy = new Character(
  "Timothy",
  3,
  4,
  3,
  timothyPassive,
  timothyFrames,
  timothyRole,
  timothyQuote,
  timothyBackstory,
);

const peterFrames = ["/pinkDisease1.png", "/peter2", "/peter3"];
const peterPassive = "passive";
const peterRole = "frontend";
const peterQuote = "quote";
const peterBackstory = "backStory";
const Peter = new Character(
  "Peter",
  3,
  4,
  1,
  peterPassive,
  peterFrames,
  peterRole,
  peterQuote,
  peterBackstory,
);

const madduxFrames = ["/redDisease1.png", "/maddux2", "/maddux3"];
const madduxPassive = "passive";
const madduxRole = "frontend";
const madduxQuote = "quote";
const madduxBackstory = "backStory";
const Maddux = new Character(
  "Maddux",
  3,
  4,
  4,
  madduxPassive,
  madduxFrames,
  madduxRole,
  madduxQuote,
  madduxBackstory,
);

const seanFrames = ["/sean1", "/sean2", "/sean3"];
const seanPassive = "passive";
const seanRole = "frontend";
const seanQuote = "quote";
const seanBackstory = "backStory";
const Sean = new Character(
  "Sean",
  3,
  4,
  5,
  seanPassive,
  seanFrames,
  seanRole,
  seanQuote,
  seanBackstory,
);

const lorenzoFrames = ["/lorenzo1", "/lorenzo2", "/lorenzo3"];
const lorenzoPassive = "passive";
const lorenzoRole = "frontend";
const lorenzoQuote = "quote";
const lorenzoBackstory = "backStory";
const Lorenzo = new Character(
  "Lorenzo",
  3,
  4,
  3,
  lorenzoPassive,
  lorenzoFrames,
  lorenzoRole,
  lorenzoQuote,
  lorenzoBackstory,
);

const ethanFrames = ["/ethan1", "/ethan2", "/ethan3"];
const ethanPassive = "passive";
const ethanRole = "frontend";
const ethanQuote = "quote";
const ethanBackstory = "backStory";
const Ethan = new Character(
  "Ethan",
  3,
  4,
  4,
  ethanPassive,
  ethanFrames,
  ethanRole,
  ethanQuote,
  ethanBackstory,
);

const wongFrames = ["/wong1", "/wong2", "/wong3"];
const wongPassive = "passive";
const wongRole = "frontend";
const wongQuote = "quote";
const wongBackstory = "backStory";
const Wong = new Character(
  "Wong",
  3,
  4,
  3,
  wongPassive,
  wongFrames,
  wongRole,
  wongQuote,
  wongBackstory,
);

const josephFrames = ["/joseph1", "/joseph2", "/joseph3"];
const josephPassive = "passive";
const josephRole = "frontend";
const josephQuote = "quote";
const josephBackstory = "backStory";
const Joseph = new Character(
  "Joseph",
  3,
  4,
  3,
  josephPassive,
  josephFrames,
  josephRole,
  josephQuote,
  josephBackstory,
);

const gusFrames = ["/gus1", "/gus2", "/gus3"];
const gusPassive = "passive";
const gusRole = "frontend";
const gusQuote = "quote";
const gusBackstory = "backStory";
const Gus = new Character(
  "Gus",
  3,
  4,
  2,
  gusPassive,
  gusFrames,
  gusRole,
  gusQuote,
  gusBackstory,
);

export const allCharacters = [
  Gabe,
  Jose,
  Christian,
  Sophia,
  Timothy,
  Peter,
  Maddux,
  Sean,
  Lorenzo,
  Ethan,
  Wong,
  Joseph,
  Gus,
];

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
  Gus = 12,
}
