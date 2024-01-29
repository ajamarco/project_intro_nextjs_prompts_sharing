//components
import PromptCard from "./PromptCard";

const PromptCardList = ({ ...props }) => {
  return (
    <div className="mt-16 prompt_layout">
      {props.data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={props.handleTagClick}
          handleEdit={props.handleEdit ? props.handleEdit : () => {}}
          handleDelete={props.handleDelete ? props.handleDelete : () => {}}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
