//TODO: Create a City class. It should take the name and the population as instance vars.
	//It should have an equals method that takes another city as a parameter
	//and returns true if this city's name and population match the other city's name and population
    class City {
        constructor(nameIn, popIn, distIn){
            this.name = nameIn;
            this.pop = popIn
            this.dist = distIn;
        }
        equals(cityIn){
            return this.name === cityIn.name && this.pop === cityIn.pop;
        }
    }
    
    class CityMap{
        //TODO: The programmer missed something in the constructor
        constructor(){
            this.adjacencyList = [];
        }
    
        addConnection(startCity, endCity, dist){
            //Adding first connection
            if(this.adjacencyList.length == 0){
                this.adjacencyList[0] = [startCity, [endCity], [dist]];
                this.adjacencyList[1] = [endCity, [startCity], [dist]];
            }
            else{
                //Check to see if startCity is in list
                let startCityFound = -1;
                for(let i = 0; i < this.adjacencyList.length; i++){
                    if(this.adjacencyList[i][0].equals(startCity)){
                        startCityFound = i;
                        break;
                    }
                }
                //startCity already registered in list
                if(startCityFound ===-1){
                    startCityFound = this.adjacencyList.length;
                    this.adjacencyList[startCityFound] = [startCity, [], []];
                }
                else{
                    this.adjacencyList[startCityFound][1][this.adjacencyList[startCityFound][1].length] = endCity;
                    this.adjacencyList[startCityFound][2][this.adjacencyList[startCityFound][2].length] = dist;
                }
    
                //TODO: Check to see if endCity is already in the adjacency list
                    let endCityFound = -1;
                    for(let i=0; i <this.adjacencyList.length; i++){
                        if(this.adjacencyList[i][0].equals(endCity)){
                            endCityFound = i;
                            break;
                        }
                    }
                    //If it is, add a connection to the startCity.If it is not, add it to the adjacency list then add its connection to startCity (could be one step)
                        if(endCityFound === -1){
                            endCityFound = this.adjacencyList.length;
                            this.adjacencyList[endCityFound] = [endCity, [],[]];
                        }
                        this.adjacencyList[endCityFound][1][this.adjacencyList[endCityFound][1].length] = startCity;
                        this.adjacencyList[endCityFound][2][this.adjacencyList[endCityFound][2].length] = dist;
                        //Review the steps above to see how it is done with startCity instead of endCity
                    }
                }
            
    
    
        //TODO: Create a printMap() function that takes no parameters and prints the 
            //entire map. It should match the styling from the lab document.
            printMap(){
                for(let i = 0; i < this.adjacencyList.length; i++){
                    console.log(this.adjacencyList[i][0].name);
                    for(let j = 0; j < this.adjacencyList[i][1].length; j++){ 
                        console.log("\t" + this.adjacencyList[i][1][j].name + " (" + this.adjacencyList[i][2][j] + "km)");
                    }
                }
            }
    }

    //Main code goes here...
    
    //TODO: Create the four cities listed on the lab document
    
    const Bathurst = new City("Bathurst",400,75.6);
    const Miramichi = new City("Miramichi",4, 100.0);
    const Edumundston = new City("Edumundston", 10000,250);
    const Campbelltion = new City("Campbelltion", 20000,300);
    
    //TODO: Create a map and add connections between Bathurst-Miramichi, Bathurst-Edmundston
        //Bathurst-Campbellton, and Edmundston-Campbellton;
    
    const map = new CityMap();
    map.addConnection(Bathurst,Miramichi,100);
    map.addConnection(Bathurst,Edumundston,200);
    map.addConnection(Bathurst,Campbelltion,300);
    map.addConnection(Edumundston,Campbelltion,400);
    
    //TODO: Print the map using your the function you created
    
    map.printMap();
