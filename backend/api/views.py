from rest_framework import viewsets
from .serializer import PropSerializer, ReviewsSerializer, FaqSerializer, UserSerializer
from .models import propModel, reviewModel, faqModel
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate


class PropViewSet(viewsets.ModelViewSet):
    queryset = propModel.objects.filter(is_published=True)
    serializer_class = PropSerializer

class ReviewsViewSet(viewsets.ModelViewSet):
    queryset = reviewModel.objects.all()
    serializer_class = ReviewsSerializer

class FaqViewSet(viewsets.ModelViewSet):
    queryset = faqModel.objects.all()
    serializer_class = FaqSerializer

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)