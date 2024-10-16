from rest_framework import serializers
from .models import propModel, reviewModel

class PropSerializer(serializers.ModelSerializer):
    class Meta:
        model = propModel
        fields = '__all__'

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = reviewModel
        fields = '__all__'