import bigfoothowl from "./assets/sounds/bigfoothowl.wav";
import bigfootgrowl from "./assets/sounds/bigfootgrowl.wav";

const SoundMap ={
    "bigfoothowl": bigfoothowl,
    "bigfootgrowl": bigfootgrowl,
}

export default (soundId) => {
    if(SoundMap[soundId]){
        return SoundMap[soundId];
    } else {
         console.error(`invalid sound requested ${soundId}`);
    }
}
