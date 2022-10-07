import { overallColours } from '../defaultVariables';

export const determineOverallColour = (playerOverall) => {
    for (const colourElement of overallColours){
        if(playerOverall > colourElement.overall) return colourElement.colour
    }
    return '#939491' // Grey
}