const Octokit = require('@octokit/rest');
require('dotenv').config();

const octokit = Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: 'kirikirisu',
});

async function run() {
  const { data: response } = await octokit.pulls.list({
    owner: process.env.OWNER,
    repo: process.env.REPO,
  }).catch(e => console.error(e));

  let pullNumbers = [];
  for (let item of response) {
    pullNumbers.push(item.number)
  }

  for (let number of pullNumbers) {
    let num = String(number);
    const response = await octokit.pulls.merge({
      owner: process.env.OWNER,
      repo: process.env.REPO,
      pull_number: num,
    }).catch(e => console.error(e));
  }

  console.log('All Pull Requests merged!!');
};

run();
