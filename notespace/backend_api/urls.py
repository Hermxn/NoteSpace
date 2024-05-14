from django.urls import include, path
from rest_framework.routers import DefaultRouter  # type: ignore

from .views import DiaryNoteViewSet, DiaryViewSet, NoteViewSet

router = DefaultRouter()
router.register(r"diary", DiaryViewSet)
router.register(r"note", NoteViewSet)

urlpatterns = [
    path(
        "diary/<int:dairy_pk>/notes/<int:pk>/",
        DiaryNoteViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
        name="diary",
    ),
    path(
        "diary/<int:dairy_pk>/notes/",
        DiaryNoteViewSet.as_view({"get": "list", "post": "create"}),
        name="diary_note",
    ),
    path("", include(router.urls)),
]
