import datetime
from django.db import models
from django.contrib.auth.models import User
# from django import forms


class Image(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='Posted_Images')

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=100,default='Coffee Table')

    def __str__(self):
     	return self.name


class Subcategory(models.Model):
    name = models.CharField(max_length=100,default='Table')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subimage = models.ForeignKey(Image, on_delete=models.SET_NULL,null=True,  default=None)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField(null=True,unique=True)
    size_spec = models.TextField(null=True,unique=True)
    price = models.DecimalField(max_digits=4,decimal_places=0,default=0)
    quantity = models.IntegerField(null=True)    
    proimage = models.ForeignKey(Image, on_delete=models.SET_NULL,null=True,  default=None)
    created_time = models.DateTimeField(auto_now_add=True,null=True)
    count_in_stock = models.PositiveIntegerField(blank=True, null=True)
    subcategory = models.ForeignKey(Subcategory, on_delete=models.CASCADE, null=True,  default=None)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
     	return self.name


# class Profile(models.Model):
#     user = models.ForeignKey(User, related_name='profile_set', on_delete=models.CASCADE)
#     firstName = models.CharField(max_length=30,null=False,default="noa")
#     lastname = models.CharField(max_length=30,null=False,default="ruderman")
#     apartment = models.CharField(max_length=100, blank=True)
#     floor = models.CharField(max_length=100, blank=True)
#     street = models.CharField(max_length=100, blank=True)
#     city = models.CharField(max_length=25,null=False,default="Haifa")
#     country = models.CharField(max_length=25,null=False,default="Israel")
#     phone_number = models.CharField(max_length=20, blank=True)
#     zip_code = models.CharField(max_length=10, blank=True)

#     def __str__(self):
#         return self.user.username


# class Order(models.Model):
#     user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
#     date = models.DateField(default=datetime.datetime.now())
#     delivery_details = models.ForeignKey(Profile, on_delete=models.SET_NULL,null=True)
#     total = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
#     payment_method = models.CharField(max_length=20,null=True,blank=True)

#     def __str__(self):
#         return self.user.username


# class OrderDetail(models.Model):
#     product = models.ForeignKey(Products,on_delete=models.SET_NULL,null=True)
#     order  = models.ForeignKey(Order,on_delete=models.CASCADE,null=True)
#     quantity = models.PositiveIntegerField()
#     subtotal = models.DecimalField(max_digits=12, decimal_places=2)


#     class Meta:
#         db_table = 'Orders Detail'


#     def __str__(self):
#         return str(self.product)

# # Create your models here.
# class Product(models.Model):
#     user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
#     desc = models.CharField(max_length=50,null=True,blank=True)
#     price = models.DecimalField(max_digits=5,decimal_places=2)
#     createdTime=models.DateTimeField(auto_now_add=True)
#     fields =['desc','price']
 
#     def __str__(self):
#            return self.desc



# class Gallery(models.Model):
#     user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
#     title = models.CharField(max_length=50)
#     description = models.CharField(max_length=100)
#     image = models.ImageField(null=True,blank=True,default='/placeholder.png')

#     def __str__(self):
#         return self.title



# class Profile(models.Model):
#     # cascade- שתמחוק את היוזר תמחוק גם את הפרופייל שלו
#     user = models.ForeignKey(User, related_name='profile_set', on_delete=models.CASCADE)
#     # user = models.OneToOneField(User, on_delete =models.CASCADE)
#     bio = models.TextField(max_length=500, blank=True)
#     location = models.CharField(max_length=30, blank=True)
#     birth_date = models.DateField(null=True, blank=True)


# class Albums(models.Model):
#     user = models.ForeignKey(User, related_name='albums_set', on_delete=models.CASCADE)
#     desc = models.TextField(max_length=500, blank=True)

# class AlbumsType(models.Model):
#     user = models.ForeignKey(User, related_name='albumstypes_set', on_delete=models.CASCADE)
#     desc = models.TextField(max_length=500, blank=True)
#     catId = models.ForeignKey(Albums, on_delete=models.CASCADE)
