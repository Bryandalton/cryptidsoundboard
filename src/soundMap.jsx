import bigfoothowl from "./assets/sounds/bigfoothowl.wav";
import bigfootgrowl from "./assets/sounds/bigfootgrowl.wav";
import Mothman from "./assets/sounds/Mothman.mp3"
import mothmanwingflap from "./assets/sounds/mothmanwingflap.mp3"
import jerseydevil from "./assets/sounds/jerseydevil.mp3"

const SoundMap ={
    "bigfoothowl": bigfoothowl,
    "bigfootgrowl": bigfootgrowl,
    "Mothman" : Mothman,
    "mothmanwingflap" : mothmanwingflap,
    "jerseydevil" : jerseydevil,
}

export default (soundId) => {
    if(SoundMap[soundId]){
        return SoundMap[soundId];
    } else {
         console.error(`invalid sound requested ${soundId}`);
    }
}
