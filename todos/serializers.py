from rest_framework.serializers import HyperlinkedModelSerializer, SlugRelatedField

from todos.models import Project, TODO
from users.models import User


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = SlugRelatedField(many=True, slug_field='username', queryset=User.objects.all())

    class Meta:
        model = Project
        fields = '__all__'


class TODOModelSerializer(HyperlinkedModelSerializer):
    user = SlugRelatedField(slug_field='username', queryset=User.objects.all())
    project = SlugRelatedField(slug_field='project_name', queryset=Project.objects.all())

    class Meta:
        model = TODO
        fields = '__all__'
