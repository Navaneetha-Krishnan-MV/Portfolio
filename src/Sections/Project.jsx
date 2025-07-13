import science from "../science-project.jpg";
import jimg from "../jimag.png";
import portimg from "../portfolioimg.png";
import parking from "../parking.png";
import tempfan from "../scivid.mp4";

const PROJECTS = [
    {
        title: "Temperature Based Fan Control System (SCIENCE PROJECT)",
        image: science,
        description:
            "An Arduino-based science project that automatically adjusts fan speed based on ambient temperature, demonstrating practical application of embedded systems.",
        technologies: ["Arduino", "Arduino IDE", "Temperature Sensors", "Cooling Fan"],
        videoLink: tempfan,
    },
    {
        title: "Vehicle Rental System",
        image: jimg,
        description:
            "The Vehicle Rental System is a Java-based application utilizing OOP principles to manage vehicle rentals. It features separate login functionalities for Renters to browse and book vehicles and Owners to list and manage their fleet.",
        technologies: ["Java", "OOPS", "Singleton Class", "Intelligi"],
        link: "https://github.com/Navaneetha-Krishnan-MV/Vehicle-Rental-System",
    },
    {
        title: "Portfolio Website",
        image: portimg,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["Tailwind", "React"],
        link: "https://portfolio-wheat-nine-35.vercel.app/",
    },
    {
        title: "Smart Parking System",
        image: parking,
        description:
            "A comprehensive web application designed to streamline parking management, featuring real-time availability updates and booking functionality.",
        technologies: ["React", "CSS", "Postgresql", "Node.js", "Razorpay"],
        link: "https://parking-orcin-tau.vercel.app/",
    },
];

const Project = () => {
    return (
        <div className="min-h-screen pt-10 bg-black overflow-x-hidden">
            <section id="projects" className="w-full bg-black scroll-mt-20 pb-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Projects
                    </h2>
                </div>

                <div className="pb-4">
                    <div>
                        {PROJECTS.map((project, index) => (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row lg:justify-center items-center lg:items-start ${
                                    index !== PROJECTS.length - 1 ? "mb-8" : ""
                                }`}
                            >
                                <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                                    <img
                                        src={project.image}
                                        width={180}
                                        height={180}
                                        alt={project.title}
                                        className="rounded mx-auto lg:mx-0 object-cover"
                                    />
                                </div>
                                <div className="mx-4 lg:mx-5 w-[calc(100%-2rem)] max-w-xl lg:w-3/4 lg:pl-4">
                                    <h6 className="text-white mb-2 font-semibold">{project.title}</h6>
                                    <p className="mb-4 text-neutral-400">{project.description}</p>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    <div className="mt-4">
                                        {project.videoLink && (
                                            <a
                                                href={project.videoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-400 hover:underline mr-4"
                                            >
                                                Watch Video
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-400 hover:underline"
                                            >
                                                View on GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;




// {
//     title: "Group Photo Attendence System (INNOVOSCENSE)",
//     image: pythonlogo,
//     description:
//         "An innovative system leveraging image processing and machine learning to automate attendance marking from group photographs, enhancing efficiency in large gatherings.",
//     technologies: ["Machine Learning", "Face Recognization", "Python"],
// },