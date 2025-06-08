import os
import sys
import json

argc:int=sys.argv.__len__()

for i in range(1,argc):
    if not os.path.exists(sys.argv[i]):
        print(f"\033[31m{sys.argv[i]} does not exist\033[0m")
        continue

    with open(sys.argv[i]) as f:
        try:
            j=json.load(f)
            sort=sorted(j.get("list"))
            if sort:print(f"\033[32m{sys.argv[i]} is sorted\033[0m")
            else:print(f"\033[31m{sys.argv[i]} is not sorted\033[0m")
            pass
        except Exception as err:
            print(f"\033[31mcouldnt parse {sys.argv[i]}\033[0m\n{err}")
            pass
    pass

