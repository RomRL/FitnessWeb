export function calculateAverage(weights) {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
    }
    return (sum / weights.length).toFixed(2);
}

export function calculateMax(weights) {
    let max = weights[0];
    for (let i = 1; i < weights.length; i++) {
        if (weights[i] > max) {
            max = weights[i];
        }
    }
    if (max != null)
        return max;
}
// export function maxWeight = calculateMax(weights);

export function calculateMin(weights) {
    let min = weights[0];
    for (let i = 1; i < weights.length; i++) {
        if (weights[i] < min) {
            min = weights[i];
        }
    }
    return min;
}
// export function minWeight = calculateMin(weights);

export function calculateVariance(weights) {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
    }
    const average = sum / weights.length;
    let variance = 0;
    for (let i = 0; i < weights.length; i++) {
        variance += Math.pow(weights[i] - average, 2);
    }
    return (variance / weights.length).toFixed(2);;
}
// export function varianceWeight = calculateVariance(weights);

export function calculateStandardDeviation(weights) {
    return (Math.sqrt(calculateVariance(weights)).toFixed(2));
}
// export function standardDeviationWeight = calculateStandardDeviation(weights);

export function calculateMedian(weights) {
    const sortedWeights = weights.sort();
    const middle = Math.floor(sortedWeights.length / 2);
    if (sortedWeights.length % 2 === 0) {
        return (sortedWeights[middle] + sortedWeights[middle - 1]) / 2;
    }
    return sortedWeights[middle];
}
// export function medianWeight = calculateMedian(weights);

export function calculatePopularName(trainingNames) {
    const nameCount = {};
    for (let i = 0; i < trainingNames.length; i++) {
        if (nameCount[trainingNames[i]]) {
            nameCount[trainingNames[i]]++;
        } else {
            nameCount[trainingNames[i]] = 1;
        }
    }
    let maxCount = 0;
    let maxName = "";
    for (const name in nameCount) {
        if (nameCount[name] > maxCount) {
            maxCount = nameCount[name];
            maxName = name;
        }
    }
    return maxName;
}

export function currentTrainingName(trainingNames) {
    return trainingNames[trainingNames.length - 1];
}

// export function calculateWeightLoss = calculateWeightLoss(dates, weights, trainingNames)


//calculate total weight loss from the first training to the last training
export function calculateWeightLoss(selectedTrainings) {

    const firstTraining = selectedTrainings[0]
    const lastTraining = selectedTrainings[selectedTrainings.length - 1];
    if (firstTraining == null || lastTraining == null) {
        return 0;
    }
    if ( lastTraining.weight - firstTraining.weight > 0)
    {
        return ` You gained ${lastTraining.weight - firstTraining.weight} kg from the first training to the last training.`
    }
    return  ` Well done! You lost ${firstTraining.weight - lastTraining.weight} kg from the first training to the last training.`
 
 
}
  

  //---------------------------------------------------------------------------------


//Calaculate for each program the weight loss
export function calculateWeightLossPerProgram(selectedTrainings,sentance) {
    const weightLossPerProgram = {};
    for (let i = 0; i < selectedTrainings.length - 1; i++) {
        const currentTraining = selectedTrainings[i];
        const nextTraining = selectedTrainings[i + 1];
        const weightLoss = nextTraining.weight - currentTraining.weight;
        if (weightLossPerProgram[currentTraining.name]) {
            weightLossPerProgram[currentTraining.name] += weightLoss;
        } else {
            weightLossPerProgram[currentTraining.name] = weightLoss;
        }
    }
    if ( !sentance){
        return weightLossPerProgram;    
    }
    let Result = "";

    // Create String Result
    for (const program in weightLossPerProgram) {
       
        if (weightLossPerProgram[program] < 0) {
            Result  += `$You  lost ${-1*weightLossPerProgram[program]} kg in ${program}.$`;
        } else {
            Result += `$You gained ${Math.abs(weightLossPerProgram[program])} kg in ${program}.$`;
        }
    }
    let Best= findMaxWeightLoss(weightLossPerProgram);
    Result += `#The program with the most weight loss is ${Best}.`;
    return Result;

}

// Find the program with the most weight loss 
function findMaxWeightLoss(weightLossPerProgram) {
    let maxWeightLoss = 0;
    let maxProgram = "";
    for (const program in weightLossPerProgram) {
        if (weightLossPerProgram[program] < maxWeightLoss) {
            maxWeightLoss = weightLossPerProgram[program];
            maxProgram = program;
        }
    }
    return maxProgram;
}


