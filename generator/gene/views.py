# views.py

from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def  q(request):
    return render(request,'quote_details.html')
def ind(request):
    return render(request,'index.html')