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

  for (let item of response) {
    let num = String(item.number);
    const response = await octokit.pulls.merge({
      owner: process.env.OWNER,
      repo: process.env.REPO,
      pull_number: num,
    }).catch(e => console.error(e));
  }

  console.log('merged');
}

run();
