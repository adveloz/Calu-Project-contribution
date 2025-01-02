import os
from pathlib import Path
from dotenv import load_dotenv, find_dotenv
from django.core.exceptions import ImproperlyConfigured

# Load .env file from root directory
load_dotenv(find_dotenv())

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

def get_env_variable(var_name):
    value = os.getenv(var_name)
    if value is None:
        raise ImproperlyConfigured(f"Set the {var_name} environment variable")
    return value

SECRET_KEY = get_env_variable('DJANGO_SECRET_KEY')

DEBUG = os.getenv('DEBUG', '0') == '1'

# REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ],
    'URL_FIELD_NAME': 'url',
    'DEFAULT_VERSIONING_CLASS': 'rest_framework.versioning.NamespaceVersioning',
}

# Force Django to use the correct domain and port for URLs
USE_X_FORWARDED_PORT = True

# Use X-Forwarded-Host header from Nginx
USE_X_FORWARDED_HOST = True

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

FORCE_SCRIPT_NAME = ''

ALLOWED_HOSTS = [
    '*',
    # 'localhost',
    # '127.0.0.1',
    # '172.16.238.5',
    # 'inmobiliariacalu.com',
    # 'www.inmobiliariacalu.com',
    # 'https://www.inmobiliariacalu.com'
]

# CORS settings
# CORS_ALLOW_ALL_ORIGINS = True  # to True for testing
# If you need to allow cookies to be sent with requests
# CORS_ALLOW_CREDENTIALS = False  # To False for testing
# CORS_ALLOWED_ORIGINS = [
    # Access api though nginx localhost
    # "http://localhost:82",
    # "http://127.0.0.1:82",
    
    # Access api though django localhost 
    # "http://localhost:8000",
    # "http://127.0.0.1:8000",
    
    # React localhost
    # "http://localhost:3000",
    # "http://127.0.0.1:3000",
    
    # localhost
    # "http://localhost",
    # "http://127.0.0.1",
    # "http://172.16.238.4",
     
    # "https://inmobiliariacalu.com",
    # "https://www.inmobiliariacalu.com",
    # "http://inmobiliariacalu.com",
    # "http://www.inmobiliariacalu.com",
    
# ]

# Application definition
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    'rest_framework',
    "api",
    # 'corsheaders',
]

MIDDLEWARE = [
    # 'corsheaders.middleware.CorsMiddleware',  
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

SESSION_COOKIE_SECURE = True

CSRF_COOKIE_SECURE = True

# False so JS can read it
CSRF_COOKIE_HTTPONLY = False

CSRF_USE_SESSIONS = False

CSRF_COOKIE_SAMESITE = 'Lax'

CSRF_TRUSTED_ORIGINS = [
    "http://127.0.0.1:82",
    "http://localhost:82",
    "http://inmobiliariacalu.com",
    "http://www.inmobiliariacalu.com",
    "https://inmobiliariacalu.com",
    "https://www.inmobiliariacalu.com",
]

# Add security settings
# SECURE_SSL_REDIRECT = False
# SESSION_COOKIE_SECURE = True
# CSRF_COOKIE_SECURE = True
# SECURE_BROWSER_XSS_FILTER = True
# SECURE_HSTS_SECONDS = 31536000  # 1 year
# SECURE_HSTS_INCLUDE_SUBDOMAINS = True
# SECURE_HSTS_PRELOAD = True
# SECURE_CONTENT_TYPE_NOSNIFF = True

ROOT_URLCONF = "rest_api.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "rest_api.wsgi.application"

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': get_env_variable('DB_NAME'),
        'USER': get_env_variable('DB_USER'),
        'PASSWORD': get_env_variable('DB_PASSWORD'),
        'HOST': 'postgres', # Service name for docker compose
        'PORT': '5432',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "es"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

# I don't need this, I'm serving static files with nginx
# STATICFILES_DIRS = [
#     BASE_DIR / 'static',
#     BASE_DIR / 'static/react',
# ]

STATIC_URL = '/staticfiles/'

STATIC_ROOT = BASE_DIR / 'staticfiles'

# Media files (user uploaded files)

# This matches your nginx configuration
MEDIA_URL = '/static/media/'  
# This matches the mounted volume in Django container
MEDIA_ROOT = BASE_DIR / 'assets'  

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
