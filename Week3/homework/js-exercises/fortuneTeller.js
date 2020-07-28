"use strict"

const numChildren = [4, 3, 2, 11, 8];
const partnerNames = ["Aysha", "Ranim", "Rim", "Sanna", "Lana"];
const locations = ["Aleppo", "Amsterdam", "Berlin", "Chicago", "Stockholm"];
const jobs = ["front-end Developer", "back-end Developer", "taxi driver", "footballer", "docter"];

function tellFortune(numChildren, partnerNames, locations, jobs){
    const randomIndex = Math.floor(Math.random()* 5);
    const numkids = numChildren[randomIndex];
    const partnerName = partnerNames[randomIndex];
    const location = locations[randomIndex];
    const job = jobs[randomIndex];
    console.log(`You will be a ${job} in ${location}, married to ${partnerName} with ${numkids} kids.`)
}

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);