from django.contrib import admin
from .models import Restaurant, Dish, Order, Server

admin.site.register(Restaurant)
admin.site.register(Dish)
admin.site.register(Order)
admin.site.register(Server)
