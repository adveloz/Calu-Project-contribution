from rest_framework import viewsets
from .serializer import PropSerializer, ReviewsSerializer, FaqSerializer
from .models import propModel, reviewModel, faqModel


class PropViewSet(viewsets.ModelViewSet):
    queryset = propModel.objects.all()
    serializer_class = PropSerializer

class ReviewsViewSet(viewsets.ModelViewSet):
    queryset = reviewModel.objects.all()
    serializer_class = ReviewsSerializer

class FaqViewSet(viewsets.ModelViewSet):
    queryset = faqModel.objects.all()
    serializer_class = FaqSerializer