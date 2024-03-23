disp("")
function retval = countLetters( stringIn )
vector = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function retval = countLetters(input)
for i = 1:length (stringIn)
	currString = toupper(stringIn);
	if(double(currString(i)) > 64 & double(currString(i)) < 91)
		if (vector (double(currString(i))-64 != 0))
			vector(double(currString(i))-64)++;
		else
		    vector(double(currString(i)-64)) = 1;
		endif
	endif
end
retval = vector;
endfunction 

function retval = starterFunction()
	inputFile = fopen ("Input.txt", "r");
  	retval = {};
	while (!feof (inputFile))
		line = fgetl(inputFile);
	    if(length(retval) == 0)
			[x, ix] = max(cell2mat(countLetters(line)));
		    retval(1, 1) = line;
		    retval(1, 2) = length(line);
		else
			[x, ix] = max(cell2mat(countLetters(line)));
			retval(length(retval)+1, 1) = line;
		    retval(length(retval), 2) = length(line);
		end
	end
	retval(2, :) = [];
end

disp(starterFunction());
