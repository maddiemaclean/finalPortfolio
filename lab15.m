f1 = @(x) ((x^2/3)-5); %lambda function in octave
f2 = @(x) log10(x+1);
compareTo = @(x, y) x <= y; %checks to see if y is greater or equal to x.

function retval = compareListPositions(f1,f2, compareTo, values)
	retval = 0;
	for i = 1: length(values)
		if compareTo(f1(values(i)),f2(values(i))) !=0
			++retval;
		endif
	end
endfunction

arr = [1,2,3,4,5,6,7,8,9,10];
disp(compareListPositions(f1,f2,compareTo,arr));
