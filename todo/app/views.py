from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Task

def home(request):
    tasks = Task.objects.all()
    return render(request, 'index.html', {'tasks': tasks})

def todo_add(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        instance = Task.objects.create(title=title)
        instance.save()
        return redirect('todo')

def todo_update(request):
    id = int(request.POST.get('id'))
    instance = Task.objects.get(pk=id)
    if request.method == 'POST':
        title = request.POST.get('title')
        instance.title = title
        instance.save()
        return redirect('todo')
    
def todo_delete(request):
    id = int(request.POST.get('id'))
    instance = Task.objects.get(pk=id)
    if request.method == 'POST':
        instance.delete()
        return redirect('todo')

