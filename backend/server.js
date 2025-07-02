require('dotenv').config();
const app = require('./app');
const scheduleDailyLessons = require('./scheduler/lessonScheduler');

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running');
  scheduleDailyLessons();
});