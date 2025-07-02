const cron = require('node-cron');
const supabase = require('../services/supabaseClient');
const { sendDailyLesson } = require('../controllers/lessonController');

const scheduleDailyLessons = () => {
  cron.schedule('0 8 * * *', async () => { // Every day at 8 AM
    const { data: users } = await supabase.from('users').select('*');
    for (const user of users) {
      await sendDailyLesson(user);
    }
  });
};

module.exports = scheduleDailyLessons;
