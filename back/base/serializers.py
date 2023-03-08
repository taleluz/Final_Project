from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Product

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        return token
 
 
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



# class productSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = '__all__'


class productSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name')
    subcategory = serializers.CharField(source='subcategory.name')
    subimage = serializers.ImageField(source='subcategory.subimage.image')
    proimage = serializers.ImageField(source='proimage.image')

    class Meta:
        model = Product
        fields = [ 'id',
                  'name',
                    'desc',
                    'size_spec',
                     'price',
                     'quantity',
                     'count_in_stock',
                     'category',
                     'subcategory',
                     'subimage', 
                     'proimage']
