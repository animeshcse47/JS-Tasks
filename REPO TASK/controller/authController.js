const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        const existing = await User.findOne({ email: req.body.email })
        if (existing) return res.status(400).json({ success: false, message: "Email already in use" })

        const hashed = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({ name: req.body.name, email: req.body.email, password: hashed })

        res.status(201).json({ success: true, message: "Registration successful", userId: user._id })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(404).json({ success: false, message: "User not found" })

        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) return res.status(401).json({ success: false, message: "Invalid credentials" })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
        res.status(200).json({ success: true, token })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}
