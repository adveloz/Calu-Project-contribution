from django.core.management.utils import get_random_secret_key
from pathlib import Path

def generate_and_save_key():
    secret_key = get_random_secret_key()
    env_path = Path('.env')
    
    if env_path.exists():
        with open(env_path, 'r') as f:
            lines = f.readlines()
            
        secret_key_found = False
        for i, line in enumerate(lines):
            if line.startswith('DJANGO_SECRET_KEY='):
                lines[i] = f'DJANGO_SECRET_KEY={secret_key}\n'
                secret_key_found = True
                break
        
        if not secret_key_found:
            lines.append(f'DJANGO_SECRET_KEY={secret_key}\n')
            
        with open(env_path, 'w') as f:
            f.writelines(lines)
    else:
        with open(env_path, 'w') as f:
            f.write(f'DJANGO_SECRET_KEY={secret_key}\n')

if __name__ == '__main__':
    generate_and_save_key()