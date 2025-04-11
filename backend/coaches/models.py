
from django.db import models

class Coach(models.Model):
    full_name = models.CharField(max_length=100, verbose_name='ФИО')
    title = models.CharField(max_length=100, verbose_name='Звание')
    specialization = models.CharField(max_length=100, verbose_name='Специализация')
    experience = models.PositiveIntegerField(verbose_name='Опыт (лет)')
    photo = models.ImageField(upload_to='coaches/photos/', verbose_name='Фото')
    biography = models.TextField(verbose_name='Биография', blank=True)

    def __str__(self):
        return self.full_name

    def get_slug(self):
        return self.full_name.lower().replace(' ', '-')

class Schedule(models.Model):
    coach = models.ForeignKey(Coach, on_delete=models.CASCADE, related_name='schedules')
    day = models.CharField(max_length=20, verbose_name='День недели')
    time = models.CharField(max_length=50, verbose_name='Время')
    location = models.CharField(max_length=100, verbose_name='Место проведения')

    def __str__(self):
        return f"{self.day} — {self.time} ({self.location})"
