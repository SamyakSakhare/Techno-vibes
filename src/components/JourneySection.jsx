import React, { useEffect } from "react";

function JourneySection() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    return () => {
      faders.forEach(fader => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, []);

  return (
    <section id="journey" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">The Techno Journey</h2>
        <p className="mt-4 text-gray-400">
          Explore the evolution of techno music, from its origins to its
          current global influence. Experience the sounds, the culture, and
          the community that makes techno more than just a genre—it's a way of
          life.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg fade-in">
            <h3 className="text-xl font-bold">Origins</h3>
            <p className="mt-2 text-gray-300">
              Discover the roots of techno music, tracing back to the
              underground scenes of Detroit and Berlin.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg fade-in">
            <h3 className="text-xl font-bold">Evolution</h3>
            <p className="mt-2 text-gray-300">
              See how techno has evolved, incorporating new styles and sounds
              while staying true to its core.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg fade-in">
            <h3 className="text-xl font-bold">Global Influence</h3>
            <p className="mt-2 text-gray-300">
              Learn about techno's global influence, uniting fans and artists
              across cultures and continents.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default JourneySection;
