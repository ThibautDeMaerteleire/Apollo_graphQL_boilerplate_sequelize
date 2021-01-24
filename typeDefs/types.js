/**
 * The GraphQL types
 */

const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  #type Image {
  #  filename: String!
  #  mimetype: ImageMimeTypes!
  #  encoding: String!
  #}

  #enum ImageMimeTypes {
  #  image/apng	
  #  image/avif
  #  image/gif
  #  image/jpeg
  #  image/png
  #  image/svg+xml
  #  image/webp
  #}

  enum ImageExtensions {
    JPG,
    JPEG,
    jpg,
    jpeg,
    png,
    PNG,
    gif,
    GIF,
    webp,
    WEBP,
    WebP,
    tif,
    tiff,
    bmp,
    eps,
    EPS,
    raw,
    RAW
  }

  type Token {
    token: String
    id: ID
  }

  type AuthData {
    userId: ID
    token: String
    admin: Boolean
  }

  type User {
    id: ID
    email: String
    password: String
    username: String
    firstName: String
    lastName: String
    createdAt: Date
    lastOnline: Date
    token: String
    authToken: String
    updatedAt: String
  }
`;