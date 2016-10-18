from random import random
from datetime import datetime


rand_list = []

def _init_list(size,magnitude):
    for i in range(0,size):
        rand_list.append(round(random()*magnitude))

def swap_check(a,b):
    if a >= b:
        return True
    else:
        return False

def run_bubblesort():
    for number in range(0,len(rand_list)):
        for i in range(0,len(rand_list)-1-number):
            if swap_check(rand_list[i],rand_list[i+1]):
                tmp = rand_list[i]
                rand_list[i] = rand_list[i+1]
                rand_list[i+1] = tmp

_init_list(100,1000)
list_copy = rand_list
print "Initial list is as follows: "
print rand_list
print "Running sorter now \n\n\n"
tstart = datetime.now()
run_bubblesort()
tfinish = datetime.now()
print rand_list
print "Time to run algorithm:", (tfinish-tstart).microseconds/float(1000), "ms"

tstart_copy = datetime.now()
list_copy.sort()
tfinish_copy = datetime.now()

print "Time to run sorting algorithm:", (tfinish_copy-tstart_copy).microseconds/float(1000), "ms"
