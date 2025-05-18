from rest_framework import viewsets
from .serializer import PropSerializer, ReviewsSerializer, FaqSerializer, UserSerializer
from .models import propModel, reviewModel, faqModel
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from django.contrib import admin
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.admin.views.decorators import staff_member_required
from django.core.files.storage import default_storage
import os


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

@staff_member_required
@csrf_exempt
def admin_upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        file = request.FILES['file']
        # Guardar el archivo en la carpeta media
        file_path = default_storage.save(f'uploads/{file.name}', file)
        return JsonResponse({
            'success': True,
            'file_path': file_path
        })
    return JsonResponse({
        'success': False,
        'error': 'No se recibió ningún archivo'
    }, status=400)