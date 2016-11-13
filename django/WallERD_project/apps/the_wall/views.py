from django.shortcuts import render, redirect
from django.core.urlresolver import reverse
from .models import Blog, Comment

# Create your views here.
def index(request):
    context = {"blogs": Blog.objects.all()}
    # Select * from blogs
    return render(request,
    'the_wall/index.html', context)

def blogs(request):
    #using ORM
    Blog.objects.create(title = request.POST['title'], blog = request.POST['blog'])
    #insert into blog (title, blog, created_at, updated_at) values (title, blog, NOW(), NOW())

    return redirect('/')


# blog = Blog.objects.get(id = id)
# Comment.objects.create(comment=request.POST['comment'], blog = blog)
# {% for comment in blog.comment_set.all %}
#     {{comment.comment}}
# {% endfor %}

# Makes an insert into db with new modification
# blog.blog = reqeust.POST['blog']
