@echo off
setlocal enabledelayedexpansion

echo how many numbers must the array contain
set /p num=

echo what sorting method do you wanna use [bogo, bubble, heap, merge, quick, radix, count, stalin]
set /p method=

python ./python/generate.py ./demo/shuffled-%num%.json %num% shuffled
python ./python/generate.py ./demo/random-%num%.json %num% random
python ./python/generate.py ./demo/best-%num%.json %num% best
python ./python/generate.py ./demo/worst-%num%.json %num% worst

.\build\cxx\Debug\mypkg.exe ./demo/shuffled-%num%.json ./demo/shuffled-sorted-%num%.json %method%
.\build\cxx\Debug\mypkg.exe ./demo/random-%num%.json ./demo/random-sorted-%num%.json %method%
.\build\cxx\Debug\mypkg.exe ./demo/best-%num%.json ./demo/best-sorted-%num%.json %method%
.\build\cxx\Debug\mypkg.exe ./demo/worst-%num%.json ./demo/worst-sorted-%num%.json %method%

python ./python/check.py ./demo/shuffled-sorted-%num%.json
python ./python/check.py ./demo/random-sorted-%num%.json
python ./python/check.py ./demo/best-sorted-%num%.json
python ./python/check.py ./demo/worst-sorted-%num%.json

pause
