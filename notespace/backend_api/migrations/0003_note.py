# Generated by Django 5.0.6 on 2024-05-14 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("backend_api", "0002_alter_diary_author"),
    ]

    operations = [
        migrations.CreateModel(
            name="Note",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("date_created", models.DateTimeField(auto_now_add=True)),
                ("date_updated", models.DateTimeField(auto_now=True)),
                ("title", models.CharField(max_length=100)),
            ],
        ),
    ]
