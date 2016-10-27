from django.conf.urls import url
from . import views as v

urlpatterns = [
    url(r'^$', v.index),
    url(r'^success', v.success),
    url(r'^addemail', v.verify, name ='addemail')
]
