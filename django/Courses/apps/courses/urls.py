from django.conf.urls import url
from . import views as v

urlpatterns = [
    url(r'^$', v.index),
    url(r'^courses/add$', v.add),
    url(r'^courses/delete/(?P<course_id>\d*)$', v.remove)
]
