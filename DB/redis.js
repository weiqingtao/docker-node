const Redis = require("ioredis");
const client = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST // Redis host
});
module.exports = client