from rest_framework import serializers
from .models import propModel, reviewModel, faqModel
from django.contrib.auth.models import User
import os

class PropSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        
        image_fields = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10',
                       'img11', 'img12', 'img13', 'img14', 'img15', 'img16', 'img17', 'img18', 'img19', 'img20',
                       'img21', 'img22', 'img23', 'img24', 'img25', 'img26', 'img27', 'img28', 'img29', 'img30',
                       'mapImg']
        
        for field_name in image_fields:
            if field_name in ret and ret[field_name]:
                ret[field_name] = os.path.basename(ret[field_name])
        
        return ret

    class Meta:
        model = propModel
        fields = '__all__'

class ReviewsSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        
        image_fields = ['img']
        
        for field_name in image_fields:
            if field_name in ret and ret[field_name]:
                ret[field_name] = os.path.basename(ret[field_name])
        
        return ret
    
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