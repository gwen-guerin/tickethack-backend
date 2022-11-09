const mongoose = require('mongoose')
const connectionString = "mongodb+srv://gwenael_guerin:5FZYShjZRrrnIpPH@cluster0.kqcpazb.mongodb.net/TicketHack"

mongoose.connect(connectionString, {
    connectTimeoutMS: 2000
}).then(() => console.log('DB connected')).catch(error => console.error(error))