echo how many numbers must the array contain
read num

echo what sorting method do you wanna use [bogo, bubble, heap, merge, quick, radix, stalin]
read method

./python/generate.py ./demo/shuffled-$num.json $num shuffled
./python/generate.py ./demo/random-$num.json $num random
./python/generate.py ./demo/best-$num.json $num best
./python/generate.py ./demo/worst-$num.json $num worst

./build/cxx/mypkg ./demo/shuffled-$num.json ./demo/shuffled-sorted-$num.json $method
./build/cxx/mypkg ./demo/random-$num.json ./demo/radom-sorted-$num.json $method
./build/cxx/mypkg ./demo/best-$num.json ./demo/best-sorted-$num.json $method
./build/cxx/mypkg ./demo/worst-$num.json ./demo/worst-sorted-$num.json $method

python ./python/check.py ./demo/shuffled-$num.json
python ./python/check.py ./demo/random-$num.json
python ./python/check.py ./demo/best-$num.json
python ./python/check.py ./demo/worst-$num.json
