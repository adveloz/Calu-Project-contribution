from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class propModel(models.Model):
    id = models.CharField(max_length= 100, primary_key= True)
    title = models.CharField(max_length= 100)
    description = models.TextField(max_length=2000)
    price = models.DecimalField(max_digits= 15, decimal_places= 2)
    numberOfRooms = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    numberOfBathR = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    area = models.CharField(max_length=100)
    img1 = models.CharField(max_length=200)
    img2 = models.CharField(max_length=200)
    img3 = models.CharField(max_length=200)
    img4 = models.CharField(max_length=200)
    mapImg = models.CharField(max_length=200)

class reviewModel(models.Model):
    name = models.CharField(max_length=100, primary_key= True)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    job = models.CharField(max_length= 50)
    title = models.CharField(max_length= 100)
    review = models.TextField(max_length= 300)
    img = models.CharField(max_length= 100)

