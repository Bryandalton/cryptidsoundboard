const sasquach = {
  name: "Sasquach",
  image: "./images/bigfoot.JPG",
  // sounds: ["rawr", "grr", "whoop", "reasonable", "fart", "hungry"],
  theme: "green",
  buttons: [
    {
      label: "Growl",
      sound: "bigfootgrowl",
    },
    {
      label: "Howl",
      sound: "bigfoothowl",
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
      label: "Noise",
      sound: "Mothman",
    },
    {
      label: "Wings",
      sound: "mothmanwingflap",
    },
  ],
};

const jerseydevil = {
  name: "Jersey Devil",
  image: "./images/jerseydevil.jpg",
  sounds: ["Wee-Snaw"],
  theme: "blue",
  buttons: [
    {
      label: "Breath",
      sound: "jerseydevil",
    },
  ],
};

export const cryptidData = {
  cryptids: [sasquach, mothman, jerseydevil],
};
