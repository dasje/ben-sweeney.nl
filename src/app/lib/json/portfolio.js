const portfolioDetails = {
  portfolioOverview: "",
  code: {
    codeOverview:
      "Coding has been one of my life-long interests. I started with BBC Basic, writing simple programmes to help choose vacation options for the family, moved through to ActionScript to help manipulate objects in Flash animations, and finally settled on Python. I am always excited to learn the new possibilities of different languages.",
    projects: [
      {
        projectName: "User API",
        link: "https://github.com/dasje/user-api",
        image:
          "https://cdn.icon-icons.com/icons2/602/PNG/512/Gender_Neutral_User_icon-icons.com_55902.png",
        description:
          "This project is an API for adding and fetching users to a database. The API is a POC, therefore the endpoints are limited, and the stored user profile is minimal. The project is built to be scalable, with the message handling, database, and routing handled as separate modules; Koin's dependency injection handling is fantastic for providing this setup. The server is deployable in a Docker container, and Swagger Docs have been used to allow interactive testing of endpoints. For the tests on this project, I also experimented using Test Containers to spin up single use Postgres databases to test the database module.",
        tech: ["Kotlin", "Kotlin Ktor", "Kotlin Koin", "Postgres", "Docker"],
      },
      {
        projectName: "Credit Card Validation API",
        link: "https://github.com/dasje/credit_card_validator",
        image:
          "https://cdn.icon-icons.com/icons2/606/PNG/512/credit-or-debit-card-front_icon-icons.com_56178.png",
        description:
          "This project is an API for validating credit card information. I created it in a containerized environment using Docker, and provided interactive Swagger Docs to manually test the endpoints. The validation patterns (algorithms and regex) are all publically available patterns. Go is a very intuitive language, and the out-the-box libraries seem to be very powerful.",
        tech: ["Go", "Docker"],
      },
      {
        projectName: "Stocks and Shares Portfolio Dashboard",
        link: "https://github.com/ctrl-alt-kris/YC-project",
        image:
          "https://cdn.icon-icons.com/icons2/3405/PNG/512/stocks_map_heat_icon_216144.png",
        description:
          "This was a group project that I worked on with my team at Young Coders. It was a proof of concept that we created in 4 days, with the idea of allowing a user to track the current value of the portfolio using public APIs. My contribution was to the back end, creating the login logic, and database handling.",
        tech: ["Python", "FastAPI", "JavaScript", "React", "Docker"],
      },
    ],
  },
  art: [],
  drawing: [],
  animation: {
    animationOverview:
      "My desire to animate created my interest in coding, since I primarily learned coding to access object manipulation in Adobe Flash. Since then, my interest in animation has expanded greatly, particularly in the area of character animation.",
    projects: [
      {
        itemName: "Dragarama!",
        host: "youtube",
        link: "https://www.youtube.com/embed/xfToliTjxj4?si=cUv_RRX3EfCPXEZE",
        description:
          "Completed in a month. At the time I was binge-watcing RuPaul's drag race, and I was inspired to propose to myself my own animated TV show about crime-fighting drag queens. My intention was to emulate 70's crime-TV style.",
      },
      {
        itemName: "Home Alone",
        host: "youtube",
        link: "https://www.youtube.com/embed/TSliKSDrLjY?si=RBmhZF2tO3IwfqFY",
        description:
          "This was just a fun little project to practice the timing of character moves, pushed to the extreme for comedy.",
      },
      {
        itemName: "Rubber Onion Battle - Lame Theme Park",
        host: "youtube",
        link: "https://www.youtube.com/embed/j8O71HyHIq4?si=p65F81uky_dnIgkE",
        description:
          "Rubber Onion animation hosts a monthly animation battle. Each contestant submits an animation 15 seconds or less on a set theme. This month was 'Lame Theme Park'. This was my first attempt to animate completely by hand. I wanted to rise to the challenge of capturing more subtle emotions and focus on <slightly> more Disney style character movements.",
      },
      {
        itemName: "Rubber Onion Battle - 15 Seconds To Live",
        host: "youtube",
        link: "https://www.youtube.com/embed/X01oNcznybI?si=SLscq161Ra7cZIdE",
        description:
          "Rubber Onion animation hosts a monthly animation battle. Each contestant submits an animation 15 seconds or less on a set theme. This month was '15 Seconds To Live'. Normally I do my animations in Anime/Moho Studio, making use of their exceptional bone-rigging. This was my first attempt to animate in ToonBoom. I opted to hand draw everything; my lack of familiarity with the tools unfortunately gives it a MSPaint quality.",
      },
      {
        itemName: "Rubber Onion Battle - Bad Magic",
        host: "youtube",
        link: "https://www.youtube.com/embed/-4LOL1uwaLw?si=apldsxWnC8GE5NMf",
        description:
          "Rubber Onion animation hosts a monthly animation battle. Each contestant submits an animation 15 seconds or less on a set theme. This month was 'Bad Magic'.",
      },
    ],
  },
};

export default portfolioDetails;
