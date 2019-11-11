from django.urls import path
from first import views

urlpatterns = [
    path('first/', views.first, name='first'),
    path('signup/', views.signup, name='signup'),
]
