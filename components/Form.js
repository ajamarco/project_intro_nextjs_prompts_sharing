import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">{type} and share your prompt with the whole world, helping with the creation of new AI prompts.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-10 w-full max-w-2xl glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your Prompt here</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Type your prompt here..."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            tag
            <span className="font-normal"> (#product, #coding, #idea, #cooking)</span>
          </span>
          <input value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value })} placeholder="Type your tags in here" required className="form_input"></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            <button type="button" className="outline_btn">
              Cancel
            </button>
          </Link>
          <button type="submit" className="px-8 py-2 bg-primary-orange rounded-full text-white " disabled={submitting}>
            {submitting ? "Submitting..." : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
