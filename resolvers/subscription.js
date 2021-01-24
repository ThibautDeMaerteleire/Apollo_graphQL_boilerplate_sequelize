/**
 * The Subscription Resolvers
 */

const pubsub = require('./pubsub');

module.exports = {
  Subscription: {
    userAdded: { subscribe: () => pubsub.asyncIterator("USER_ADDED") },
  }
};