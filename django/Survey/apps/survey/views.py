from django.shortcuts import render, redirect

# Create your views here.
def show_survey(request):
    if 'count' not in request.session:
        request.session['count'] = 0
    return render(request,
    'survey/home.html')

def show_results(request):
    return render(request,
    'survey/result.html')

def process_data(request):
    if request.method == "POST":
        request.session['count'] = request.session['count'] + 1
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        request.session['name'] = request.POST['name']
    return redirect('/result')
