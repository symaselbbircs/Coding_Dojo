from django.shortcuts import render
from models import Users, Friendships
# Create your views here.
def index(req):
    users = Users.objects.all()
    print users

    ordered_first = Users.objects.all().order_by('first_name')
    print ordered_first

    ordered_last = Users.objects.all().order_by('-last_name')
    print ordered_last

    from_friendship = Friendships.objects.filter(user_id = 5).select_related()
    print from_friendship.query
    print from_friendship

    is_friend = Friendships.objects.filter(friend_id = 4).select_related()

    is_not_query = Friendships.objects.exclude(user_id__in = [4,5,6]).select_related()
    print is_not_query.query

    context = {'users': users,
               'ordered_first': ordered_first,
               'ordered_last': ordered_last,
               'from_friendship': from_friendship,
               'is_friend': is_friend,
               'is_not_query': is_not_query}
    return render(req, "friendapp/index.html",context)
