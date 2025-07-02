microlearning-coach/
│
├── src/
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   └── lessonController.js  # Lesson delivery logic
│   ├── models/
│   │   ├── Lesson.js            # Lesson schema
│   │   └── User.js              # User schema
│   ├── routes/
│   │   └── webhook.js           # WhatsApp webhook endpoint
│   ├── scheduler/
│   │   └── lessonScheduler.js   # Daily lesson scheduler
│   ├── services/
│   │   └── whatsappService.js   # Twilio WhatsApp integration
│   ├── utils/
│   │   └── logger.js            # Logger utility
│   ├── app.js                   # Express app setup
│   └── server.js                # Entry point
│
├── .env                         # Environment variables
├── package.json
└── README.md

## Supabase Table Structure

- **users**
  - id (uuid, PK)
  - phone (text, unique)
  - preferences (text[], e.g., ['english'])
  - last_lesson_sent (timestamp)
  - progress (jsonb, optional)

- **lessons**
  - id (uuid, PK)
  - topic (text)
  - category (text, e.g., 'english', 'digital', 'vocational')
  - content (text)
  - duration (integer)

---

**How to proceed:**
1. Create the `users` and `lessons` tables in Supabase.
2. Add your Supabase credentials to `.env`.
3. Add lesson data to the `lessons` table.
4. Run `npm install` and start your server.

Let me know if you want SQL for table creation or a script to seed lessons!
