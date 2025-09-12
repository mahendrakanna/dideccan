from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.template.loader import render_to_string
from rest_framework import status
# from .models import Registration


@csrf_exempt
def register(request):
    if request.method == "POST":
        fullname = request.POST.get("fullname")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        course = request.POST.get("course")
        resume = request.FILES.get("resume")

        # # Save registration in DB
        # reg = Registration.objects.create(
        #     fullname=fullname,
        #     email=email,
        #     phone=phone,
        #     course=course,
        #     resume=resume,
        # )

        # Render email body
        html_content = render_to_string("emails/registration_email.html", {
            "fullname": fullname,
            "email": email,
            "phone": phone,
            "course": course,
        })

        mail = EmailMessage(
            subject="New Course Registration",
            body=html_content,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.HR_EMAIL],
        )
        mail.content_subtype = "html"

        # Attach resume safely
        if resume:
            resume.open("rb")  # reset file pointer
            mail.attach(
                filename=resume.name,
                content=resume.read(),
                mimetype=resume.content_type or "application/octet-stream"
            )
            resume.close()

        mail.send()

        # return JsonResponse({"message": "Registration successful, email sent to HR!"})
        return JsonResponse({"message":"Invalid or expired token.",
                "message_type":"error",
                "status_code":status.HTTP_400_BAD_REQUEST})

    return JsonResponse({"error": "Invalid request"},status=400)