import express from 'express';
import { createContactMessageValication } from '../../middleWares/contactMessageValidation.js';
import {
  createMessage,
  deleteMessage,
  messageCount,
  retrieveAllMessages,
  retrieveSingleMessage,
} from '../../controller/contactMessageController.js';
const messagerouter = express.Router();
import { authorized } from '../../middleWares/authentication.js';
import adminAccess from '../../middleWares/adminAccess.js';
import userAccess from '../../middleWares/userAccess.js';

/**
 * @openapi
 * /contactMessages:
 *   get:
 *     tags:
 *       - Contact Messages
 *     summary: Retrieve all contact messages
 *     security:
 *       - token: []
 *     responses:
 *       200:
 *         description: All Messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schema/ResponseMessage'
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access
 *       500:
 *         description: Server error
 */

messagerouter.get('/', authorized, adminAccess, retrieveAllMessages);

/**
 *  @openapi
 * /contactMessages/{id}:
 *   get:
 *     tags:
 *       - Contact Messages
 *     summary: Retrieve a single message
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the message
 *         required: true
 *     responses:
 *       200:
 *         description: Content of a messages
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/ResponseMessage'
 *       400:
 *         description: Invalid message id
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to get a single message
 *       404:
 *         description: message not found
 *       500:
 *         description: Server error
 */

messagerouter.get('/:id', authorized, adminAccess, retrieveSingleMessage);

/**
 *  @openapi
 * /contactMessages/messageCount:
 *   get:
 *     tags:
 *       - Contact Messages
 *     summary: Count the number of all messages
 *     security:
 *       - token: []
 *     responses:
 *       200:
 *         description: MessageCount
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  MessageCount:
 *                      type: number
 *                      default: 0
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to get a single message
 *       500:
 *         description: Server error
 */

messagerouter.get('/messageCount', authorized, adminAccess, messageCount);

/**
 * @openapi
 * /contactMessages:
 *   post:
 *     tags:
 *       - Contact Messages
 *     summary: Send a message
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/SendMessage'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/ResponseMessage'
 *       400:
 *         description: Invalid info
 *       500:
 *         description: Server error
 */

messagerouter.post('/', createContactMessageValication, createMessage);

/**
 * @openapi
 * /contactMessages/{id}:
 *   delete:
 *     tags:
 *       - Contact Messages
 *     summary: Delete a message
 *     security:
 *       - token: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The unique id of the message
 *         required: true
 *     responses:
 *       204:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                 type: string
 *                 default: Message deleted
 *       400:
 *         description: Invalid message id
 *       401:
 *         description: Should authorized( logged in)
 *       403:
 *         description: Should have an admin access to get a single message
 *       404:
 *         description: message not found
 *       500:
 *         description: Server error
 */

messagerouter.delete('/:id', authorized, adminAccess, deleteMessage);

export default messagerouter;
