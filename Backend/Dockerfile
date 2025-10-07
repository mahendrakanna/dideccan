# Backend/Dockerfile
FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install dependencies
COPY dist/requirement.txt .
RUN pip install --no-cache-dir -r requirement.txt

# Copy backend source
COPY dist /app

EXPOSE 8000

# Run with Gunicorn
CMD ["gunicorn", "deccenindiaweb_backend.wsgi:application", "--bind", "0.0.0.0:8000"]
