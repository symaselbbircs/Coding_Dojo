from django.conf.urls import url
from . import views as v
# from django.contrib import admin

urlpatterns = [
    # url(r'^admin/', admin.site.urls),
    url(r'^$', v.show)
]
