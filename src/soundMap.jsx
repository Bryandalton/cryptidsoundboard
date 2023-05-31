import bigfoothowl from "./assets/sounds/bigfoothowl.wav";
import bigfootgrowl from "./assets/sounds/bigfootgrowl.wav";
import mothman from "./assets/sounds/Mothman.mp3";
import mothmanwingflap from "./assets/sounds/mothmanwingflap.mp3";
import jerseydevil from "./assets/sounds/jerseydevil.mp3";

const SoundMap = {
  bigfoothowl: bigfoothowl,
  bigfootgrowl: bigfootgrowl,
  Mothman: mothman,
  mothmanwingflap: mothmanwingflap,
  jerseydevil: jerseydevil,
};

const loadedSounds = {};

const loadSound = (soundId) => {
  if (SoundMap[soundId]) {
    loadedSounds[soundId] = new Audio(SoundMap[soundId]);
  } else {
    console.error(`loadSound: invalid soundId "${soundId}"`);
  }
};

// loop over each key in SoundMap (the things on the left side)
// for each one, go ahead and load the sound on start, so
// we dont have to wait for a user to click a button to start
// loading it.
export const preloadAllSounds = () => {
  Object.keys(SoundMap).forEach((soundId) => {
    if (!loadedSounds[soundId]) {
      loadSound(soundId);
    } else {
      // sound is already loaded, we dont need to try
      // to load it again!
    }
  });
};

export const playSound = (soundId) => {
  if (loadedSounds[soundId]) {
    loadedSounds[soundId].play();
  } else {
    console.error(`playSound: soundId not preloaded ${soundId}`);
  }
};
