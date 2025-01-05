import React, { useState, useEffect } from "react";

const GitModal = ({ data }) => {
  const [totalCommits, setTotalCommits] = useState(null);

  useEffect(() => {
    const fetchTotalCommits = async () => {
      if (!data || !data.repos_url) return;

      try {
        const repoResponse = await fetch(data.repos_url);
        const repositories = await repoResponse.json();

        let commitCount = 0;

        for (const repo of repositories) {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${data.login}/${repo.name}/commits?per_page=1`
          );
          const commits = await commitsResponse.headers.get("Link");

          if (commits && commits.includes("rel=\"last\"")) {
            const match = commits.match(/&page=(\d+)>; rel="last"/);
            if (match && match[1]) {
              commitCount += parseInt(match[1], 10);
            }
          }
        }

        setTotalCommits(commitCount);
      } catch (error) {
        console.error("Error fetching total commits:", error);
      }
    };

    fetchTotalCommits();
  }, [data]);

  if (!data) return <p>Loading...</p>;
  if (data.message === "Not Found") return <p>User not found!</p>;

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
        <h1>
          Total Commits: {totalCommits !== null ? totalCommits : "Calculating..."}
        </h1>
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
