//import components
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discovery and share AI prompts
        <br className="max-md:hidden" /> {/* Hide on mobile */}
        <span className="orange_gradient text-center">With People all over the world</span>
      </h1>
      <p className="desc text-center">Promptland is an AI prompt sharing platform. It allows you to share your AI prompts with the world and discover new ones.</p>
      <Feed />
    </section>
  );
};

export default Home;
