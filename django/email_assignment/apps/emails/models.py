from __future__ import unicode_literals
import re
from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def email_validation(self, email):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-0\._-]+\.[a-zA-Z]*$')
        if EMAIL_REGEX.match(email):
            return True
        else:
            return False

class Emails(models.Model):
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    class Meta:
        managed = False
        db_table = 'emails'
