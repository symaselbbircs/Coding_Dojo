from django.conf.urls import url
from . import views

urlpatterns = [
		url(r'^$', views.index),
		url(r'^users$', views.show_users),
		url(r'^books$', views.show_books)
]
