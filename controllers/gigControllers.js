const { INTERNAL_SERVER_ERROR_CODE } = require("../constants/constants");
const {
  successReplyMessage,
  catchReplyMessage,
} = require("../helpers/gigHelpers");
const Gig = require("../models/Gig");

exports.getAllGigs = async (request, reply) => {
  try {
    const data = await Gig.findAll();
    reply(successReplyMessage(data)).code(200);
  } catch (error) {
    reply(catchReplyMessage("Error while getting all users list")).code(
      INTERNAL_SERVER_ERROR_CODE
    );
  }
};

exports.getSingleGig = async (request, reply) => {
  try {
    const data = await Gig.findAll({
      where: {
        id: request.params.id,
      },
    });
    reply(successReplyMessage(data)).code(200);
  } catch (error) {
    reply(catchReplyMessage("Error while getting user details")).code(
      INTERNAL_SERVER_ERROR_CODE
    );
  }
};

exports.createGig = async (request, reply) => {
  const payload = request.payload;
  console.log(payload)
  try {
    await Gig.create({
      ...payload,
    });
    reply(successReplyMessage("", "Gig created successfully")).code(200);
  } catch (error) {
    reply(catchReplyMessage("Error while creating user")).code(
      INTERNAL_SERVER_ERROR_CODE
    );
  }
};

exports.updateGig = async (request, reply) => {
  const paramId = request.params.id;
  const budget = request.payload.budget;
  try {
    await Gig.update(
      {
        budget: budget,
      },
      {
        where: {
          id: paramId,
        },
      }
    );

    reply(successReplyMessage("", "Gig updated successfully")).code(200);
  } catch (error) {
    reply(catchReplyMessage("Error while updating user")).code(
      INTERNAL_SERVER_ERROR_CODE
    );
  }
};

exports.deleteGig = async (request, reply) => {
  const paramId = request.params.id;
  try {
    await Gig.destroy({
      where: {
        id: paramId,
      },
    });

    reply(successReplyMessage("", "Gig deleted successfully")).code(200);
  } catch (error) {
    reply(catchReplyMessage("Error deleting creating user")).code(
      INTERNAL_SERVER_ERROR_CODE
    );
  }
};
