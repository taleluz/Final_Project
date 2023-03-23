from base.views.order_views import addOrderItems, getMyOrders, getOrderById, getOrders, updateOrderToDelivered, updateOrderToPaid
from base.views.product_views import ProductView
from base.views.login_views import register
from base.serializers import MyTokenObtainPairView
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('products/', ProductView.as_view() ,name='product_list'),
    path('login/', MyTokenObtainPairView.as_view()),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', register, name='register'),
    # admin : not neccessery
    path('getorders', getOrders, name='orders'),
    # not checked
    path('add/', addOrderItems, name='add'),
    # work
    path('myorders/', getMyOrders, name='myorders'),
    # not checked:
    path('<str:pk>/deliver/', updateOrderToDelivered, name='order-delivered'),
    path('<str:pk>/', getOrderById, name='user-order'),
    path('<str:pk>/pay/', updateOrderToPaid, name='pay'),


]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
