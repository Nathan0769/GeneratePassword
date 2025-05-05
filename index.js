import { prompt } from "./prompt.js";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SPECIALS = "!@#$%^&*()";
const NUMBERS = "0123456789";

const askLength = () => {
  const length = Number(prompt("🔢 Combien de caractères ? (8-36) : "));
  if (length < 8 || length > 36) {
    throw new Error("Merci de mettre une longueur comprise entre 8 et 36");
  }
  return length;
};

const askSpecialChars = () => {
  const caracteresSpeciaux = prompt("🔣 Caractères spéciaux ? (y/n) : ");
  if (
    caracteresSpeciaux.toLowerCase() !== "y" &&
    caracteresSpeciaux.toLowerCase() !== "n"
  ) {
    throw new Error("Merci de répondre par y ou n");
  }
  return caracteresSpeciaux;
};

const askNumbers = () => {
  const chiffre = prompt("🔢 Chiffres ? (y/n) : ");
  if (chiffre.toLowerCase() !== "y" && chiffre.toLowerCase() !== "n") {
    throw new Error("Merci de répondre par y ou n");
  }
  return chiffre;
};

const askUppercase = () => {
  const maj = prompt("⬆️  Majuscules ? (y/n) : ");
  if (maj.toLowerCase() !== "y" && maj.toLowerCase() !== "n") {
    throw new Error("Merci de répondre par y ou n");
  }
  return maj;
};

const generatePassword = (lengthP, specialCharsP, numberP, upperCaseP) => {
  let password = "";
  let charPassword = LOWERCASE;

  if (specialCharsP === "y") {
    charPassword += SPECIALS;
  }

  if (numberP === "y") {
    charPassword += NUMBERS;
  }

  if (upperCaseP === "y") {
    charPassword += UPPERCASE;
  }

  for (let i = 0; i < lengthP; i++) {
    password += charPassword.charAt(
      Math.floor(Math.random() * charPassword.length)
    );
  }

  if (!password.match(/[A-Z]/) && upperCaseP === "y") {
    return generatePassword(lengthP, specialCharsP, numberP, upperCaseP);
  }

  return password;
};

const main = () => {
  let length;
  let specialChars;
  let number;
  let upperCase;

  while (!length || !specialChars || !number || !upperCase) {
    try {
      if (!length) {
        length = askLength();
      }
      if (!specialChars) {
        specialChars = askSpecialChars();
      }
      if (!number) {
        number = askNumbers();
      }
      if (!upperCase) {
        upperCase = askUppercase();
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const password = generatePassword(length, specialChars, number, upperCase);

  console.log(`Votre mot de passe est : ${password} `);
};

main();
