//Bar Chart

//Bubble Chart

//Display Individual Demographic Data

//Display Key-Value Pairs from Metadata id = sample-metadata

//Update when Dropdown Changes: optionChanged function

//Add options for drowpdown id = selDataset

//init function

function buildMetaData(sampleNumber) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        console.log(metadata);
        //Filtering metadata
        var sample =metadata.filter(metadata => metadata.id == sampleNumber)
        //Getting rid of the array so it only displays dictionary
        sample = sample[0]

    })
}