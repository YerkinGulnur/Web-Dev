from django.urls import path
import rest_framework_jwt.views
from . import views
from .views import *
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

r = routers.DefaultRouter()
r.register('movie2', MovieModelViewSet)

urlpatterns = [
    path('login/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('genres/', genres_list),
    path('genres/<int:genre_id>/', genres_movies),
    path('movies/', views.movies_list, name='movies_list'),
    path('movies/<int:movie_id>/', views.movies_list, name='movie_detail'),
    path('movies/<int:movie_id>/comments/', CommentsListAPIView.as_view()),
    path('movies/<int:movie_id>/comments/<int:pk>/', CommentDetailAPIView.as_view()),
    path('users/', UsersListAPIView.as_view()),
    path('users/<int:pk>/', UserDetailAPIView.as_view()),
    path('comments/', CommentsListAPIView.as_view()),
    path('comments/<int:pk>/', CommentDetailAPIView.as_view())
]

urlpatterns += r.urls