from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Courses(models.Model):
    name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        managed = False
        db_table = 'courses'

class Descriptions(models.Model):
    description = models.TextField()
    course = models.ForeignKey('Courses' ,models.DO_NOTHING, related_name="coursedescription")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        managed = False
        db_table = 'descriptions'
