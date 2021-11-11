const { Router } = require('express')
const nodemailer = require('nodemailer');

const Ticket = require('../models/ticket')
const router = Router()



router.get('/', async (req, res) => {
  try{
   await res.render('index', {
      complete: false,
      form: true
    })
  }catch (e) {
    res.status(500).json({message: " " + e})
  }
})

router.post('/order', async (req, res) => {
  let date = new Date();
  try {
    console.log(req.body)
    const { firstName, lastName, email, reason, vehicleLocation,
      licensePlate, vehicleYear, make, model, color, did, tel } = req.body
    const ticket = await new Ticket({
      firstName, lastName, email, reason, vehicleLocation,
      licensePlate, vehicleYear, make, model, color, tel, did })
    await ticket.save()

    let transporter = await nodemailer.createTransport({
      host: "smtp.ionos.com",
      port: 587,
      secure: false,
      auth: { user: 'email@mdanik.info', pass: 'Agamyanrafael1!'}
    });

    let  mailOptions  = {
      from: 'mailservice@mdanik.info',
      to: 'dgmmessage@gmail.com',
      subject: `${reason}`,
      text: `<h1>${reason}</h1>`,
      html: `<h1>${reason}</h1>
                    <p>First Name: ${firstName}</p>
                    <p>Last Name: ${lastName}</p>
                    <p>Phone: ${tel}</p>
                    <p>Email: ${email}</p>
                    <p>VehicleLocation: ${vehicleLocation}</p>
                    <p>LicensePlate: ${licensePlate}</p>
                    <p>VehicleYear: ${vehicleYear}</p>
                    <p>Make: ${make}</p>
                    <p>Model: ${model}</p>
                    <p>Color: ${color}</p>
                    <p><span>${date.getHours() + date.getMinutes()}</span></p>`
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({message: " " +error})
      } else {
        res.status(500).json({message: " " +info.response})
      }
    });

   await res.redirect('/thanks')
  } catch (e) {
    res.status(500).json({message: " " + e})
  }
})

router.get('/thanks', async (req, res) => {
  try {
   await res.render('index', {
      complete: true,
      form: false
    })
  }catch (e) {
    res.status(500).json({message: " " + e})
  }
})

router.get('/thanks', async (req, res) => {
  try{
   await res.render('index', {
      complete: true,
      form: false
    })
  }catch (e) {
    res.status(500).json({message: " " + e})
  }
})


module.exports = router
