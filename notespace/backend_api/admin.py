from django.contrib import admin

from .models import Diary, DiaryNote, Note

# Register your models here.


admin.site.register([Diary, DiaryNote, Note])
