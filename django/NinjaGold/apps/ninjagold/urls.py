from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process/(?P<building>\w*)', views.process_money)
]
