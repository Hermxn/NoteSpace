# Generated by Django 5.0.6 on 2024-05-14 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("backend_api", "0004_note_author"),
    ]

    operations = [
        migrations.AddField(
            model_name="note",
            name="body",
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
