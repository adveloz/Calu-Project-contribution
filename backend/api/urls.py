from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'props', views.PropViewSet)
router.register(r'reviews', views.ReviewsViewSet)
router.register(r'faq', views.FaqViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.LoginView.as_view(), name= 'login'),
]