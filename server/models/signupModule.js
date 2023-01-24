import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * @openapi
 * components:
 *   schema:
 *     UserSignUp:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           default: umurungi
 *           required: true
 *         lastName:
 *           type: string
 *           default: helen
 *           required: true
 *         email:
 *           type: string
 *           default: umurungihelen@gmail.com
 *           required: true
 *         password:
 *           type: string
 *           default: bob
 *           required: true
 *     Response:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           format: objectId
 *           default: 63ce49f01c940d3eaca33cbb
 *         firstName:
 *           type: string
 *           default: umurungi
 *         lastName:
 *           type: string
 *           default: helen
 *         email:
 *           type: string
 *           default: umurungihelen@gmail.com
 *         password:
 *           type: string
 *           default: $2b$10$Y4y3DJIVPunzwyC1A4taMe4R3MdCh.vJ3nyVcA5DZkGuGAw1dleVy
 *         role:
 *           type: string
 *           default: user
 *         createdAt:
 *           type: string
 *           default: 2023-01-20T16:24:08.227Z
 *         updatedAt:
 *           type: string
 *           default: 2023-01-20T16:24:08.227Z
 *         __v:
 *           type: number
 *           default: 0
 */

const signup = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  { timestamps: true }
);

export default mongoose.model('signup', signup);
