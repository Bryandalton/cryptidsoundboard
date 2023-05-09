const sasquach = {
  name: "Sasquach",
  image: "./images/bigfoot.JPG",
  sounds: ["rawr", "grr", "whoop", "reasonable", "fart", "hungry"],
  theme: "green",
  buttons: [
    {
      label: "Rawr",
      sound: "snd_explosion",
    },
    {
      label: "Growl",
      sound: "snd_beep",
    },
  ],
};

const mothman = {
  name: "Mothman",
  image: "./images/mothmancard.png",
  sounds: ["rawr"],
  theme: "red",
  buttons: [
    {
      label: "Rawr",
      sound: "snd_explosion",
    },
  ],
};

const jerseydevil = {
  name: "Jersey Devil",
  images: "./images/jerseydevil.jpg",
  sounds: ["Wee-Snaw"],
  theme: "red",
  buttons: [
    {
      label: "Wee-Snaw",
      sound: "snd_explosion",
    },
  ],
};

export const cryptidData = {
  cryptids: [sasquach, mothman, jerseydevil],
};
