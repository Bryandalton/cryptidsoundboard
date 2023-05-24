import bigfoothowl from "./assets/sounds/bigfoothowl.wav";
import bigfootgrowl from "./assets/sounds/bigfootgrowl.wav";
import Mothman from "./assets/sounds/Mothman.mp3";
import mothmanwingflap from "./assets/sounds/mothmanwingflap.mp3";
import jerseydevil from "./assets/sounds/jerseydevil.mp3";

const SoundMap = {
  bigfoothowl: bigfoothowl,
  bigfootgrowl: bigfootgrowl,
  Mothman: Mothman,
  mothmanwingflap: mothmanwingflap,
  jerseydevil: jerseydevil,
};

const loadedSounds = {

}

export const playSound = (soundId) => {
    if(loadedSounds[soundId])   {
        return loadedSounds[soundId]
    } 
    else{
        loadedSounds[soundId] = new Audio(getSound(soundId))
    }
    

}

export const getSound = (soundId) => {
  console.log(soundId);
  if (SoundMap[soundId]) {
    return SoundMap[soundId];
  } else {
    console.error(`invalid sound requested ${soundId}`);
  }
};