from django.core.management.base import BaseCommand
from faker import Faker

from users.models import User


class Command(BaseCommand):
    help = 'Creates 10 test users and 1 superuser'

    def handle(self, *args, **options):
        User.objects.all().delete()
        fake = Faker()
        for _ in range(10):
            user = User.objects.create_user(
                username=fake.lexify('?????????'),
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                email=fake.email()
            )
            user.save()

        User.objects.create_superuser('admin', 'admin@admin.com', '123')
