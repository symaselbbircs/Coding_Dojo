from django.shortcuts import render, HttpResponse
from .models import User, Book

def index(request):

    # print "Whatever route that was hit by an HTTP request (by the way) decided to invoke me!"
    # print "By the way, here's the request object that Django automatically passes us:", request
    # print "By the by, we still aren't delivering anything to the browser, so you should see 'ValueError at /'"
    # print "Cheese "*290
    print ("*"*100)
    return render (request,
    "first_app/index.html")

def show_users(request):
    all_users = User.objects.all() # SELECT * FROM user
    print(all_users)
    return render (request,
    'first_app/show_users.html')

def show_books(request):
    all_books = Book.objects.all()
    return render (request,
    'first_app/show_books.html')
