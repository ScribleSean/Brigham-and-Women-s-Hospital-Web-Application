import { Character } from "./Character.ts";

const gabeFrames = [
  "/characterSprites/gabe1.png",
  "/characterSprites/gabe2.png",
  "/characterSprites/gabe3.png",
  "/characterSprites/gabe4.png",
  "/characterSprites/gabe5.png",
  "/characterSprites/gabe6.png",
];
const gabeHead = "/heads/gabeHead.png";
const gabePassive = "Shields spawn at an increased rate";
const gabeRole = "Backend Lead";
const gabeQuote =
  '"I be goofy, kinda funny. Acting stupid but they love me." - Mac Miller';
const gabeBackstory =
  "Dwelling in the most remote corners of campus, away from all civilization, his immune system has become very weak in his pursuit of networking and backend knowledge. It will take a lot to get him sick, but once he is, he'll fall hard.";
const Gabe = new Character(
  "Gabe",
  5,
  1,
  2,
  gabePassive,
  gabeFrames,
  gabeHead,
  gabeRole,
  gabeQuote,
  gabeBackstory,
);

const joseFrames = [
  "/characterSprites/jose1.png",
  "/characterSprites/jose2.png",
  "/characterSprites/jose3.png",
];
const joseHead = "/heads/joseHead.png";
const josePassive = "passive";
const joseRole = "frontend";
const joseQuote = '"Un vaso es un vaso y un plato es un plato" - Mariano Rajoy';
const joseBackstory =
  "Physically detached from everyday interactions, nestled among ancient oak trees and class diagrams, this sage devoted his entire being to the intricate art of map-making. This enlightenment drove him to the brink of madness but also flung wide open the doors of his heart";
const Jose = new Character(
  "Jose",
  3,
  4,
  3,
  josePassive,
  joseFrames,
  joseHead,
  joseRole,
  joseQuote,
  joseBackstory,
);

const christianFrames = [
  "/characterSprites/christian1.png",
  "/characterSprites/christian2.png",
  "/characterSprites/christian3.png",
];
const christianHead = "/heads/christianHead.png";
const christianPassive = "passive";
const christianRole = "frontend";
const christianQuote =
  "There's smoke in my iris. But I painted a sunny day on the insides of my eyelids - Aesop Rock";
const christianBackstory = "backStory";
const Christian = new Character(
  "Christian",
  1,
  5,
  2,
  christianPassive,
  christianFrames,
  christianHead,
  christianRole,
  christianQuote,
  christianBackstory,
);

const sophiaFrames = [
  "/characterSprites/sophia1.png",
  "/characterSprites/sophia2.png",
  "/characterSprites/sophia3.png",
];
const sohpiaHead = "/heads/sophiaHead.png";
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
  sohpiaHead,
  sophiaRole,
  sophiaQuote,
  sophiaBackstory,
);

const timothyFrames = [
  "/characterSprites/timothy1.png",
  "/characterSprites/timothy2.png",
  "/characterSprites/timothy3.png",
  "/characterSprites/timothy4.png",
];
const timothyHead = "/heads/timothyHead.png";
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
  timothyHead,
  timothyRole,
  timothyQuote,
  timothyBackstory,
);

const peterFrames = [
  "/characterSprites/peter1.png",
  "/characterSprites/peter2.png",
  "/characterSprites/peter3.png",
];
const peterHead = "/heads/peterHead.png";
const peterPassive = "passive";
const peterRole = "frontend";
const peterQuote =
  "Real G's move in silence like lasagna -Lil Wayne 6 Foot 7 Foot";
const peterBackstory = "backStory";
const Peter = new Character(
  "Peter",
  3,
  4,
  1,
  peterPassive,
  peterFrames,
  peterHead,
  peterRole,
  peterQuote,
  peterBackstory,
);

const madduxFrames = [
  "/characterSprites/maddux1.png",
  "/characterSprites/maddux2.png",
  "/characterSprites/maddux3.png",
];
const madduxHead = "/heads/madduxHead.png";
const madduxPassive = "passive";
const madduxRole = "frontend";
const madduxQuote =
  "If possible, as far as it depends on you, live at peace with everyone. - Romans";
const madduxBackstory = "backStory";
const Maddux = new Character(
  "Maddux",
  3,
  4,
  4,
  madduxPassive,
  madduxFrames,
  madduxHead,
  madduxRole,
  madduxQuote,
  madduxBackstory,
);

const seanFrames = [
  "/characterSprites/sean1.png",
  "/characterSprites/sean2.png",
  "/characterSprites/sean3.png",
];
const seanHead = "/heads/seanHead.png";
const seanPassive = "passive";
const seanRole = "frontend";
const seanQuote = "I smoked away my brain -A$AP Rocky";
const seanBackstory = "backStory";
const Sean = new Character(
  "Sean",
  3,
  4,
  5,
  seanPassive,
  seanFrames,
  seanHead,
  seanRole,
  seanQuote,
  seanBackstory,
);

const lorenzoFrames = [
  "/characterSprites/lorenzo1.png",
  "/characterSprites/lorenzo2.png",
  "/characterSprites/lorenzo3.png",
  "/characterSprites/lorenzo4.png",
  "/characterSprites/lorenzo5.png",
  "/characterSprites/lorenzo6.png",
  "/characterSprites/lorenzo7.png",
  "/characterSprites/lorenzo8.png",
  "/characterSprites/lorenzo9.png",
  "/characterSprites/lorenzo10.png",
];
const lorenzoHead = "/heads/lorenzoHead.png";
const lorenzoPassive = "passive";
const lorenzoRole = "frontend";
const lorenzoQuote = "quote";
const lorenzoBackstory =
  "Obsessed with immortality, he transferred his brain into an android body, granting him the eternity he sought but at the cost of his humanity. Now only the virus can pass through his mechanical shell and destroy his mind";
const Lorenzo = new Character(
  "Lorenzo",
  3,
  4,
  3,
  lorenzoPassive,
  lorenzoFrames,
  lorenzoHead,
  lorenzoRole,
  lorenzoQuote,
  lorenzoBackstory,
);

const ethanFrames = [
  "/characterSprites/ethan1.png",
  "/characterSprites/ethan2.png",
  "/characterSprites/ethan3.png",
  "/characterSprites/ethan4.png",
];
const ethanHead = "/heads/ethanHead.png";
const ethanPassive = "passive";
const ethanRole = "frontend";
const ethanQuote =
  "And such were some of you: but ye are washed, but ye are sanctified, but ye are justified in the name of the Lord Jesus, and by the Spirit of our God. - 1 Corinthians 6:11";
const ethanBackstory = "backStory";
const Ethan = new Character(
  "Ethan",
  3,
  4,
  4,
  ethanPassive,
  ethanFrames,
  ethanHead,
  ethanRole,
  ethanQuote,
  ethanBackstory,
);

const wongFrames = [
  "/characterSprites/wong1.png",
  "/characterSprites/wong2.png",
  "/characterSprites/wong3.png",
  "/characterSprites/wong4.png",
  "/characterSprites/wong5.png",
];
const wongHead = "/heads/wongHead.png";
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
  wongHead,
  wongRole,
  wongQuote,
  wongBackstory,
);

const josephFrames = [
  "/characterSprites/joseph1.png",
  "/characterSprites/joseph2.png",
  "/characterSprites/joseph3.png",
];
const josephHead = "/heads/josephHead.png";
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
  josephHead,
  josephRole,
  josephQuote,
  josephBackstory,
);

const gusFrames = ["/characterSprites/gus1.png", "/characterSprites/gus2.png"];
const gusHead = "/heads/gusHead.png";
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
  gusHead,
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
