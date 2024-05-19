from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Diary(models.Model):
    author: models.ForeignKey = models.ForeignKey(User, on_delete=models.CASCADE)
    title: models.CharField = models.CharField(max_length=100)
    # image:

    def __str__(self) -> str:
        return f"Author: {self.author}, Title: {self.title}"


class DiaryNote(models.Model):
    diary: models.ForeignKey = models.ForeignKey(
        Diary, related_name="entries", on_delete=models.CASCADE
    )
    note: models.CharField = models.CharField(max_length=350)
    date: models.DateField = models.DateTimeField(auto_now_add=True)
    # image:


class Note(models.Model):
    date_created: models.DateField = models.DateTimeField(auto_now_add=True)
    date_updated: models.DateField = models.DateTimeField(auto_now=True)
    author: models.ForeignKey = models.ForeignKey(User, on_delete=models.CASCADE)
    title: models.CharField = models.CharField(max_length=100)
    body: models.CharField = models.CharField(max_length=500)

    def __str__(self) -> str:
        return f"Author: {self.author}, Title: {self.title}, Date created: {self.date_created}"
