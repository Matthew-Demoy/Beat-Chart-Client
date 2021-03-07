const aws = require("aws-sdk");
const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;

aws.config.update({
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  region: process.env.REACT_APP_AWS_REGION,
});

const signedUrlExpireSeconds = 6000 * 1;

export const getSignedURLForObject = (key: string) => {
  const s3 = new aws.S3({
    signatureVersion: "v4",
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    region: process.env.REACT_APP_AWS_REGION,
  });

  
  const url = s3.getSignedUrl("getObject", {
    Bucket: S3_BUCKET,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });

  return url;
};
