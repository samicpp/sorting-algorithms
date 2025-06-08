import binding
import random

print("name = "+__name__)

print("testing with shuffled array")
arr=list(range(100))
random.shuffle(arr)
print(arr)
sarr=binding.quick(arr)
print("\nsorted array")
print(sarr)

