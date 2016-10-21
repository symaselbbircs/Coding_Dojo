from django.shortcuts import render
from models import Users, Friendships
from django.db.models import Q
# Create your views here.
def index(req):
#     users = Users.objects.all()
#     print users
#
#     ordered_first = Users.objects.all().order_by('first_name')
#     print ordered_first
#
#     ordered_last = Users.objects.all().order_by('-last_name')
#     print ordered_last
#
#     from_friendship = Friendships.objects.filter(user_id = 5).select_related()
#     print from_friendship.query
#     print from_friendship
#
#     is_friend = Friendships.objects.filter(friend_id = 4).select_related()
####################
    # #1: Starting with Friendships, show all of the user and friend first and last names on your index.html page
    all_friendships_query = Friendships.objects.all().select_related()
    # print all_friendships_query.query

    # #2: all friends that have a name of Michael
    mikes_friends = Friendships.objects.filter(user__first_name = "Michael")
    # print mikes_friends.query
    # for user in mikes_friends:
    #     print user.user.first_name, " ", user.user.last_name

    # #3: Print all of the friends first names who Daniel is not friends with on your
    not_daniels_friends = Friendships.objects.exclude(user__first_name = "Daniel")
    # print not_daniels_friends.query
    daniel = []
    for user in not_daniels_friends:
        if "{} {}".format(user.friend.first_name, user.friend.last_name) not in daniel:
            daniel.append("{} {}".format(user.friend.first_name, user.friend.last_name))
    # print daniel
    daniel = [p.split(' ', 1) for p in daniel]

    #4 & 5: all friends with both user_id = 1 and with last name hernandez
    hernandez = Friendships.objects.filter(Q(user__id = 1) | Q(user__last_name = "Hernandez")).distinct().order_by("friend__first_name")
    #Distinct did not help and I'm not sure why?
    # print hernandez.query

    #6 & 7:
    users = Users.objects.filter(usersfriend__friend__id=2)
    # print (users.query)

    #8:
    hernandez2 = Users.objects.filter(Q(usersfriend__user__id = 1) | Q(last_name = "Hernandez")).order_by("usersfriend__friend__first_name").distinct()
    print hernandez2.query
    context = {'all_friendships_query': all_friendships_query,
               'mikes_friends':mikes_friends,
               'not_daniels_friends': daniel,
               "hernandez": hernandez,
               'users':users,
               "hernandez2": hernandez2}
    return render(req, "friendapp/index.html",context)
