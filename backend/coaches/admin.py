
from django.contrib import admin
from .models import Coach, Schedule

class ScheduleInline(admin.TabularInline):
    model = Schedule
    extra = 1

@admin.register(Coach)
class CoachAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'title', 'specialization', 'experience')
    inlines = [ScheduleInline]
