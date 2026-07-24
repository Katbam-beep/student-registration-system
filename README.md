# Student Registration System

## Project Description
This is a simple Student Registration System developed using HTML, CSS, and JavaScript. It allows students to enter their registration details through a user-friendly web interface.

## Features
- Student registration form
- Input validation using HTML5
- Success message after registration
- Responsive and clean user interface

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Docker
- Nginx

## How to Run

### Without Docker
Open the `index.html` file in any modern web browser.

### With Docker

Build the image:

```bash
docker build -t student-registration-app .
```

Run the container:

```bash
docker run -d -p 8080:80 student-registration-app
```

Visit:

```
http://localhost:8080
```

## Author

Micah Salvation Katbam
