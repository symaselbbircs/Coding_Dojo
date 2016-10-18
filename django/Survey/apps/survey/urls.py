from django.conf.urls import url, include
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$', views.show_survey),
    url(r'^result$', views.show_results),
    url(r'^survey/process$', views.process_data)
    # url(r'^', include('apps.survey.urls'))
    # url(r'^admin/', admin.site.urls),
]
