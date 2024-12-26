from django.contrib import admin
from django.contrib import messages
from django.urls import path
from django.utils.html import format_html
from django.shortcuts import redirect, get_object_or_404
from .models import propModel, reviewModel

class TooltipTextAdmin(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        for field in form.base_fields:
            if form.base_fields[field].help_text:
                form.base_fields[field].widget.attrs.update({'title': form.base_fields[field].help_text})
                # Let's remove the help text from below
                form.base_fields[field].help_text = ''  
        return form
    
class PublishActionAdmin(admin.ModelAdmin):
    def publish_action(self, obj):
        if obj.is_published:
            color = 'red'
            action = 'unpublish'
            label = 'Despublicar'
        else:
            color = 'green'
            action = 'publish'
            label = 'Publicar'

        return format_html(
            f'<a class="button" style="background-color: {color}; color: white; padding: 5px 10px; '
            f'text-decoration: none; border-radius: 5px; display: inline-block; width: 100px; '
            f'text-align: center;" href="/admin/api/propmodel/publish/{obj.id}/{action}/">{label}</a>'
        )
        
    publish_action.short_description = 'Visibilidad'
    
    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path(
                'publish/<str:pk>/<str:action>/',
                self.admin_site.admin_view(self.toggle_publish),
                name='propmodel_toggle_publish',
            ),
        ]
        return custom_urls + urls
    
    def toggle_publish(self, request, pk, action):
        obj = get_object_or_404(propModel, id=pk)
        if action == 'publish':
            obj.is_published = True
            messages.success(request, f'{obj.id} ha sido publicado.')
        elif action == 'unpublish':
            obj.is_published = False
            messages.success(request, f'{obj.id} ha sido despublicado.')
        obj.save()
        return redirect(request.META.get('HTTP_REFERER', '/admin/'))

@admin.register(propModel)        
class Combine_Tooltip_Publish(TooltipTextAdmin, PublishActionAdmin):
    list_display = ('id', 'title', 'location', 'publish_action')

admin.site.register(reviewModel, TooltipTextAdmin)
