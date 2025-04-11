
from django.urls import path
from .views import CoachListView, CoachDetailView

urlpatterns = [
    path('coaches/', CoachListView.as_view(), name='coach-list'),
    path('coaches/<int:id>/', CoachDetailView.as_view(), name='coach-detail'),
]