//Calculate the days between two dates

// export function calculateDays(lastDate, firstDate) {
//     const oneDay = 24 * 60 * 60 * 1000;
//     const firstDateObj = new Date(firstDate);
//     const lastDateObj = new Date(lastDate);
//     return Math.round(Math.abs((firstDateObj - lastDateObj) / oneDay));
// }

// Calculate the days In Each Program
export function calculateDaysInEachProgram(dates , selectedTrainings ) {
// this is the data foramt
//step 1: modify the data format to be like this yyyy-mm-dd
  // Step 1: Modify the data format to be like 'yyyy-mm-dd'
  console.log("Selected:", dates);
  const modifiedData = [];
  for (let i = 0; i < dates.length; i++) {
    const training = dates[i].split(','); // Split by comma
    const date = training[0] ? training[0].slice(0, 10) : ''; // Check if date exists
    const name = training[1] || ''; // Check if name exists
    const modifiedTraining = `${date},${name}`;
    modifiedData.push(modifiedTraining);
  }
  console.log("Modified:", modifiedData);
  //Modified: ['2023-06-19,Cardio Workout', '2023-06-22, HIIT Circuit', '2023-06-22,Cardio Workout', '2023-06-22,Strength Training']
  //For this example, we have 4 days in Cardio Workout, 1 day in HIIT Circuit, and 1 day in Strength Training.
  // Step 2: Calculate total days in each program , HOW ?
  // Cardio Workout: 4 days : started at 2023-06-19, ended at 2023-06-22 => 3 days + started at 2023-06-22 ended at 2023-06-22 => 4 days
  // HIIT Circuit: 1 day : started at 2023-06-22, ended at 2023-06-22 => 1 day
    // Strength Training: 1 day : started at 2023-06-22, ended at 2023-06-22 => 1 day
  //Implement the logic
    const daysInEachProgram = {};
    for (let i = 0; i < modifiedData.length - 1; i++) {
        const currentTraining = modifiedData[i];
        const nextTraining = modifiedData[i + 1];
        const days = calculateDaysBetweenDates(currentTraining.split(',')[0], nextTraining.split(',')[0]);
        if (daysInEachProgram[currentTraining.split(',')[1]]) {
            daysInEachProgram[currentTraining.split(',')[1]] += days;
        } else {
            daysInEachProgram[currentTraining.split(',')[1]] = days;
        }
    }
    console.log("Days in each program:", daysInEachProgram);
    //Step 3 : For each program, calculate the average weight loss per day using 
    //Calculate the weight loss per program
    const weightLossPerProgram = calculateWeightLossPerProgram(selectedTrainings);
    console.log("Weight loss per program:", weightLossPerProgram);
    // Weight loss per program: {Cardio Workout: 64, " HIIT Circuit": 1}
    // Step 4: Calculate the average weight loss per day
    const averageWeightLossPerDay = {};
    for (const program in daysInEachProgram) {
        averageWeightLossPerDay[program] = weightLossPerProgram[program] / daysInEachProgram[program];
    }
    console.log("Average weight loss per day:", averageWeightLossPerDay);
    // Average weight loss per day: {Cardio Workout: 21.333333333333332, " HIIT Circuit": 1}
    // Step 5: Find the program with the most average weight loss per day
    const maxAverageWeightLossPerDay = findMaxAverageWeightLossPerDay(averageWeightLossPerDay);
    console.log("Max average weight loss per day:", maxAverageWeightLossPerDay);
    // Max average weight loss per day: HIIT Circuit
    // Step 6: Return all the data
    return {
        "daysInEachProgram": daysInEachProgram,
        "weightLossPerProgram": weightLossPerProgram,
        "averageWeightLossPerDay": averageWeightLossPerDay,
        "maxAverageWeightLossPerDay": maxAverageWeightLossPerDay
    };
}

function calculateDaysBetweenDates(date1, date2) {
    if ( date1 == date2) {
        return 1;
    }
    const dateObject1 = new Date(date1);
    const dateObject2 = new Date(date2);
  
    const timeDifference = dateObject2.getTime() - dateObject1.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
    }


function findMaxAverageWeightLossPerDay(averageWeightLossPerDay) {
    let maxAverageWeightLossPerDay = 0;
    let maxProgram = "";
    for (const program in averageWeightLossPerDay) {
        if (averageWeightLossPerDay[program] > maxAverageWeightLossPerDay) {
            maxAverageWeightLossPerDay = averageWeightLossPerDay[program];
            maxProgram = program;
        }
    }
    return maxProgram;
}




