import { Router } from 'express';
import { openai } from '../../../config/openai.config';
import { authMiddleware } from '../../../middleware/auth';

const router = Router();

router.post('/getChat', authMiddleware, async (req, res) => {
  const text = req.body.text as string;
  console.log(text);

  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            "You are a chatbot for a school education portal. You will generate answers for student 's queries \n Give this response in a pure string format.",
        },
        {
          role: 'user',
          content: text,
        },
      ],
    });

    res.send(chat.choices[0].message.content!);
  } catch (error) {
    console.error(
      'Error fetching chat response:',
      (error as any).response?.data || (error as any).message || error
    );
    res.status(500).send({ message: 'Sorry, something went wrong.' });
  }
});

export default router;
