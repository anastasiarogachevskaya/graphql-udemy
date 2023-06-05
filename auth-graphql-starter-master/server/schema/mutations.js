const graphql = require('graphql');
const UserType = require('./types/user_type');
const AuthServices = require('../services/auth');
const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthServices.signup({ email, password, req });
      }
    },
    // logout: {
    //     type: UserType,
    //     resolve(parentValue, args, req) {
    //         const { user } = req;
    //         req.logout();
    //         return user;
    //     }
    // },
  }
});

module.exports = mutation;