import React from "react";

const projects = [
  {
    id: 1,
    name: "Algorithm Visualizer",
    description: "This app is a sorting algorithm visualizer. The front end is created using React to build a dynamic user interface, Tailwind CSS for styling, and JavaScript to implement the algorithms. You can choose to generate new data to sort and choose between bubble sorting, merge sorting, and selection sorting. Once the sorting is complete the app will show you the result for 5 seconds before restting to the original random assortment.",
    url: "https://jessesim.github.io/algorithm-visualizer/",
    embedUrl: "https://jessesim.github.io/algorithm-visualizer/"
  },
  {
    id: 2,
      name: "Chat App",
      description: "This is a real-time chat application that uses an HTML frontend that connects to WebSocket in the backend to display send and receive messages from one client to another instantly. WebSocket is being hosted by Elastic Beanstalk through AWS. *Please do not include any personal/sensitive information as the site is using http therefore is unsecure.",
      url: "http://websocket-server-env.eba-crjzue9b.us-east-1.elasticbeanstalk.com/", 
      screenshot: "img/chat-app-ss.png" 
  },
  {
    id: 3,
    name: "Weather App",
    description: "A webpage that will take the name of a city in the search bar and when Get Weather is selected it will display current weather data in the city.",
    url: "https://jessesim.github.io/weather-app/",
    embedUrl: "https://jessesim.github.io/weather-app/"
  },
  {
    id: 4,
    name: "Movie Search",
    description: "A webpage offering movie search results. Type the name of a movie or tv-show into the search bar and select submit. Suggestions most relevant to your query will be displayed. If your search yields no results try another title.",
    url: "https://jessesim.github.io/movie-search/",
    embedUrl: "https://jessesim.github.io/movie-search/"
  },
  {
    id: 5,
    name: "Quiz App",
    description: "A simple quiz application using HTML, CSS, and JavaScript. When answers are clicked their radio is selected. When the quiz is submitted questions with correct answers selected will light up green and incorrect answers red. The total number of correct answers out of the total questions are also displayed at the end.",
    url: "https://jessesim.github.io/quiz-app/",
    embedUrl: "https://jessesim.github.io/quiz-app/"
  }
];

function Portfolio() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <header className="bg-gray-800 text-center py-6">
        <h1 className="text-3xl font-bold">Jesse's Projects</h1>
        <p className="text-lg mt-2">Here is a portfolio of my web applications. Applications with running with a backend can be viewed by clicking "View Full Project"</p>
      </header>

      {/* Projects Section */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Project Title */}
            <h3 className="bg-gray-700 text-center text-lg font-bold py-2">
              {project.name}
            </h3>

            {/* Screenshot or Embedded Project */}
            {project.screenshot ? (
              <img
                src={project.screenshot}
                alt={`${project.name} Screenshot`}
                className="w-full h-96 object-cover"
              />
            ) : (
              <iframe
                src={project.embedUrl}
                title={project.name}
                className="w-full h-96 border-none"
              ></iframe>
            )}

            {/* Project Description */}
            <div className="p-4 flex-grow">
              <p className="text-sm">{project.description}</p>
            </div>

            {/* Open Project Button */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 font-bold transition-colors duration-300 mt-auto"
            >
              View Full Project
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;