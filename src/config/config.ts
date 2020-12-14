export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.UDAGRAM_AWS_REGION,
  'aws_profile': process.env.UDAGRAM_AWS_PROFILE,
  'aws_media_bucket': process.env.UDAGRAM_AWS_BUCKET,
  'url': process.env.SERVER_URL,
  'jwt': {
    'secret': process.env.UDAGRAM_JWT_SECRET,
  },
};
