from django.contrib import admin
from .models import propModel, reviewModel

# Register your models here.

class PropModelAdmin(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        for field in form.base_fields:
            if form.base_fields[field].help_text:
                form.base_fields[field].widget.attrs.update({'title': form.base_fields[field].help_text})
                # Let's remove the help text from below
                form.base_fields[field].help_text = ''  
        return form

admin.site.register(propModel, PropModelAdmin)
admin.site.register(reviewModel)
