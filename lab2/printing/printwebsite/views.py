from django.shortcuts import render
from datetime import date
from printwebsite.models import Model3d

def modelsList(request):
    return render(request, 'models.html', {'data': {
        'current_date': date.today(),
        'models': Model3d.objects.all()
    }})

def GetModel(request, id):
    return render(request, 'model.html', {'data': {
        'current_date': date.today(),
        'model': Model3d.objects.filter(id=id)[0]
    }})

