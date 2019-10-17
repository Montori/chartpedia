function getAllYears(raw)
{
  let records = raw.split("//");
  let splitRecords = splitIntoYears(records);
  return splitRecords;
}

function splitIntoYears(rawRecords)
{
    let availableYears = [];
    let splitResult = [];

    for (var i = 0; i < rawRecords.length; i++)
    {
      let dataFraction = rawRecords[i].split(";");
      if(dataFraction.length >= 2 && dataFraction[1].length > 5)
      {
        let extractedYear = dataFraction[1].substring(0,4);
        if(availableYears.indexOf(extractedYear) >= 0)
        {
            splitResult[availableYears.indexOf(extractedYear)].push(dataFraction);
        }
        else //Pushing a new Year into the Array
        {
            let newYear = [];
            newYear.push(dataFraction)
            availableYears.push(extractedYear);
            splitResult.push(newYear);
        }
      }
    }
    return splitResult;
}
