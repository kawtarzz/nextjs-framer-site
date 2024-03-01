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
  {
    id: 3,
    title: "Normal Coffee & Donuts",
    subtitle: "Photoshop | Illustrator ",
    description:
      "Style frames for a :15 second ad campaign for a (fictional) boutique coffee and donut shop.",
    problem:
      " The ask required a mid body shot, a close up shot of the character’s hand holding the product, a full body shot and a frame featuring the logo. We were also given the option to add an action shot post logo lockup.",
    solution:
      "Normal Coffee & Donuts demonstrates an illustration style that is personable, straight-forward with just enough whimsy. The style frames ensure the logo and product offering are visible in multiple shots and with a charm and optimism beaming through the backgrounds and contextual exposition.",
    repolink: "",
    demo: "",
    img: "images/locus.svg",
  },
  {
    id: 4,
    title: "Witches & Wizards",
    subtitle: "Photoshop | Illustrator",
    description: "Witches& Wizards",
    problem:
      "The challenge was to create style frames for an animated campaign promotion an adult wizard-themed summer camp.",
    solution:
      " The style frames feature a color palette that is rich and sophisticated, with a touch of whimsy. The characters are depicted in a variety of activities, from potion-making to wand-waving, and the logo is prominently featured in each frame.",
    repolink: "",
    demo: "https://nss-kawtar.netlify.app/",
    img: "images/nss.svg",
  },
  {
    id: 5,
    title: "Kawtar's Portfolio",
    subtitle: "React | JavaScript | CSS | HTML",
    description:
      "A single-page application that provides information about me and my projects. The application features a responsive design and a contact form.",
    problem:
      "The challenge was to create a single-page application that provides information about me and my projects. It required a responsive design for various media displays and a contact form.",
    solution:
      "My portfolio application meets this challenge by providing information about me and my projects. The application ensures a responsive user experience with flexboxes and CSS Grid, and provides error handling for form submissions. This project enhanced my understanding of the React framework and responsive design.",
    repolink: "",
    demo: "https://kawtar-portfolio.netlify.app/",
    img: "images/portfolio.svg",
  },
];
