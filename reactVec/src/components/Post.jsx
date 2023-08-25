const Post = ({value:{title, date, tag, details}}) => {
  return (
    <div class="bg-[#fff] p-[1rem] rounded-sm drop-shadow-md">
      <p class="text-[32px] font-bold ">{title}</p>
      <p class="text-[20px] pr-[15px] text-[#1e293b] my-[1rem]">
        <span>{date}</span>
        <span class="postBar"></span>
        <span>{tag}</span>
      </p>
      <p class="text-[#1e293b] text-[1.3rem]">
        {details}
      </p>
    </div>
  );
};

export default Post;
