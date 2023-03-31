import { TagsInput } from "react-tag-input-component";

interface Props {
  tags: string[];
  setTags: (tags: string[]) => void;
}

function Section4(props: Props) {
  const { tags, setTags } = props;

  return (
    <div className="my-4 w-full">
      <h2 className="text-lg font-bold mb-2">Research Interests</h2>
      <p className="text-gray-600 text-sm mb-8 dark:text-gray-400">
        Please list your research interests using relevant keywords or tags.
        This information will help us suggest articles to you based on your
        interests and help other users find your articles when searching for
        similar topics.
      </p>
      <div className="w-full max-w-md">
        <TagsInput
          value={tags}
          onChange={setTags}
          name="fruits"
          placeHolder="Type your interests"
          classNames={
            {
              // styles are not working for "input"
              // input: "border border-gray-300 rounded- w-full text-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200",
              tag: "bg-gray-200 text-gray-700 rounded-md text-sm dark:bg-gray-700 dark:text-gray-200",
            }
          }
        />
      </div>
    </div>
  );
}

export default Section4;
