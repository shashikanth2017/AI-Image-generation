import { surpriseMePrompts } from "../constants/surprise";
import FileSaver from "file-saver";
export function getRandomPrompt(prompt){
    const RandomIndex =Math.floor(Math.random()* surpriseMePrompts.length);
    const randomPrompt=surpriseMePrompts[RandomIndex];
    if(randomPrompt===prompt) return getRandomPrompt(prompt)
    return randomPrompt;
}
export async function downloadimg(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpg`)
}