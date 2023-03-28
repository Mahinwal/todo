from django.urls import path
from . import views

urlpatterns = [
    path('todo', views.home, name='todo'),
    path('todo-add', views.todo_add, name='todo-add'),
    path('todo-update', views.todo_update, name='todo-update'),
    path('todo-delete', views.todo_delete, name='todo-delete'),
]