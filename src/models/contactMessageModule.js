import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * @openapi
 * components:
 *   schema:
 *     SendMessage:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           default: mugabo alexandre
 *           required: true
 *         email:
 *           type: string
 *           default: mugaboalexandre@gmail.com
 *           required: true
 *         subject:
 *           type: string
 *           default: i requesting a one on one meet
 *           required: true
 *         message:
 *           type: string
 *           default: i sent you an email requestion for more documents but unfortunetly no response?
 *           required: true
 *     ResponseMessage:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           format: objectId
 *           default: 63ce49f01c940d3eaca33cbb
 *         name:
 *           type: string
 *           default: mugabo alexandre
 *         email:
 *           type: string
 *           default: mugaboalexandre@gmail.com
 *         subject:
 *           type: string
 *           default: i requesting a one on one meet
 *         message:
 *           type: string
 *           default: i sent you an email requestion for more documents but unfortunetly no response?
 *         createdAt:
 *           type: string
 *           default: 2023-01-23T08:48:48.363Z
 *         updatedAt:
 *           type: string
 *           default: 2023-01-23T08:48:48.363Z
 *         __v:
 *           type: number
 *           default: 0
 */

const contactMessages = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model('contactMessages', contactMessages);
