from rest_framework.serializers import HyperlinkedModelSerializer, StringRelatedField

from todos.models import Project, TODO


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TODOModelSerializer(HyperlinkedModelSerializer):
    user = StringRelatedField()
    project = StringRelatedField()

    class Meta:
        model = TODO
        fields = '__all__'
