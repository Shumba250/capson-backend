import contactMessages from '../models/contactMessageModule.js';

//retrieve all messages
const retrieveAllMessages = async (req, res) => {
  try {
    const messages = await contactMessages.find().exec();
    res.status(200).json({
      status: 'success',
      message: 'all messages retireved',
      data: { messageCount: messages.length, messages: messages },
    });
  } catch (error) {
    res
      .status(404)
      .json({ status: 'error', message: 'failed to retrieve messages' });
  }
};
//retrieve a single message
const retrieveSingleMessage = async (req, res) => {
  try {
    const messages = await contactMessages.findOne({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      message: 'message retireved',
      data: { messages: messages },
    });
  } catch (error) {
    res.status(404).json({ status: 'error', message: 'message not found' });
  }
};
//add a message
const createMessage = async (req, res) => {
  try {
    const message = new contactMessages({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
    const messages = await message.save();
    res.status(200).json({
      status: 'success',
      message: 'message was sent successfully',
      data: { messages: messages },
    });
  } catch (error) {
    res.status(404).json({ status: 'error', message: 'message not sent' });
  }
};
//delete a message
const deleteMessage = async (req, res) => {
  try {
    const messages = await contactMessages.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      message: 'message deleted successfully',
      data: { messages: messages },
    });
  } catch (error) {
    res.status(404).json({ status: 'error', message: 'message not deleted' });
  }
};

export {
  createMessage,
  retrieveAllMessages,
  retrieveSingleMessage,
  deleteMessage,
};
