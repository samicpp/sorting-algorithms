import binding
import random

print("name = "+__name__)

print("testing with shuffled array")
arr=list(range(100))
random.shuffle(arr)
print(arr)
sarr=binding.sort("quick_sort",arr)
print("\nsorted array")
print(sarr)

