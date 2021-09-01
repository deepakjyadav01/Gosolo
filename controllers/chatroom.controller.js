const mongoose = require('mongoose');
const ChatRoom = require('../models/chatRoom.model');
const chatMessage = require('../models/ChatMessage.model');
const User = require('../models/user.model');
const makeValidation = require('@withvoid/make-validation');

module.exports.initiate = async (req, res) => {
    try {
        const validation = makeValidation(types => ({
            payload: req.body,
            checks: {
                userIds: {
                    type: types.array,
                    options: { unique: true, empty: false, stringOnly: true }
                },
                chatInitiator: {
                    type: types.string,
                    options: { empty: false, stringOnly: true }
                },
                type: { type: types.enum, options: { enum: ChatRoom.CHAT_ROOM_TYPES } },
            }
        }));
        if (!validation.success) return res.status(400).json({ ...validation });

        const { userIds, type } = req.body;
        const chatInitiator = req.userId;
        const chatRoom = await ChatRoom.initiateChat(userIds, type, chatInitiator);
        return res.status(200).json({ success: true, chatRoom });
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

module.exports.postMessage = async (req, res) => {
    try {
        const { roomId } = req.params;
        const validation = makeValidation(types => ({
            payload: req.body,
            checks: {
                messageText: { type: types.string },
            }
        }));
        if (!validation.success) return res.status(400).json({ ...validation });

        const messagePayload = {
            messageText: req.body.messageText,
        };
        const currentLoggedUser = req.userId;
        const post = await chatMessage.createPostInChatRoom(roomId, messagePayload, currentLoggedUser);
        global.io.sockets.in(roomId).emit('new message', { message: post });
        return res.status(200).json({ success: true, post });
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

module.exports.markConversationReadByRoomId = async (req, res) => {
    try {
        const { roomId } = req.params;
        const room = await ChatRoom.getChatRoomByRoomId(roomId)
        if (!room) {
            return res.status(400).json({
                success: false,
                message: 'No room exists for this id',
            })
        }

        const currentLoggedUser = req.userId;
        const result = await chatMessage.markMessageRead(roomId, currentLoggedUser);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error });
    }
}

module.exports.getConversationByRoomId = async (req, res) => {
    try {
        const { roomId } = req.params;
        const room = await ChatRoom.getChatRoomByRoomId(roomId)
        if (!room) {
            return res.status(400).json({
                success: false,
                message: 'No room exists for this id',
            })
        }
        const users = await User.getUserByIds(room.userIds);
        const options = {
            page: parseInt(req.query.page) || 0,
            limit: parseInt(req.query.limit) || 10,
        };
        const conversation = await chatMessage.getConversationByRoomId(roomId, options);
        return res.status(200).json({
            success: true,
            conversation,
            users,
        });
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}

module.exports.deleteRoomById = async (req, res) => {
    try {
        const { roomId } = req.params;
        const room = await ChatRoomModel.remove({ _id: roomId });
        const messages = await ChatMessageModel.remove({ chatRoomId: roomId })
        return res.status(200).json({
            success: true,
            message: "Operation performed succesfully",
            deletedRoomsCount: room.deletedCount,
            deletedMessagesCount: messages.deletedCount,
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

module.exports.deleteMessageById = async (req, res) => {
    try {
        const { messageId } = req.params;
        const message = await ChatMessageModel.remove({ _id: messageId });
        return res.status(200).json({
            success: true,
            deletedMessagesCount: message.deletedCount,
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}