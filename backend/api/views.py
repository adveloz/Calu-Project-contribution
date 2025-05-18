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
        prop_id = request.POST.get('prop_id')  # Obtener el ID de la propiedad
        
        if not prop_id:
            return JsonResponse({
                'success': False,
                'error': 'No se proporcionó el ID de la propiedad'
            }, status=400)
            
        try:
            # Obtener la propiedad
            prop = propModel.objects.get(id=prop_id)
            
            # Encontrar el primer campo de imagen vacío
            for i in range(1, 31):
                field_name = f'img{i}'
                if not getattr(prop, field_name):
                    # Guardar el archivo en el campo correspondiente
                    setattr(prop, field_name, file)
                    prop.save()
                    return JsonResponse({
                        'success': True,
                        'file_path': getattr(prop, field_name).url,
                        'field_name': field_name
                    })
            
            return JsonResponse({
                'success': False,
                'error': 'No hay más campos de imagen disponibles'
            }, status=400)
            
        except propModel.DoesNotExist:
            return JsonResponse({
                'success': False,
                'error': 'Propiedad no encontrada'
            }, status=404)
            
    return JsonResponse({
        'success': False,
        'error': 'No se recibió ningún archivo'
    }, status=400)