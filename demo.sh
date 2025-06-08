echo how many numbers must the array contain
read num

./python/generate.py ./demo-shuffled-$num.json $num shuffled
./python/generate.py ./demo-random-$num.json $num random
./python/generate.py ./demo-best-$num.json $num best
./python/generate.py ./demo-worst-$num.json $num worst

./build/cxx/mypkg ./demo-shuffled-$num.json ./demo-shuffled-sorted-$num.json
./build/cxx/mypkg ./demo-random-$num.json ./demo-radom-sorted-$num.json
./build/cxx/mypkg ./demo-best-$num.json ./demo-best-sorted-$num.json
./build/cxx/mypkg ./demo-worst-$num.json ./demo-worst-sorted-$num.json

