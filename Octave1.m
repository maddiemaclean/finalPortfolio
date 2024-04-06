disp("");

fid = fopen('Cities.csv', 'r'); 
cityData = textscan(fid, '%s %f %f', 'Delimiter', ',', 'HeaderLines', 1); 

fid2 = fopen('Locations.csv','r');
locationData = textscan(fid2,  '%s %f %f', 'Delimiter', ',', 'HeaderLines', 1);

CityAx = cityData{2}(1);
CityAy = cityData{3}(1);
CityBx = cityData{2}(2);
CityBy = cityData{3}(2);
CityCx = cityData{2}(3);
CityCy = cityData{3}(3);
CityDx = cityData{2}(4);
CityDy = cityData{3}(4);

function [minVal, index]= calcCity(cityX,cityY,dataIn)
	minVal = 1000.00;
	index = 0;
	for i=1:100
		ix = dataIn{2}(i);
		iy = dataIn{3}(i);
		calc = getED(cityX,cityY,ix,iy);
		if calc < minVal
			minVal = calc;
			index = i;
		endif
	end
endfunction

function retval = getED(x1,y1,x2,y2)
	retval =sqrt(((x2-x1)^2)+((y2-y1)^2));
endfunction

disp("City  |  Closest     | Nearest Location");
disp("======================================");

[minValA, indexA] = calcCity(CityAx, CityAy, locationData);
disp([" A    |      " num2str(indexA) "       | " strcat(num2str(minValA))]);

[minValB, indexB] = calcCity(CityBx, CityBy, locationData);
disp([" B    |      " num2str(indexB) "      | " strcat(num2str(minValB))]);

[minValC, indexC] = calcCity(CityCx, CityCy, locationData);
disp([" C    |      " num2str(indexC) "      | " strcat(num2str(minValC))]);

[minValD, indexD] = calcCity(CityDx, CityDy, locationData);
disp([" D    |      " num2str(indexD) "      | " strcat(num2str(minValD))]);
