from rest_framework import serializers
from .models import propModel, reviewModel, faqModel
from django.contrib.auth.models import User

class PropSerializer(serializers.ModelSerializer):
    class Meta:
        model = propModel
        fields = '__all__'

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = reviewModel
        fields = '__all__'

class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = faqModel
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']