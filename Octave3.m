beowulf = fopen('Beowulf.txt','r');
linesBeo = {};
while ~feof(beowulf)
    line = fgets(beowulf);
    linesBeo{end+1} = line;
end
fclose(beowulf);

wordsBeo = {};
for i = 1:length(linesBeo)
    temp = strsplit(linesBeo{i});
    wordsBeo = [wordsBeo,temp];
end

vindication = fopen('Vindication.txt','r');
linesVin = {};
while ~feof(vindication)
    line = fgets(vindication);
    linesVin{end+1} = line;
end
fclose(vindication);

wordsVin = {};
for i = 1:length(linesVin)
    temp = strsplit(linesVin{i});
    wordsVin = [wordsVin,temp];
end

function freqTable = getFreqTable(wordsIn)
    freqTable = {};
    for i = 1:length(wordsIn)
        found = false;
        for j = 1:length(freqTable)
            if strcmp(wordsIn{i}, freqTable{j}{1})
                freqTable{j}{2} = freqTable{j}{2} + 1;
                found = true;
                break;
            end
        end
        if ~found
            freqTable{end+1} = {wordsIn{i}, 1};
        end
    end
end

beoTable = getFreqTable(wordsBeo);
vinTable = getFreqTable(wordsVin);

function odds = getOdds(word, freqTable)
    odds = 0;
    for i = 1:length(freqTable)
        if strcmp(word, freqTable{i}{1})
            odds = freqTable{i}{2} / length(freqTable);
            break;
        end
    end
end

function origin = determineOrigin(freqTableA, freqTableB, phrase)
    sumA = 0;
    sumB = 0;
    phrase = strsplit(phrase);
    for i = 1:length(phrase)
        sumA = sumA + getOdds(phrase{i}, freqTableA);
        sumB = sumB + getOdds(phrase{i}, freqTableB);
    end
    if sumA > sumB
        origin = "More likely to be written by unknown author";
    else
        origin = "More likely to be written by Mary Wollstonecraft";
    end
end

origin = determineOrigin(beoTable, vinTable, "This is a message");
disp(origin);
