import sys
import re
output = ""
for filename in sys.argv[1:]:
	infile = open(filename)
	data = infile.read()
	data = " ".join(re.split("[^atcg\n]", data))
	data = data.replace(" ", "")
	output = output + ">" + filename + "\n" + data + "\n"
print(output)
outfile = open('SEQUENCES.txt', 'w+')
outfile.write(output)