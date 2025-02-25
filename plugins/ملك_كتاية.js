const handler = async (m, { conn, text }) => {
    const options = ['ملك', 'كتابة'];
    const userChoice = text.trim().toLowerCase();

    if (!options.includes(userChoice)) {
        return await conn.reply(m.chat, 'الرجاء استخدام أحد الخيارات التالية:\n- 👑 ملك\n- 📝 كتابة\n\n*لكى تلعب اكتب .جنيه ملك او .جنيه كتابة*\n*اتمنى لك وقت سعيدا مستخدم بوت التوينز 🌚👑♥️*', m);
    }

    // اختيار فهرس عشوائي داخل مصفوفة الخيارات
    const botChoiceIndex = Math.floor(Math.random() * options.length);
    const botChoice = options[botChoiceIndex];
    let result;

    if (userChoice === botChoice) {
        result = 'إنها تعادل! 🤝';
    } else {
        result = `لقد اخترت ${userChoice}، والبوت اختار ${botChoice}.\n${botChoice === 'ملك' ? 'البوت فاز! 🏆' : 'أنت فزت! 🎉'}`;
    }

    await conn.reply(m.chat, `لقد اخترت: ${userChoice}\nالبوت اختار: ${botChoice}\n${result}`, m);
};

handler.help = ['جنية (جنيهه|جنيه)'];
handler.tags = ['game'];
handler.command = /^(جنية|جنيه|كينج)$/i;

export default handler;
