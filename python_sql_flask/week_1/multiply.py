def multiply(a,mult):
    return [num * mult for num in a]

a = [[1, 2, 5, 10, 255, 3],[2,4,10,16],[1,2,6,7,8,9,5,1,2,5,0]]
mult = 5

for lists in a:
    print "{} * {}= {}".format(mult,lists, multiply(lists,mult))
