
from rest_framework import generics
from .models import Coach
from .serializers import CoachSerializer

class CoachListView(generics.ListAPIView):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer

class CoachDetailView(generics.RetrieveAPIView):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer
    lookup_field = 'id'
