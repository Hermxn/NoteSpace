from rest_framework import serializers  # type: ignore

from .models import Diary, DiaryNote, Note


class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Diary
        fields = ["id", "author", "title"]


class DiaryNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiaryNote
        fields = ["id", "diary", "note", "date"]


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = "__all__"
