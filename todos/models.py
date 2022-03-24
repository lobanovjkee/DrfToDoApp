from uuid import uuid4

from django.db import models

from users.models import User


class Project(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    project_name = models.CharField(max_length=128)
    project_link = models.TextField()
    users = models.ManyToManyField(User)

    def __str__(self):
        return f'{self.project_name}'


class TODO(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def delete(self, using=None, keep_parents=False):
        self.is_active = False
        self.save()
