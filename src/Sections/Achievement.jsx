const achievements = [
  {
    title: "3rd Place in YUTHAM",
    description: "Recognized for outstanding performance and innovative ideas in a competitive tech event."
  },
  {
    title: "3rd Prize at KIT College",
    description: "Demonstrated exceptional skills and knowledge in a challenging academic competition."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-black w-full py-24">
      <h2 className="mb-20 text-center">
        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 animate-gradient">
          Achievements
        </span>
      </h2>
      <div className="max-w-5xl  mx-auto bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-xl">
        <ul className="list-disc list-inside space-y-4">
          {achievements.map(({ title, description }, index) => (
            <li key={index} className="text-lg text-gray-300">
              <span className="font-semibold text-green-400">{title}:</span> {description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;