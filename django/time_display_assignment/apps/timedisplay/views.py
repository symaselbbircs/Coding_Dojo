from django.shortcuts import render
from datetime import datetime

# Create your views here.
def default(request):
    print "This is render with just the host and port."
    return render(request,
    "timedisplay/default.html")

def show_time(request):
    context = {"time_data": datetime.now()
    }
    return render(request, 'timedisplay/time.html', context)
