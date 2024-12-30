from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class propModel(models.Model):
    id = models.CharField(max_length= 100, primary_key= True, verbose_name="Identificador", help_text="El identificador de una propiedad, debe ser único, no pueden haber más de una propiedad con un mismo identificador.")
    title = models.CharField(max_length= 100, null=True, blank=True, verbose_name="Título", help_text="El título o nombre de la propiedad.")
    description = models.TextField(max_length=2000, null=True, blank=True, verbose_name="Descripción", help_text="La descripción de la propiedad.")
    location = models.CharField(max_length=200, null=True, blank=True, verbose_name="Ubicación", help_text="La ubicación geográfica por zona de la propiedad.")
    surface = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(10000)], null=True, blank=True, verbose_name="Superficie", help_text="La superficie o área de la propiedad en metros cuadrados.")
    type = models.CharField(max_length=50, null=True, blank=True, verbose_name="Tipo", help_text="El tipo de propiedad (piso, departamento, chalet, vivienda, etc.)")
    price = models.DecimalField(max_digits= 15, decimal_places= 2, null=True, blank=True, verbose_name="Precio", help_text="El precio o valor de la propiedad en euros.")
    numberOfRooms = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], null=True, blank=True, verbose_name="Habitaciones", help_text="El número de habitaciones de la propiedad.")
    doubleBedRooms = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], null=True, blank=True, verbose_name="Habitaciones dobles", help_text="El número de habitaciones dobles de la propiedad.")
    simpleBedRooms = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], null=True, blank=True, verbose_name="Habitaciones simples", help_text="El número de habitaciones simples de la propiedad.")
    numberOfBathR = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], null=True, blank=True, verbose_name="Baños", help_text="El número de baños de la propiedad.")
    fullBathrooms = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], null=True, blank=True, verbose_name="Baños completos", help_text="El número de baños completos de la propiedad.")
    simpleBathrooms = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], null=True, blank=True, verbose_name="Baños simples", help_text="El número de baños simples de la propiedad.")
    img1 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 1")
    img2 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 2")
    img3 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 3")
    img4 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 4")
    img5 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 5")
    img6 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 6")
    img7 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 7")
    img8 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 8")
    img9 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 9")
    img10 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 10")
    img11 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 11")
    img12 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 12")
    img13 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 13")
    img14 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 14")
    img15 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 15")
    img16 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 16")
    img17 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 17")
    img18 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 18")
    img19 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 19")
    img20 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 20")
    img21 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 21")
    img22 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 22")
    img23 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 23")
    img24 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 24")
    img25 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 25")
    img26 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 26")
    img27 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 27")
    img28 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 28")
    img29 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 29")
    img30 = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen 30")
    mapImg = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Imagen de mapa")
    garage = models.BooleanField(default=False, verbose_name="Garaje")
    terraza = models.BooleanField(default=False, verbose_name="Terraza")
    trastero = models.BooleanField(default=False, verbose_name="Trastero")
    garden = models.BooleanField(default=False, verbose_name="Jardín")
    elevator = models.BooleanField(default=False, verbose_name="Ascensor")
    pool = models.BooleanField(default=False, verbose_name="Piscina")
    balcon = models.BooleanField(default=False, verbose_name="Balcón")
    plazaGarage = models.BooleanField(default=False, verbose_name="Plaza Garaje")
    forSale = models.BooleanField(default=False, verbose_name="Para Venta")
    clientSale = models.BooleanField(default=False, verbose_name="Cliente Venta")
    is_published = models.BooleanField(default=False, verbose_name="Publicado")

    class Meta:
        verbose_name = "Propiedad"
        verbose_name_plural = "Propiedades"
        
    def __str__(self):
        return f"{self.id} - {self.title or 'Propiedad sin título'} - {self.location or 'Sin ubicación'} - {'publicado' if self.is_published else 'no publicado'}"

class reviewModel(models.Model):
    name = models.CharField(max_length=100, primary_key= True, verbose_name="Nombre", help_text="Introduzca un nombre de cliente.")
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)], verbose_name="Calificación", help_text="Introduzca una calificación entre 1 y 5.")
    job = models.CharField(max_length= 50, verbose_name="Profesión", help_text="Introduzca la profesión del cliente.")
    title = models.CharField(max_length= 100, verbose_name="Título", help_text="Introduzca un título.")
    review = models.TextField(max_length= 300, verbose_name="Comentario", help_text="Introduzca un comentario.")
    img = models.ImageField(upload_to='', default='', null=True, blank=True, verbose_name="Foto del cliente")
    
    class Meta:
        verbose_name = "Reseña"
        verbose_name_plural = "Reseñas"
        
    def __str__(self):
        return f"{self.name} - {self.rating or 'Sin calificación'} - {self.job or 'Sin profesión'}"

class faqModel(models.Model):
    index = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5000)], primary_key=True, verbose_name="Índice", help_text="Introduzca un índice.")
    question = models.CharField(max_length=300, verbose_name="Pregunta", help_text="Introduzca una pregunta.")
    answer = models.TextField(max_length=2000, verbose_name="Respuesta", help_text="Introduzca una respuesta.")

    class Meta:
        verbose_name = "Pregunta Frecuente"
        verbose_name_plural = "Preguntas Frecuentes"
        
    def __str__(self):
        return f"{self.index} - {self.question}"