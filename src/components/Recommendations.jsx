import { useEffect, useState } from "react";
import { BadgeCheck } from "lucide-react";
import clsx from "clsx";

const testimonials = [
  {
    quote:
      "“Carl recently took on a game development project that was completely outside his comfort zone and instead of playing it safe, he embraced the challenge heads-on and proudly presented their project right infront of my face. With limited experience, he dove deep, asked the right questions, and showed a kind of grit and passion that’s rare even among seasoned aspiring IT professional. What’s even more impressive about this guy is that he picks up concepts with lightning speed. The rate at which he learns, applies, and innovates is something I never could have imagined at his level. Carl is not just a student. He’s an asset to any team, any project, any future workplace. He is the guy we need in the IT industry!”",
    name: "Kim Navarro",
    title: "IT Professor at STI College Malolos",
  },
  {
    quote:
      "“Carl is an exceptional student and classmate who consistently demonstrates a strong eagerness to learn and grow. His passion for programming is evident in the high quality of his work and his commitment to improving his skills. Carl is not only technically talented but also supportive of his peers, often sharing his knowledge and encouraging collaboration. His dedication and positive attitude make him a valuable asset to any academic or team setting.”",
    name: "Jana Francesca Flojo",
    title: "Classmate at STI College Malolos",
  },
  {
    quote:
      "“Carl is a very approachable and helpful classmate. Whenever I have questions related to coding, he takes the time to explain things clearly and patiently. He’s knowledgeable, easy to talk to, and always willing to help others understand the topic better. Learning with him around has made a big difference in my experience”",
    name: "Shaira Nicole Ramos",
    title: "Classmate at STI College Malolos",
  },
    {
    quote:
      "“I’ve known Carl Justine since junior high school, and from the beginning, he has shown a strong passion for computers and technology. It all started with playing games, which eventually sparked his curiosity about games, software and system. From there, he continued to learn, explore, and develop his skills. We attended the same senior high school, and even though we now go to different colleges, we’ve remained close. Carl is a hands-on, reliable individual who is always willing to help others. Over the years, he has consistently pursued his interest in technology, gaining valuable knowledge and experience along the way. I have no doubt that Carl’s skills, dedication, and positive attitude will make him a great asset in any opportunity within the field of technology.”",
    name: "Raya Bragado",
    title: "IT Student at Pamantasan Ng Lungsod Ng Valenzuela"
  },
];

export default function Recommendations() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const { quote, name, title } = testimonials[index];

  return (
    <div className="bg-neutral-950 rounded-2xl shadow-md border border-neutral-800 p-4 w-full transition-all duration-500 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4 flex gap-2">
          <BadgeCheck className="w-5 h-5 mt-1.5" />
          Recommendations
        </h2>

        <div
          className={clsx(
            "transition-opacity duration-800 ease-in-out",
            fade ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="text-white italic line-clamp-9 md:mb-8 mb-4">
            {quote}
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-700 mb-2" />

      <div className="text-white">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-neutral-400">{title}</p>
      </div>
    </div>
  );
}
