const mailchimp = require("@mailchimp/mailchimp_marketing");
require("dotenv").config();

mailchimp.setConfig({
  apiKey: process.env.API_MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

const listId = process.env.LIST_ID;

async function subscribeWithMailchimp(req, res, next) {
  try {
    const subscribingUser = {
      firstName: "",
      lastName: "",
      email: req.body.email,
    };
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
    });

    console.log(
      `Successfully added contact as an audience member. The contact's id is ${response.id}.`
    );
    if (response.status === "subscribed") {
      res.json({
        status: "success",
      });
    }
  } catch (error) {
    res.json({
      status: "fail",
    });
    next(error);
  }
}

module.exports = subscribeWithMailchimp;
