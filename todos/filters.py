from django_filters import rest_framework as filters

from todos.models import Project, TODO


class ProjectFilter(filters.FilterSet):
    project_name = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Project
        fields = ['project_name']


class TODOFilter(filters.FilterSet):
    project = filters.ModelChoiceFilter(queryset=Project.objects.all())
    created_at = filters.DateTimeFromToRangeFilter()

    class Meta:
        model = TODO
        fields = ['project', 'created_at']
