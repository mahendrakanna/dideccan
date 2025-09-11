from django.db import models

class Registration(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    course = models.CharField(max_length=100)
    resume = models.FileField(upload_to="resumes/")  # stored in MEDIA_ROOT/resumes
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.fullname} - {self.course}"
