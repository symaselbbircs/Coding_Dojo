from django.shortcuts import render, redirect
from models import Emails
# Create your views here.
def index(request):
    if 'error' not in request.session:
        request.session['error'] = False
    if request.session['error']:
        context = {'messages': True,
                   'email': request.session['email']}
        request.session['error'] = False
        return render(request,
        'emails/index.html', context)
    else:
        return render(request,
        'emails/index.html')

def verify(request):
    if "email_added" not in request.session:
        request.session['email_added'] = False
    if request.method == "POST":
        if Emails.objects.email_validation(request.POST['email']):
            d = Emails(email = request.POST['email'])
            d.save()
            request.session['email_added'] = True
            request.session['email'] = request.POST['email']
            return redirect('/success')
        else:
            print "{} invalid!".format(request.POST['email'])
            request.session['error'] = True
            request.session['email'] = request.POST['email']
            return redirect('/')

def success(request):
    show_data = Emails.objects.all()
    if request.session['email_added']:
        context = {'data':show_data,
                   'email': request.session['email'],
                   'email_added': True}
        request.session['email_added'] = False
    else:
        context = {'data':show_data}
    return render(request,
    'emails/success.html', context)
