"""
URL configuration for rest_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api.views import PropViewSet, ReviewsViewSet, FaqViewSet, LoginView
from api.admin import admin_site  # Importar el admin site personalizado

router = routers.DefaultRouter()
router.register(r'props', PropViewSet)
router.register(r'reviews', ReviewsViewSet)
router.register(r'faqs', FaqViewSet)

urlpatterns = [
    path('admin/', admin_site.urls),  # Usar el admin site personalizado
    path('api/', include(router.urls)),
    path('api/login/', LoginView.as_view(), name='login'),
]
