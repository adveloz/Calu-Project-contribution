from rest_framework import viewsets
from .serializer import PropSerializer, ReviewsSerializer
from .models import propModel, reviewModel


class PropViewSet(viewsets.ModelViewSet):
    queryset = propModel.objects.all()
    serializer_class = PropSerializer

class ReviewsViewSet(viewsets.ModelViewSet):
    queryset = reviewModel.objects.all()
    serializer_class = ReviewsSerializer