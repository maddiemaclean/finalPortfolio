disp("");
function retval = getSum(listIn)
retval = 0;
	for i = 1: length(listIn)
		retval += listIn(i);
	end
endfunction

function retval = getAvg(listIn)
	retval = getSum(listIn)/length(listIn);
endfunction

function retval = getMax(listIn)
retval = 0;
	for i = 1: length(listIn)
		if(listIn(i) > retval)
			retval = listIn(i);
		endif 
	end
endfunction

function retval = getMin(listIn)
retval = 10;
	for i = 1: length(listIn)
		if(listIn(i) < retval)
			retval = listIn(i);
		endif
	end
endfunction

function retval = factorial(numIn)
	if numIn ==0 || numIn ==1
		retval = 1;
	else
		retval = numIn * factorial(numIn-1);
	endif
endfunction

function retval = getSin(angle)
retval = 0;
angle = angle % (2*3.14);
	for i = 0:50
		retval += ((-1)^i)*(angle^(2*i+1))/factorial(2*i+1);
	end
endfunction

function retval = getCos(angle)
retval = 0;
angle = angle % (2*3.14);
	for i = 0:50
		retval += ((-1)^i) * (angle^(2 * i )) / factorial(2 * i);
	end
endfunction

function retval = getExponential(numIn)
retval = 0;
	for i = 0:50
		retval += (numIn^i)/factorial(i);
	end
endfunction

function retval = getPoisson(numIn)
  	 a = (2.71828 ^- 50);
     b = (50^ numIn) / factorial(numIn);
         retval =a * b
endfunction

file = fopen('DataInput.txt','r');
arr = {};
while ~feof(file)
    line = fgetl(file);
    if ischar(line) && ~isempty(line)
        arr{end+1} = line;
    end
end
fid = fopen('Output.txt','w');

k = 1;
k = str2double(k);
while k < length(arr)
	len = str2double(arr{k+1});
	splicedArr = arr(k+2:len+2);
	if arr{1,k} == "SUM"
		castedArr = round(str2double(splicedArr));
		fputs(fid, [num2str(getSum(castedArr))]);
		fputs(fid, "\n");

	elseif arr{1,k} == "AVG"
		castedArr = round(str2double(splicedArr));
		fputs(fid, [num2str(getAvg(castedArr))]);
		fputs(fid, "\n");

	elseif arr{1,k} == "MAX" 
		castedArr = round(str2double(splicedArr));
		fputs(fid, [num2str(getMax(castedArr))]);
		fputs(fid, "\n");

	elseif arr{1,k} == "MIN"
		castedArr =cast(splicedArr,'int8');
		fputs(fid, [num2str(getMin(castedArr))]);
		fputs(fid, "\n");

	elseif arr{1,k} == "FXP"
		for i= 1:length
			fputs(fid,getExponential(str2num(splicedArr(i)))+" ");
		end
		fputs(fid, "\n");

	elseif arr{1,k} == "FPO"
		for i= 1:length
			fputs(fid,getPoisson(str2num(splicedArr(i))) +" ");
		end
		fputs(fid, "\n");

	elseif arr{1,k} == "FSN"
		for i=1:length
			fputs(fid,getSin(str2num(splicedArr(i))) + " ");
		end
		fputs(fid, "\n");

	elseif arr{1,k} == "FCS"
		for i=1:length
			fputs(fid,getCos(str2num(splicedArr(i)) )+ " ");
		end
		fputs(fid, "\n");
		endif
	k++;
end
