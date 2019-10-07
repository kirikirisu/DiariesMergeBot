import Octokit from '@octokit/rest';
import dotenv from 'dotenv';
dotenv.config();

const octokit = Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: 'kirikirisu',
});


const run = async () => {
  const { data: response } = await octokit.pulls.list({
    owner: process.env.OWNER,
    repo: process.env.REPO,
  }).catch(e => console.error(e));

  let pulls = [];
  for (let item of response) {
    pulls.push(item.number);
  }
  return (pulls);
}

export default run;
