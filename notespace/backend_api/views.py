from rest_framework import viewsets  # type: ignore

from .models import Diary, DiaryNote
from .serializer import DiaryNoteSerializer, DiarySerializer

# Create your views here.


class DiaryViewSet(viewsets.ModelViewSet):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer


class DiaryNoteViewSet(viewsets.ModelViewSet):
    serializer_class = DiaryNoteSerializer

    def get_queryset(self):
        diary_pk = self.kwargs.get("dairy_pk")
        return DiaryNote.objects.filter(diary_id=diary_pk)
