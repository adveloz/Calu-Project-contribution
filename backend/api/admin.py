from django.contrib import admin
from django.contrib import messages
from django.urls import path
from django.utils.html import format_html
from django.shortcuts import redirect, get_object_or_404
from .models import propModel, reviewModel, faqModel
from .views import admin_upload_file

class TooltipTextAdmin(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        for field in form.base_fields:
            if form.base_fields[field].help_text:
                form.base_fields[field].widget.attrs.update({'title': form.base_fields[field].help_text})
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

class ReviewAdmin(TooltipTextAdmin):
    list_display = ('name', 'job', 'title', 'rating_stars')
    list_filter = ('rating',)
    search_fields = ('name', 'job', 'title', 'review')
    # ordering = ('-rating', 'name')
    
    def rating_stars(self, obj):
        stars = '★' * obj.rating + '☆' * (5 - obj.rating)
        return format_html(
            '<span style="color: #FE6D36; font-size: 1.2em;">{}</span>',
            stars
        )
    rating_stars.short_description = 'Calificación'
    rating_stars.admin_order_field = 'rating'
    
class FaqAdmin(TooltipTextAdmin):
    list_display = ('index', 'question', 'answer')
    list_filter = ('question',)
    search_fields = ('question', 'answer')

class CustomAdminSite(admin.AdminSite):
    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('api/upload/', self.admin_view(admin_upload_file), name='admin-upload-file'),
        ]
        return custom_urls + urls

# Crear una instancia del admin site personalizado
admin_site = CustomAdminSite(name='admin')

# Registrar los modelos con el admin site personalizado
class Combine_Tooltip_Publish(TooltipTextAdmin, PublishActionAdmin):
    list_display = ('id', 'title', 'location', 'publish_action')
    list_filter = ('location',)
    search_fields = ('title', 'location')
    change_form_template = 'admin/custom_upload.html'

# Registrar los modelos
admin_site.register(propModel, Combine_Tooltip_Publish)
admin_site.register(reviewModel, ReviewAdmin)
admin_site.register(faqModel, FaqAdmin)