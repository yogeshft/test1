const courses = [
  {
    title: "Introduction to Programming",
    description: "Learn the basics of programming and algorithmic thinking.",
    people: 150,
    duration: "6 weeks",
    lecture: 12,
    price: 49.99,
    rating: 4.5,
    img: "intro_programming.jpg",
    category: ["all", "Programming"],
  },
  {
    title: "Web Development Fundamentals",
    description:
      "Explore the fundamentals of web development, HTML, CSS, and JavaScript.",
    people: 200,
    duration: "8 weeks",
    lecture: 16,
    price: 79.99,
    rating: 4.8,
    img: "web_dev_fundamentals.jpg",
    category: ["all", "Web Development"],
  },
  {
    title: "Data Science for Beginners",
    description:
      "An introduction to data science and basic data analysis techniques.",
    people: 120,
    duration: "10 weeks",
    lecture: 20,
    price: 99.99,
    rating: 4.2,
    img: "data_science_beginners.jpg",
    category: ["all", "Data Science"],
  },
  {
    title: "Advanced JavaScript Concepts",
    description:
      "Dive deeper into JavaScript with advanced concepts like closures and prototypes.",
    people: 80,
    duration: "4 weeks",
    lecture: 8,
    price: 59.99,
    rating: 4.7,
    img: "advanced_js_concepts.jpg",
    category: ["all", "Programming"],
  },
  {
    title: "Responsive Web Design",
    description:
      "Master the art of creating responsive and mobile-friendly web designs.",
    people: 180,
    duration: "6 weeks",
    lecture: 14,
    price: 89.99,
    rating: 4.6,
    img: "responsive_web_design.jpg",
    category: ["all", "Web Development"],
  },
  {
    title: "Machine Learning Basics",
    description:
      "An overview of machine learning principles and basic algorithms.",
    people: 100,
    duration: "12 weeks",
    lecture: 24,
    price: 129.99,
    rating: 4.0,
    img: "machine_learning_basics.jpg",
    category: ["all", "Data Science"],
  },
];

// tabs

document
  .getElementById("courses-category-list")
  .addEventListener("click", function (e) {
    if (e.target.id === "all") {
      let changeBorderBottom = document.getElementById("all");
      changeBorderBottom.classList.add("course-active");
    }
    if (e.target.id === "business") {
      let changeBorderBottom = document.getElementById("business");
      changeBorderBottom.classList.add("course-active");
      // document.getElementById("all").classList.remove("course-active");
    }
  });
// todo: create an array, for loop 
