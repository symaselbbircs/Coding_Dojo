import random

def coin_toss():
    random_num = random.random()
    return round(random_num)

def play_cointoss(coin_flips):
    heads = 0
    tails = 0
    for attempt in range(1,coin_flips+1):
        print "Attempt #{}: Throwing a coin...".format(attempt),
        if coingit_toss() == 1:
            print "It's a head!",
            heads += 1
        else:
            print "It's a tail!",
            tails += 1
        print "We currently have {} head(s) and {} tail(s) so far.".format(heads,tails)

play_cointoss(500)
