const employees = [
    [
        {
          "id": 1,
          "email": "employee1@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Submit Report",
              "taskDescription": "Prepare and submit the monthly report to the manager.",
              "taskDate": "2025-04-05",
              "category": "Reporting",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Client Meeting",
              "taskDescription": "Attend the meeting with the new client.",
              "taskDate": "2025-04-06",
              "category": "Meeting",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 2,
          "email": "employee2@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Code Review",
              "taskDescription": "Review the pull request for the new feature.",
              "taskDate": "2025-04-05",
              "category": "Development",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
            },
            {
              "taskTitle": "Update Database",
              "taskDescription": "Migrate the database to the new schema.",
              "taskDate": "2025-04-07",
              "category": "Database",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Security Patch",
              "taskDescription": "Apply the latest security patch to the system.",
              "taskDate": "2025-04-08",
              "category": "Security",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
            }
          ]
        },
        {
          "id": 3,
          "email": "employee3@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Product Testing",
              "taskDescription": "Test the new product features before release.",
              "taskDate": "2025-04-05",
              "category": "Testing",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Write Documentation",
              "taskDescription": "Document the latest API changes.",
              "taskDate": "2025-04-06",
              "category": "Documentation",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Fix Bugs",
              "taskDescription": "Resolve the critical bugs reported last week.",
              "taskDate": "2025-04-07",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 4,
          "email": "employee4@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Design Review",
              "taskDescription": "Review the new UI/UX design proposals.",
              "taskDate": "2025-04-08",
              "category": "Design",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Marketing Strategy",
              "taskDescription": "Plan the next quarter's marketing strategy.",
              "taskDate": "2025-04-09",
              "category": "Marketing",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 5,
          "email": "employee5@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Team Training",
              "taskDescription": "Conduct training for the new team members.",
              "taskDate": "2025-04-05",
              "category": "HR",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Budget Analysis",
              "taskDescription": "Analyze the financial budget for the upcoming quarter.",
              "taskDate": "2025-04-06",
              "category": "Finance",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
            },
            {
              "taskTitle": "System Upgrade",
              "taskDescription": "Upgrade the internal systems to the latest version.",
              "taskDate": "2025-04-07",
              "category": "IT",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
            }
          ]
        }
      ]
      
  ]

  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
  ]



 export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))


 }


 export const getLocalStorage = () =>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))


   console.log(employees, admin)
    
 }

   
  