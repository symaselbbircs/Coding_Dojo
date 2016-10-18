from random import random

def make_list(size,magnitude,rand_list):
    for i in range(0,size):
        rand_list.append(round(random()*magnitude))
    return rand_list
