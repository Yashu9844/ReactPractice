const GitModal = ({ data }) => {
    // Handle when `data` is not available yet or has errors
    if (!data) {
      return <p className="text-center text-xl">Loading...</p>;
    }
  
    if (data.message === "Not Found") {
      return <p className="text-center text-xl text-red-500">User not found!</p>;
    }
  
    return (
      <div className="h-[80%] w-[90%] rounded border border-red-500 p-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center p-3">Git Modal</h1>
          <img
            src={data.avatar_url}
            alt={`${data.name || data.login}'s avatar`}
            className="w-32 h-32 rounded-full bg-green-500"
          />
        </div>
  
        <div className="flex flex-col justify-center items-center gap-4 text-2xl font-semibold mt-5">
          <h1>User Name: {data.name || data.login}</h1>
          <h1>User Followers: {data.followers}</h1>
          <h1>Following: {data.following}</h1>
          <h1>Public Repos: {data.public_repos}</h1>
        </div>
  
        <div className="text-center mt-5">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    );
  };
  
  export default GitModal;
  