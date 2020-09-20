const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function postCharge(req, res) {
  try {
    const { amount } = req.body;

    const charge = await stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });

    if (!charge) throw new Error("charge unsuccessful");

    res.status(200).json({
      message: "charge posted successfully",
      charge,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = postCharge;
