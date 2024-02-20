export const projects = [
  {
    id: 1,
    title: "Cookijar",
    subtitle: "React | Bootstrap | JavaScript | CSS | HTML",
    description:
      "CookiJar is a productivity tracking application that gamifies task management. Built with React and JSON server, it allows users to assign point values to tasks and earn rewards upon completion. The application features full CRUD functionality, user authentication, and a responsive design.",
    problem:
      "The challenge was to create an application that allows users to manage tasks and rewards, with a responsive design for various media displays. It required a login and registration page, account-specific resources upon authentication, and CRUD operations for tasks and rewards.",
    solution:
      "CookiJar meets this challenge by allowing users to define their own rewards and point system. Users can create, view, edit, and delete tasks, earning points for each completed task. Accumulated points can be redeemed for user-defined rewards. The application ensures a responsive user experience with Bootstrap and flexboxes, and provides error handling for form submissions and deletions. All user data is stored in a JSON server, making each user's experience unique. This project, my first using React, enhanced my understanding of the framework, REST APIs, and fetch calls for querying APIs.",
    repolink: "https://github.com/kawtarzz/cooki-jar",
    demo: "https://cooki-jar.vercel.app/",
    img: "images/cookijar_02.svg",
  },
  {
    id: 2,
    title: "ShoptheBlock",
    subtitle:
      "React | Firebase | JavaScript | Bootstrap/Reactstrap | C# | .NET Core | SQL Server | CSS | HTML",
    description:
      "A comprehensive Full-Stack E-Commerce platform offering personalized user account privileges. Upon registration, users gain the ability to browse and shop by specific categories or utilize a search function to find desired items. The platform features a user-friendly shopping cart where items can be added and stored as users continue to browse. A seamless checkout process culminates in an order confirmation, enhancing the overall shopping experience.",
    problem:
      "To build a full-stack application with user authentication, full CRUD functionality, and an SQL database. The application should have a login and registration page, allowing users to create, read, update, and delete resources. It should support form-based resource creation and updates, querying options from the database using input selectors (radio, drop-down, check-box), and deleting resources. The application should be responsive, following the Single Responsibility principle and emphasizing modular code.",
    solution:
      "Shop the Block is a full-stack e-commerce site I built as my final project at Nashville Software School. It has full CRUD functionality, allowing users to manage items in their shopping cart and place orders. The app's data structure, designed with DB Diagram, includes multiple one-to-many and many-to-many relationships. User authentication and authorization are handled with Firebase. The tech stack includes React, JavaScript, CSS, HTML, C#, .NET Core, SQL Server, and Bootstrap. This project enhanced my understanding of the React framework, Firebase authentication, and using ADO.NET for building a web API and SQL Server for database creation.",
    repolink: "https://github.com/kawtarzz/shoptheblock-ecomm-fullstack",
    demo: "https://locus-app-f0eb9.web.app/",
    img: "images/shoptheblock.svg",
  },
];
