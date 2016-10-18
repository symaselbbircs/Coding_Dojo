from random import random
from datetime import datetime

rand_list = []

def _init_list(size,magnitude):
    for i in range(0,size):
        rand_list.append(round(random()*magnitude))

class slowWay():

    def get_lowest_position(self,blist):
        min_val = blist[0]
        min_pos = 0
        for i in range(1,len(blist)):
            if blist[i] < min_val:
                min_val = blist[i]
                min_pos = i
        return min_pos


    def start_selectionsort(self):
        for i in range(0,len(rand_list)):
            blist = rand_list[i:]
            # print "sending {} to be sorted as b leg".format(blist)
            pos_to_swap = self.get_lowest_position(blist)
            # print "found position {} in blist to be the lowest value".format(pos_to_swap)
            tmp = rand_list[i]
            rand_list[i] = rand_list[pos_to_swap+i]
            rand_list[pos_to_swap+i] = tmp

class fastWay():

    def get_positions(self,blist):
        min_val = blist[0]
        max_val = blist[0]
        min_pos = 0
        max_pos = 0
        for i in range(1,len(blist)):
            if blist[i] < min_val:
                min_val = blist[i]
                min_pos = i
            if blist[i] > max_val:
                max_val = blist[i]
                max_pos = i
        return min_pos, max_pos


    def start_selectionsort(self,sort_list):
        for i in range(0,len(sort_list)/2):
            blist = sort_list[i:len(sort_list)-i]
            print "b list: \t\t\t{}".format(blist)
            # print "sending {} to be sorted as b leg".format(blist)
            min_swap, max_swap = self.get_positions(blist)
            if max_swap == 0: # needed for cases when max value is actually next in line to become the lowest.
                max_swap = min_swap
            print "Swapping min sort_list[{}] and sort_list[{}]".format(i,min_swap+i)
            print "Swapping max sort_list[{}] and sort_list[{}]".format(len(sort_list)-i-1,max_swap+i)
            # print "found position {} in blist to be the lowest value".format(pos_to_swap)
            min_pos = min_swap + i
            max_pos = max_swap + i
            tmp_min = sort_list[i]
            sort_list[i] = sort_list[min_swap+i]
            sort_list[min_swap+i] = tmp_min

            tmp_max = sort_list[len(sort_list)-i-1]
            sort_list[len(sort_list)-i-1] = sort_list[max_swap + i]
            sort_list[max_swap + i] = tmp_max
            print "sort_list now looks like: {}".format(sort_list)
        if len(sort_list) % 2 == 0: # check to see if we need to swap middle 2 values
            if sort_list[len(sort_list)/2] < sort_list[(len(sort_list)/2)-1]:
                tmp = sort_list[len(sort_list)/2]
                sort_list[len(sort_list)/2] = sort_list[(len(sort_list)/2)-1]
                sort_list[(len(sort_list)/2)-1] = tmp

def main(size,magnitude):
    slow = slowWay()
    fast = fastWay()
    _init_list(size,magnitude)
    list_copy = [row for row in rand_list]
    print "Initial list is as follows: "
    print rand_list
    print "Running slow sorter now \n\n\n"
    tstart = datetime.now()
    slow.start_selectionsort()
    tfinish = datetime.now()
    print rand_list
    print "Time to run algorithm:", (tfinish-tstart).microseconds/float(1000), "ms"
    print "\n\n"
    print "Running fast sorter now \n\n\n"
    tstart = datetime.now()
    fast.start_selectionsort(list_copy)
    tfinish = datetime.now()
    print list_copy
    print "Time to run algorithm:", (tfinish-tstart).microseconds/float(1000), "ms"

if __name__ == "__main__":
    print "Defaulting to size 100, magnitude 1000"
    main(10,1000)
