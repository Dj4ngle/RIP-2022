# Generated by Django 4.1.2 on 2022-11-08 18:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('printing3d', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='model3d',
            name='image_path',
            field=models.CharField(max_length=50, null=True),
        ),
    ]