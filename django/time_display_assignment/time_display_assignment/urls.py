from django.conf.urls import url, include

urlpatterns = [
    url(r'^', include('apps.timedisplay.urls'))
    # url(r'^$', include('app.timedisplay.urls')
    # url(r'^admin/', admin.site.urls),
]
