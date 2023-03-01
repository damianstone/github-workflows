// install => npm install @actions/core @actions/github @actions/exec
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // TODO: get input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // TODO: upload files
  const s3Uri = `s3://${bucket}`;
  // exec.exec('aws s3 sync <local-folder> <s3-bucket>')
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice('Hello from my custom JS action');
}
run();

