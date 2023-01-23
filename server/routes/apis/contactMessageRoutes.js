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

messagerouter.get('/', authorized, adminAccess, retrieveAllMessages);

messagerouter.get('/:id', authorized, adminAccess, retrieveSingleMessage);

messagerouter.get('/messageCount', authorized, adminAccess, messageCount);

messagerouter.post(
  '/',
  createContactMessageValication,
  authorized,
  userAccess,
  createMessage
);

messagerouter.delete('/:id', authorized, adminAccess, deleteMessage);

export default messagerouter;
