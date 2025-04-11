
from rest_framework import serializers
from .models import Coach, Schedule

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['day', 'time', 'location']

class CoachSerializer(serializers.ModelSerializer):
    schedules = ScheduleSerializer(many=True, read_only=True)

    class Meta:
        model = Coach
        fields = ['id', 'full_name', 'title', 'specialization', 'experience', 'photo', 'biography', 'schedules']
