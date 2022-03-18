from uuid import uuid4

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    uid = models.UUIDField(primary_key=True, default=uuid4)

    def __str__(self):
        return f'{self.username}'
