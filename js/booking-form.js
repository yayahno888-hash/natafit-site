// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'; // Токен бота
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';     // ID чата

// Обработчик отправки формы
document.getElementById('booking-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const formMessage = document.getElementById('form-message');
    const originalBtnText = submitBtn.innerHTML;
    
    // Получаем данные формы
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        trainingType: document.getElementById('training-type').value,
        preferredDate: document.getElementById('preferred-date').value,
        message: document.getElementById('message').value
    };
    
    // Показываем индикатор загрузки
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Отправка...';
    formMessage.style.display = 'none';
    
    try {
        // Формируем сообщение для Telegram
        const trainingTypes = {
            'personal': 'Персональная тренировка',
            'group': 'Групповое занятие',
            'online': 'Онлайн-программа'
        };
        
        const telegramMessage = `
🆕 НОВАЯ ЗАЯВКА НА ТРЕНИРОВКУ!

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
💪 Тип: ${trainingTypes[formData.trainingType] || formData.trainingType}
📅 Дата: ${formData.preferredDate || 'Не указана'}
💬 Комментарий: ${formData.message || 'Нет'}

⏰ Время заявки: ${new Date().toLocaleString('ru-RU')}
        `.trim();
        
        // Отправка в Telegram
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });
        
        const result = await response.json();
        
        if (result.ok) {
            // Успех!
            formMessage.style.display = 'block';
            formMessage.style.background = 'var(--success-bg, #d4edda)';
            formMessage.style.color = 'var(--success-text, #155724)';
            formMessage.style.border = '2px solid var(--success-border, #c3e6cb)';
            formMessage.innerHTML = '✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.';
            
            // Очищаем форму
            this.reset();
        } else {
            throw new Error('Ошибка отправки в Telegram');
        }
        
    } catch (error) {
        console.error('Ошибка:', error);
        
        // Показываем ошибку
        formMessage.style.display = 'block';
        formMessage.style.background = 'var(--error-bg, #f8d7da)';
        formMessage.style.color = 'var(--error-text, #721c24)';
        formMessage.style.border = '2px solid var(--error-border, #f5c6cb)';
        formMessage.innerHTML = '❌ Произошла ошибка. Пожалуйста, свяжитесь с нами по телефону или через мессенджеры.';
    } finally {
        // Возвращаем кнопку в исходное состояние
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
});

// Установка минимальной даты (сегодня)
const dateInput = document.getElementById('preferred-date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}
