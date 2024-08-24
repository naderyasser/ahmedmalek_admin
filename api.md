

# ScholarSync API Documentation

Welcome to the ScholarSync API documentation! This API allows you to interact with user and course information in the ScholarSync system.

## Base URL
[https://scholarsync.e3lanotopia.software/](https://scholarsync.e3lanotopia.software/)

## Endpoints

### 1. Get All Users
- **Endpoint:** `/api/th/get_all_users`
- **Method:** `GET`
- **Description:** Retrieve information for all users.
- **Response:**
  ```json
  {
    "users": [
      {
        "user_id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone_number": "123-456-7890",
        "academic_year": 2023,
        "academic_section": "A",
        "city": "Example City"
      },

    ]
  }
  ```

### 2. Get Users by Year, Section, and Location
- **Endpoint:** `/api/th/get_users/<int:year>/<section>/<location>`
- **Method:** `GET`
- **Description:** Retrieve users based on academic year, section, and location.
- **Parameters:**
  - `year` (int): Academic year
  - `section` (str): Academic section
  - `location` (str): City location
- **Response:**
  ```json
  {
    "users": [
      {
        "user_id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone_number": "123-456-7890",
        "academic_year": 2023,
        "academic_section": "A",
        "city": "Example City"
      },

    ]
  }
  ```

### 3. Get All Courses
- **Endpoint:** `/api/th/get_all_courses`
- **Method:** `GET`
- **Description:** Retrieve information for all courses.
- **Response:**
  ```json
  {
    "courses": [
      {
        "course_id": 1,
        "course_name": "Computer Science",
        "course_code": "CS101",

      },

    ]
  }
  ```

### 4. Search Users
- **Endpoint:** `/api/th/search/<search>`
- **Method:** `GET`
- **Description:** Search for users based on various criteria (name, email, phone number, etc.).
- **Parameters:**
  - `search` (str): Search query
- **Response:**
  ```json
  {
    "users": [
      {
        "user_id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone_number": "123-456-7890",
        "academic_year": 2023,
        "academic_section": "A",
        "city": "Example City"
      },
 
    ]
  }
  ```


# API Documentation for Course Management

## Add Course

### Endpoint
```
POST /api/th/add_course
```

### Request

- **Content-Type**: application/json

#### Parameters

| Name               | Type    | Description                             |
|--------------------|---------|-----------------------------------------|
| name               | string  | Name of the course                       |
| academicYear       | string  | Academic year of the course             |
| academicSection    | string  | Academic section of the course          |
| price              | float   | Price of the course                     |
| isFree (optional)  | boolean | Indicates if the course is free (default: false) |
| bannerUrl          | string  | URL of the banner for the course        |
| category           | string  | Category of the course                  |

### Response

- **Content-Type**: application/json

#### Success

```json
{
  "success": true
}
```

## Add Lesson

### Endpoint
```
POST /api/th/add_lesson
```

### Request

- **Content-Type**: application/json

#### Parameters

| Name               | Type    | Description                             |
|--------------------|---------|-----------------------------------------|
| name               | string  | Name of the lesson                       |
| courseId           | integer | ID of the course to which the lesson belongs |
| iframeCode         | string  | Embed code or URL for the lesson        |
| Ltype              | string  | Type of the lesson                      |

### Response

- **Content-Type**: application/json

#### Success

```json
{
  "success": true
}
```

---

## Edit Course Information

### Endpoint
```
POST /api/th/edit_course/<int:id>
```

### Request

- **Content-Type**: application/json

#### Parameters

```json
{
  "name": "New Course Name",
  "academic_year": "New Academic Year",
  "academic_section": "New Academic Section",
  "price": 29.99,
  "is_free": true,
  "banner_url": "https://example.com/banner",
  "category": "New Category"
}
```

### Response

- **Content-Type**: application/json

#### Success

```json
{
  "success": true
}
```

## Delete Course

### Endpoint
```
GET /api/th/delete_course/<int:id>
```

### Response

- **Content-Type**: application/json

#### Success

```json
{
  "success": true
}
```

## Get Lessons

### Endpoint
```
GET /api/th/get_lessons/<int:id>
```

### Response

- **Content-Type**: application/json

#### Example

```json
{
  "lessons": [
    {
      "name": "Lesson 1",
      "iframeCode": "https://example.com",
      "Ltype": "Video",
      "lessonTime": "2024-03-01T12:00:00Z"
    },
    // ... (more lessons)
  ]
}
```

## Edit Lesson

### Endpoint
```
POST /api/th/edit_lesson/<int:id>
```

### Request

- **Content-Type**: application/json

#### Parameters

```json
{
  "name": "New Lesson Name",
  "iframeCode": "https://new-example.com",
  "Ltype": "Interactive",
  "lessonTime": "2024-03-01T13:30:00Z"
}
```

### Response

- **Content-Type**: application/json

#### Success

```json
{
  "success": true
}
```

## Delete Lesson

### Endpoint
```
GET /api/th/delete_lesson/<int:id>
```

### Response

- **Content-Type**: application/json

#### Success

```json
{
  "success": true
}
```

## Enroll in a Course

### Endpoint
```
POST /api/th/enroll_course
```

### Request

- **Content-Type**: application/json

#### Parameters

```json
{
  "email": "user@example.com",
  "course_id": 123
}
```

### Response

- **Content-Type**: application/json

#### Success

```json
{
  "success": true
}
```


---

# User Management API

## Edit User

Edit user details based on user ID.

- **Endpoint:** `/api/th/edit_user/<int:id>`
- **Method:** `POST`

### Request Parameters

- **id (int):** User ID

### Request Body

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "city": "New York",
  "age": 25,
  "phone_number": "123-456-7890",
  "father_number": "987-654-3210",
  "birthdate": "1999-01-01",
  "academic_year": "Senior",
  "academic_section": "A",
  "profile_img": "https://example.com/profile.jpg"
}
```

### Response

- **Success:**
  ```json
  {
    "success": true
  }
  ```

- **Failure:**
  ```json
  {
    "success": false
  }
  ```

## Delete User

Delete user based on user ID.

- **Endpoint:** `/api/th/delete_user/<int:id>`
- **Method:** `GET`

### Request Parameters

- **id (int):** User ID

### Response

- **Success:**
  ```json
  {
    "success": true
  }
  ```

- **Failure:**
  ```json
  {
    "success": false
  }
  ```

## Change Password

Change the user password based on user ID.

- **Endpoint:** `/api/th/change_password/<int:id>`
- **Method:** `POST`

### Request Parameters

- **id (int):** User ID

### Request Body

```json
{
  "password": "new_password"
}
```

### Response

- **Success:**
  ```json
  {
    "success": true
  }
  ```

- **Failure:**
  ```json
  {
    "success": false
  }
  ```

---


## Send Notification API

### Endpoint

`POST /api/th/send_notification/<int:id>`


### Parameters

- `id` (integer): The unique identifier for the user to whom the notification will be sent.

### Request

- **Method:** POST
- **Headers:** Content-Type: application/json
- **Body:**

```json
{
  "notificashen": "Notification message content",
  "type": "Notification type",
  "url": "URL related to the notification"
}
```

### Responses

- **Success Response:**

  - **Status Code:** 200 OK
  - **Body:**

  ```json
  {
    "success": true
  }
  ```
